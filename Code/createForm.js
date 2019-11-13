var creation_form_data = {
    "name": "Form for Websys",
    "dateCreated": "",
    "dateDue": "2018-09-09",
    "questions": [
        {
            "prompt": "Something",
            "typeOfQuestion": ""
        },
        {
            "prompt": "Do you like front-end or back-end",
            "typeOfQuestion": "multipleChoice",
            "numOfChoices": 3,
            "choices": [
                {
                    "choiceContent": "Front End"
                },
                {
                    "choiceContent": "Back End"
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
            "prompt": "Any Comments?",
            "typeOfQuestion": "textInput",
            "maxCharacters": 200
        }
    ]
}

function creationFormRender(data){
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
            <legend><span class="section">2</span>Choices of your Choice</legend>
            `;
    for(var i=0; i<data.questions.length; i++){
        console.log("Executed");
        html_string += `<fieldset id="question${i+1}" class="creationQuestion">
        <legend>Question ${i+1}</legend>
        <label class="questionPromptLbl" for="questionPrompt">Prompt of Question ${i+1}</label>
        <p class="noPrompt"></p>
        <input type="text" name="questionPrompt" class="questionPrompt" placeholder="200 characters max" maxlength="200" value="${data.questions[i].prompt}" required>
        <label class="questionTypeLbl">Type of Question ${i+1}</label>
        <label><input type="radio" class="questionType" name="question${i+1}Type" value="multipleChoice" ${data.questions[i].typeOfQuestion=='multipleChoice'?'checked':''} required> Multiple Choice</label>
        <label><input type="radio" class="questionType" name="question${i+1}Type" value="slider" ${data.questions[i].typeOfQuestion=='slider'?'checked':''} required> Slider</label>
        <label><input type="radio" class="questionType" name="question${i+1}Type" value="textInput" ${data.questions[i].typeOfQuestion=='textInput'?'checked':''} required> Text Input</label>
        <p class="noType"></p>`;
        console.log(data.questions[i].typeOfQuestion)
        if(data.questions[i].typeOfQuestion == "multipleChoice"){
            let selected = data.questions[i].numOfChoices;
            html_string += `
            <label class="questionExtra multipleChoice" style="display: none">How many choices would you like?</label>
            <select name="numChoices" class="questionExtra multipleChoice">
            <option value="2" ${selected==2?"selected":""}>2</option>
            <option value="3" ${selected==3?"selected":""}>3</option>
            <option value="4" ${selected==4?"selected":""}>4</option>
            <option value="5" ${selected==5?"selected":""}>5</option>
            </select>`;
            for(var j=0; j<data.questions[i].numOfChoices; j++){
                var letter = String.fromCharCode(65+j);
                html_string += `<label>${letter}. <input type="text" name="question${i+1}Choice${letter}" placeholder="Choice ${letter}" value="${data.questions[i].choices[j].choiceContent}"></label>`;
            }
        }
        else if(data.questions[i].typeOfQuestion == "slider"){
            console.log(2)
            html_string += `
            <label class="questionExtra slider">What is the min and max value of slider?
            <input type="number" placeholder="min" value="${data.questions[i].sliderMin}">
            <input type="number" placeholder="max" value="${data.questions[i].sliderMax}">
            </label>
            <p class="sliderErr"></p>`;
        }
        else if(data.questions[i].typeOfQuestion == "textInput"){
            console.log(3)
            html_string += `
            <label class="questionExtra textInput">Designate a max character count for your answer
            <input type="number" placeholder="max charaters" value="${data.questions[i].maxCharacters}">
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
        <input id="submitButton" type="submit" value="Create Form!">`;

    $("main").append(html_string);
    var $questions = $(".creationQuestion");
    $questions[0].offsetWidth = $questions[0].offsetWidth;
    $questions.css("opacity", "1");
}

function addEventListeners(){
    
}

$(window).ready(function(){
    creationFormRender(creation_form_data);
    addEventListeners();
});