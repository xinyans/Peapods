var fill_form_data = {
    "name" : "",
    "contact" : "",
    "c" : -1,
    "g" : -1,
    "answers": [],
    "data" : []
};

var initialized = false;

var current_form_code;

var form_name;
var questions = [];

function fetchForm(){
    var form_code = $("input[name='code']").val();
    current_form_code = form_code;
    if(form_code.length == 0){
        alert("Form Code cannot be empty");
        return;
    }
    $.ajax({
        type: "GET",
        async: false,
        url: "../Ajax/ajaxFillForm.php",
        data: {code: form_code},
        success: function(msg){
            console.log(msg);
            var result = JSON.parse(msg);
            console.log("Ajax finishes with success: ", result);
            console.log("One: ", (result));
            questions = (result).questions;
            form_name = (result).name;
        },
        error: function(msg, detail){
            console.log("Ajax finishes with error: ", msg, " With detail: ", detail);
        }
    });
}

function fillFormRender(){
    $("main").html("");

    var html_string = `
        <h2>${form_name}</h2>
        <form name="fillForm" action="#" id="fillForm" onsubmit="return false">
        <fieldset id="personalInfo">
            <legend><span class="section">1</span>Personal Information</legend>
            <label>Your Name<input type="text" id="studentName" required></label>
            <label>Your Email<input type="text" id="studentEmail" required></label>
        <fieldset id="fillQuestions">
            <legend><span class="section">2</span>Questions</legend>`;
    
    for(let i=0; i<questions.length; i++){
        let prompt = questions[i].prompt;
        html_string += `<fieldset id="question${i+1}" class="creationQuestion">
            <legend>Question ${i+1}</legend>
            <label class="question${i+1}PromptLbl">${prompt}</label>`;
        if(questions[i].typeOfQuestion == "multipleChoice"){
            for(let j=0; j<questions[i].choices.length; j++){
                html_string += `<label><input type="radio" class="questionType" name="question${i+1}Choice" 
                value="${j}" required>
                 ${questions[i].choices[j].choiceContent}</label>`;
            }
        }
        else if(questions[i].typeOfQuestion == "slider"){
            html_string += `<input class="sliderBar" type="range" min="${questions[i].sliderMin}" max="${questions[i].sliderMax}" name="question${i+1}Slider" required>
            <span>${questions[i].sliderMin}</span><span style="float:right">${questions[i].sliderMax}</span>`;
        }
        else if(questions[i].typeOfQuestion == "textInput"){
            html_string += `<textarea style="width: 100%" rows="5" cols="20" name="question${i+1}Text"></textarea>`;
        }

        html_string += `</fieldset>`;
    }

    html_string += `
        <button type="button" id="submitButton">Submit Form!</button>
        </fieldset>
        </form>`;
    console.log(html_string);

    $("main").html(html_string);
}

function addEventListeners(){
    $("main #formCodeSubmit").click(function(){
        if(initialized){
            if(!confirm("You already have a form loaded. This action will destroy your progress on this form. Proceed?")){
                return;
            }
        }
        initialized = true;
        fetchForm();
        fillFormRender();
        addEventListeners();
    });
    $("#submitButton").click(function(){
        var student_name = $("#studentName").val();
        var student_email = $("#studentEmail").val();
        if(student_name == ""){
            alert("Fill in your name!");
            return;
        }
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(student_email))){
            alert("Invalid email!");
            return;
        }
        if(!confirm(`Sure about submitting with name ${student_name} and email ${student_email}?`)){
            return;
        }
        fill_form_data.name = student_name;
        fill_form_data.contact = student_email;
        var index = 0;
        var errorMsg = "";
        $("#fillQuestions").find("fieldset").each(function(){
            if(questions[index].typeOfQuestion == "multipleChoice"){
                let selected = $(this).find("input:checked").val();
                if(!selected) errorMsg += `Please Fill out question${index+1}.\n`;
                let normalized = selected / questions[index].numOfChoices;
                fill_form_data.answers.push({"answer" : selected});
                fill_form_data.data.push(normalized);
            }
            else if(questions[index].typeOfQuestion == "slider"){
                let selected = $(this).find("input").val();
                if(!selected) errorMsg += `Please Fill out question${index+1}.\n`;
                let normalized = (selected - questions[index].sliderMin) / (questions[index].sliderMax - questions[index].sliderMin);
                fill_form_data.answers.push({"answer" : selected});
                fill_form_data.data.push(normalized);
            }
            else{
                let value = $(this).find("textarea").val();
                fill_form_data.answers.push({"answer" : value});
            }
            index += 1;
        });
        if(errorMsg != ""){
            alert(errorMsg);
            return;
        }
        console.log(fill_form_data);
        $.ajax({
            type: "POST",
            url: "../Ajax/ajaxFillForm.php",
            data: {data: JSON.stringify(fill_form_data), code: current_form_code},
            success: function(msg){
                runAlgo(current_form_code, 1);
                console.log("Ajax finishes with success: ", msg);
                //alert("Form submitted!");
                location.href = "../Pages/index.php";
            },
            error: function(msg, detail){
                console.log("Ajax finishes with error: ", msg, " With detail: ", detail);
            }
        });
    });
}

window.onload = function(){
    fetchForm();
    fillFormRender();
    addEventListeners();
    addLoginListeners();
    groupSearch();
};