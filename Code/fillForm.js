var fill_form_data = {
    "code": "",
    "answers": []
};

var initialized = false;

var questions = {};

function fetchForm(){
    var form_code = $("#formCode").val();
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
    // Initialize answer sheet
    for(let i=0; i<questions.length; i++){
        fill_form_data.answers.push({"answer": ""});
    }
}

function fillFormRender(){
    $("main").html("");
    var html_string = `
        <h2>Fill Out the Form</h2>
        <form name="fillForm" action="#" id="fillForm" onsubmit="return false">
        <fieldset id=""><span class="section">1</span>
            <legend>Form Code</legend>
            <input id="formCode" placeholder="Please input the 6-digit form code">
            <button id="formCodeSubmit">Search Form</button>
        </fieldset>
        <fieldset id="fillQuestions">
            <legend><span class="section">2</span>Questions</legend>`;
    
    for(let i=0; i<questions.length; i++){
        let prompt = questions[i].prompt;
        html_string += `<fieldset id="question${i+1}" class="creationQuestion">
            <legend>Question ${i+1}</legend>
            <label class="question${i+1}PromptLbl">${prompt}</label>`;
        if(questions[i].typeOfQuestion == "multipleChoice"){
            for(let j=0; j<3; j++){
                html_string += `<label><input type="radio" class="questionType" name="question${i+1}Choice${j}" 
                value="0" ${fill_form_data.answers[i].answer==j?'checked':''} required>
                 ${questions[i].choices[j].choiceContent}</label>`;
            }
        }
        else if(questions[i].typeOfQuestion == "slider"){
            html_string += `<input type="range" min="${questions[i].sliderMin}" max="${questions[i].sliderMax}" name="question${i+1}Slider" required>`;
        }
        else if(questions[i].typeOfQuestion == "textInput"){
            html_string += `<textarea rows="5" cols="20" name="question${i+1}Text">`;
        }

        html_string += `</fieldset>`;
    }

    html_string += `
        <button type="button" id="submitButton">Submit Form!</button>
        </fieldset>
        </form>`;

    $("main").append(html_string);
}

function firstRender(){
    $("main").html("");
    var html_string = `
        <h2>Fill Out the Form</h2>
        <form name="fillForm" action="#" id="fillForm" onsubmit="return false">
        <fieldset id=""><span class="section">1</span>
            <legend>Form Code</legend>
            <input id="formCode" placeholder="Please input the 6-digit form code">
            <button id="formCodeSubmit">Search Form</button>
        </fieldset>
        </form>`;
    $("main").append(html_string);
}

function addEventListeners(){
    $("#formCodeSubmit").click(function(){
        if(initialized){
            if(!confirm("You already have a form loaded. This action will destroy your progress on this form. Proceed?")){
                return;
            }
        }
        fetchForm();
        fillFormRender();
        addEventListeners();
    });
    $("input").change(function(){
        console.log($(this).val())
    })
}

$(window).ready(function(){
    firstRender();
    addEventListeners();
});