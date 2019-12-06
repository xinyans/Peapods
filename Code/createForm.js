var creation_form_data = {
    "name": "Template Form for Websys",
    "dateCreated": "",
    "dateDue": "2018-09-09",
    "questions": [
        {
            "prompt": "Do you like front-end or back-end",
            "typeOfQuestion": "multipleChoice",
            "numOfChoices": 4,
            "choices": [
                {
                    "choiceContent": "Front End"
                },
                {
                    "choiceContent": "Back End"
                },
                {
                    "choiceContent": "Full Stack"
                },
                {
                    "choiceContent": "Do not know"
                }
            ]
        },
        {
            "prompt": "Estimate your experience in web development (5 for max)",
            "typeOfQuestion": "slider",
            "sliderMin": 1,
            "sliderMax": 5
        },
        {
            "prompt": "What do you think should the A threshold be for this course?",
            "typeOfQuestion": "slider",
            "sliderMin": 93,
            "sliderMax": 120
        },
        {
            "prompt": "Any Comments?",
            "typeOfQuestion": "textInput",
            "maxCharacters": 200
        }
    ]
}

function submitCreatedForm(){
    console.log("msg",creation_form_data["name"]);
    $.ajax({
        type: "POST",
        url: "../Ajax/ajaxCreateForm.php",
        data: {"form": creation_form_data, "name":creation_form_data["name"]},
        success: function(msg){
            console.log("Ajax finishes with success: ", msg);
            alert("Form Creation Success!");
            location.href = "../Pages/index.php";
        },
        error: function(msg, detail){
            console.log("Ajax finishes with error: ", msg, " With detail: ", detail);
        }
    });
}

function creationFormRender(data){
    $("main").html("");
    var html_string = `
        <h2>Create Your Form</h2>
        <form name="peapodForm" action="#" id="formCreationForm" method="post" onsubmit="return false;">
        <fieldset>
            <legend><span class="section">1</span>Basic Information</legend>
            <label class="" for="formName">Form Name</label>
            <input type="text" name="formName" id="formName" placeholder="50 Chars Max" maxlength="50" value="${data.name}" required autofocus>
            <p id="noName"></p>
            <label class="" for="dueDate">Due Date</label>
            <input type="date" name="dueDate" id="dueDate" value="${data.dateDue}" required>
            <p id="noDate"></p>
        </fieldset>
        <fieldset id="creationQuestions">
            <legend><span class="section">2</span>Choices of your Choice</legend>`;
    for(var i=0; i<data.questions.length; i++){
        html_string += `<fieldset id="question${i+1}" class="creationQuestion">
        <legend>Question ${i+1}</legend>
        <label class="questionPromptLbl" for="questionPrompt">Prompt of Question ${i+1}</label>
        <p class="noPrompt"></p>
        <input type="text" name="question${i+1}Prompt" class="questionPrompt" placeholder="200 characters max" maxlength="200" value="${data.questions[i].prompt}" required>
        <label class="questionTypeLbl">Type of Question ${i+1}</label>
        <label><input type="radio" class="questionType" name="question${i+1}Type" value="multipleChoice" ${data.questions[i].typeOfQuestion=='multipleChoice'?'checked':''} required> Multiple Choice</label>
        <label><input type="radio" class="questionType" name="question${i+1}Type" value="slider" ${data.questions[i].typeOfQuestion=='slider'?'checked':''} required> Slider</label>
        <label><input type="radio" class="questionType" name="question${i+1}Type" value="textInput" ${data.questions[i].typeOfQuestion=='textInput'?'checked':''} required> Text Input</label>
        <p class="noType"></p>`;
        if(data.questions[i].typeOfQuestion == "multipleChoice"){
            let selected = data.questions[i].numOfChoices;
            html_string += `
            <label class="questionExtra multipleChoice">How many choices would you like?</label>
            <select name="question${i+1}NumChoices" class="questionExtra multipleChoice">
            <option value="2" ${selected==2?"selected":""}>2</option>
            <option value="3" ${selected==3?"selected":""}>3</option>
            <option value="4" ${selected==4?"selected":""}>4</option>
            <option value="5" ${selected==5?"selected":""}>5</option>
            </select>`;
            for(var j=0; j<data.questions[i].numOfChoices; j++){
                var letter = String.fromCharCode(65+j);
                html_string += `<label>${letter}. <input type="text" name="question${i+1}Choice${j+1}" placeholder="Choice ${letter}" value="${data.questions[i].choices[j].choiceContent}"></label>`;
            }
        }
        else if(data.questions[i].typeOfQuestion == "slider"){
            let min = data.questions[i].sliderMin;
            let max = data.questions[i].sliderMax;
            html_string += `
            <label class="questionExtra slider">What is the min and max value of slider?
            <input type="number" name="question${i+1}Min" placeholder="min" value="${min?min:""}">
            <input type="number" name="question${i+1}Max" placeholder="max" value="${max?max:""}">
            </label>
            <p class="sliderErr"></p>`;
        }
        else if(data.questions[i].typeOfQuestion == "textInput"){
            let max_char = data.questions[i].maxCharacters;
            html_string += `
            <label class="questionExtra textInput">Designate a max character count for your answer
            <input type="number" name="question${i+1}MaxChar" placeholder="max charaters" value="${max_char?max_char:""}">
            </label>
            <p class="textInputErr"></p>`;
        }
        html_string += `
        <button type="button" id="question${i+1}DeleteBtn">Delete Question</button>
        <button type="button" id="question${i+1}MoveUpBtn">Move Up</button>
        <button type="button" id="question${i+1}MoveDownBtn">Move Down</button>
        </fieldset>`;

    }

    html_string += `
        <button type="button" id="addQuestion">Add Question</button>
        <button type="button" id="submitButton">Create Form!</button>
        </fieldset>
        </form>`;

    $("main").append(html_string);
}
/*
function findIntEnd(str, start){
    var end = start + 1;
    while(end <= str.length){
        if(str.substring(end-1, end) >= '0' && str.substring(end-1, end) <= '9'){
            end += 1;
        }
        else{
            break;
        }
        console.log("stht")
    }
    console.log("Answer: ", end);
    return end;
}*/

function addEventListeners(){
    $("main input").change(function(){
        var changed_input_name = $(this).prop("name");
        if(changed_input_name.length < 9 || isNaN(changed_input_name.substring(8,9))){
            if(changed_input_name == "formName"){
                creation_form_data.name = $(this).val();
            }
            else if(changed_input_name == "dueDate"){
                creation_form_data.dateDue = $(this).val();
            }
        }
        else{
            var index = parseInt(changed_input_name.substring(8, 9));
            var field = changed_input_name.substring(9);
            if(field == "Prompt"){
                creation_form_data.questions[index-1].prompt = $(this).val();
            }
            else if(field == "Type"){
                creation_form_data.questions[index-1].typeOfQuestion = $(this).val();
                if(!creation_form_data.questions[index-1].numOfchoices){
                    creation_form_data.questions[index-1].numOfChoices = 2;
                    creation_form_data.questions[index-1].choices = [{"choiceContent":""},{"choiceContent":""}];
                }
            }
            else if(field.substring(0, 6) == "Choice"){
                switch(parseInt(field.substring(6))){
                    case 1:
                        creation_form_data.questions[index-1].choices[0].choiceContent = $(this).val();
                        break;
                    case 2:
                        creation_form_data.questions[index-1].choices[1].choiceContent = $(this).val();
                        break;
                    case 3:
                        creation_form_data.questions[index-1].choices[2].choiceContent = $(this).val();
                        break;
                    case 4:
                        creation_form_data.questions[index-1].choices[3].choiceContent = $(this).val();
                        break;
                    case 5:
                        creation_form_data.questions[index-1].choices[4].choiceContent = $(this).val();
                        break;    
                }
            }
            else if(field == "Min"){
                creation_form_data.questions[index-1].sliderMin = $(this).val();
            }
            else if(field == "Max"){
                creation_form_data.questions[index-1].sliderMax = $(this).val();
            }
            else if(field == "MaxChar"){
                creation_form_data.questions[index-1].maxCharacters = $(this).val();
            }
        }
        creationFormRender(creation_form_data);
        addEventListeners();
    });

    $("main select").change(function(){
        var index = parseInt($(this).prop("name").substring(8, 9));
        for(var i=creation_form_data.questions[index-1].numOfChoices; i<$(this).val(); i++){
            creation_form_data.questions[index-1].choices.push({"choiceContent":""});
        }
        creation_form_data.questions[index-1].numOfChoices = $(this).val();
        
        creationFormRender(creation_form_data);
        addEventListeners();
    });

    $("main button").click(function(){
        var clicked_button_id = $(this).attr("id");
        if(clicked_button_id == "addQuestion"){
            creation_form_data.questions.push({"prompt": "","typeOfQuestion": ""});
        }
        else if(clicked_button_id == "submitButton"){
            if(confirm("Sure about this?")){
                submitCreatedForm();
            }
        }
        else{
            var index = parseInt(clicked_button_id.substring(8, 9));
            var field = clicked_button_id.substring(9);
            if(field == "DeleteBtn"){
                creation_form_data.questions.splice(index-1, 1);
            }
            else if(field == "MoveUpBtn"){
                console.log("Move up question ", index);
            }
            else if(field == "MoveDownBtn"){
                console.log("Move down question ", index);
            }
        }
        creationFormRender(creation_form_data);
        addEventListeners();
    })
}

window.onload = function(){
    creationFormRender(creation_form_data);
    addEventListeners();
    addLoginListeners();
    groupSearch();
};