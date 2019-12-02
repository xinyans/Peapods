var fill_form_data = {
    "code": ""
};

function fetchForm(){
    var form_code = $("#formCode").val();
    $.ajax({
        type: "GET",
        async: false,
        url: "../Ajax/ajaxFillForm.php",
        data: {"code": form_code},
        success: function(msg){
            var result = JSON.parse(msg);
            console.log("Ajax finishes with success: ", result);
            console.log("One: ", JSON.parse(result.formData));
            fill_form_data.questions = JSON.parse(result.formData).questions;
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
            <button id="formCodeSubmit">Search Form</button>
        </fieldset>
        <fieldset id="fillQuestions">
            <legend><span class="section">2</span>Questions</legend>`;
            console.log(fill_form_data.questions);
    for(let i=0; i<fill_form_data.questions.length; i++){
        let prompt = fill_form_data.questions[i].prompt;
        html_string += `<fieldset id="question${i+1}" class="creationQuestion">
            <legend>Question ${i+1}</legend>
            <label class="questionPromptLbl">${prompt}</label>`;

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
        if(("questions" in fill_form_data) == true){
            if(!confirm("You already have a form loaded. This action will destroy your progress on this form. Proceed?")){
                return;
            }
        }
        fetchForm();
        fillFormRender();
        addEventListeners();
    });
}

$(window).ready(function(){
    firstRender();
    addEventListeners();
});