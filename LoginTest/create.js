var index = 2;

function generateQuestion() {
    var question_model = `<fieldset id="question${index}">
        <legend>Question ${index}</legend>
        <label class="" for="questionPrompt">Prompt of Question ${index}</label>
        <input type="text" name="questionPrompt" id="questionPrompt" placeholder="50 characters max">
        <label class="">Type of Question ${index}</label>
        <label><input type="radio" name="questionType" value="multipleChoice"> Multiple Choice</label>
        <label><input type="radio" name="questionType" value="slider"> Slider</label>
        <label><input type="radio" name="questionType" value="textInput"> Text Input</label>
        <!-- The following part will be generated by javascript dynamically -->
        <label class="questionExtra multipleChoice" style="display: none">How many choices would you like?</label>
        <select name="numChoices" class="questionExtra multipleChoice" style="display: none">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" selected>5</option>
        </select>
        <!-- Size of the following part resizes according to input above, when size decrease extra elements are hidden instead of lost -->
        <div class="questionExtra multipleChoice multipleChoiceChoices" style="display: none">
        <label>A. <input type="text" name="choiceA" placeholder="Choice A"></label>
        <label>B. <input type="text" name="choiceB" placeholder="Choice B"></label>
        <label>C. <input type="text" name="choiceC" placeholder="Choice C"></label>
        <label>D. <input type="text" name="choiceD" placeholder="Choice D"></label>
        <label>E. <input type="text" name="choiceE" placeholder="Choice E"></label>
        </div>
        <!-- The following part is Slider -->
        <label class="questionExtra slider" style="display: none">What is the min and max value of slider?
        <input type="number" placeholder="min">
        <input type="number" placeholder="max">
        </label>
        <!-- The following part is Text Input -->
        <label class="questionExtra textInput" style="display: none">Designate a max character count for your answer
        <input type="number" placeholder="max charaters">
        </label>
        </fieldset>`
    index += 1;
    return question_model;
}

// Need to traverse to root of single question and search down. No better solution available for present
function questionTypeChange(){
    if($(this).val() == 'multipleChoice'){
        $(this).parent().parent().find(".questionExtra.slider").hide();
        $(this).parent().parent().find(".questionExtra.textInput").hide();
        console.log("multiple Choice");
        $(this).parent().parent().find(".questionExtra.multipleChoice").show();
    }
    if($(this).val() == 'slider'){
        $(this).parent().parent().find(".questionExtra.multipleChoice").hide();
        $(this).parent().parent().find(".questionExtra.textInput").hide();
        console.log("slider");
        $(this).parent().parent().find(".questionExtra.slider").show();
    }
    if($(this).val() == 'textInput'){
        $(this).parent().parent().find(".questionExtra.multipleChoice").hide();
        $(this).parent().parent().find(".questionExtra.slider").hide();
        console.log("textInput");
        $(this).parent().parent().find(".questionExtra.textInput").show();
    }
}

function multipleChoiceChange(){
    var required_choices = this.options[ this.selectedIndex ].value;
    var choices = $(this).parent().find('.questionExtra.multipleChoice.multipleChoiceChoices').children();
    for(var i=0; i<required_choices; i++){
        choices[i].style.display = "inline";
    }
    for(var i=required_choices; i<choices.length; i++){
        choices[i].style.display = "none";
    }
}

$(window).ready(function() {
    $("#addQuestion").click(function() {
        $("#creationQuestions").append(generateQuestion());
        $('input:radio[name="questionType"]').change(questionTypeChange);
        $('select.questionExtra.multipleChoice').change(multipleChoiceChange);
    });

    $('input:radio[name="questionType"]').change(questionTypeChange);

    $('select.questionExtra.multipleChoice').change(multipleChoiceChange);
});
