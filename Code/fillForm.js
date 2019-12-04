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

var questions = [];

function fetchForm(){
    var form_code = $("#formCode").val();
    current_form_code = form_code;
    if(form_code.length == 0){
        alert("Form Code cannot be empty");
        return;
    }
    $.ajax({
        type: "GET",
        async: false,
        url: "../Ajax/ajaxFillForm.php",
        data: {"code": form_code},
        success: function(msg){
            console.log(msg);
            var result = JSON.parse(msg);
            console.log("Ajax finishes with success: ", result);
            console.log("One: ", JSON.parse(result.formData));
            questions = JSON.parse(result.formData).questions;
        },
        error: function(msg, detail){
            console.log("Ajax finishes with error: ", msg, " With detail: ", detail);
        }
    });
}

function fillFormRender(){
    $("main").html("");
    var html_string = `
        <h2>Fill Out the Form</h2>
        <form name="fillForm" action="#" id="fillForm" onsubmit="return false">
        <fieldset id=""><span class="section">1</span>
            <legend>Form Code</legend>
            <input id="formCode" placeholder="Please input the 6-digit form code">
            <button type="button" id="formCodeSubmit">Search Form</button>
        </fieldset>
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
            html_string += `<input type="range" min="${questions[i].sliderMin}" max="${questions[i].sliderMax}" name="question${i+1}Slider" required>`;
        }
        else if(questions[i].typeOfQuestion == "textInput"){
            html_string += `<textarea rows="5" cols="20" name="question${i+1}Text"></textarea>`;
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

function firstRender(){
    $("main").html("");
    var html_string = `
        <h2>Fill Out the Form</h2>
        <form name="fillForm" action="#" id="fillForm" onsubmit="return false">
        <fieldset id=""><span class="section">1</span>
            <legend>Form Code</legend>
            <input id="formCode" placeholder="Please input the 6-digit form code">
            <button type="button" id="formCodeSubmit">Search Form</button>
        </fieldset>
        </form>`;
    $("main").append(html_string);
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
        if(!confirm("Sure about submitting?")){
            return;
        }
        fill_form_data.name = "Some username";
        fill_form_data.contact = "Some email address";
        var index = 0;
        $("#fillQuestions").find("fieldset").each(function(){
            if(questions[index].typeOfQuestion == "multipleChoice"){
                let selected = $(this).find("input:checked").val();
                let normalized = selected / questions[index].numOfChoices;
                fill_form_data.answers.push({"answer" : selected});
                fill_form_data.data.push(normalized);
            }
            else if(questions[index].typeOfQuestion == "slider"){
                let selected = $(this).find("input").val();
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
        console.log(fill_form_data);
        $.ajax({
            type: "POST",
            url: "../Ajax/ajaxFillForm.php",
            data: {"data": fill_form_data, "code": current_form_code},
            success: function(msg){
                console.log("Ajax finishes with success: ", msg);
                // location.href = "../Pages/createFormSuccess.php";
            },
            error: function(msg, detail){
                console.log("Ajax finishes with error: ", msg, " With detail: ", detail);
            }
        });
    });
}

window.onload = function(){
    firstRender();
    addEventListeners();
    addLoginListeners();
    groupSearch();
};