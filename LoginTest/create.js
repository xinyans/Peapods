$(window).ready(function() {
    $("#addQuestion").click(function() {

    });

    $('input:radio[name="question1Type"]').change(function(){
        if($(this).val() == 'multipleChoice'){
            $(".question1Extra.slider").hide();
            $(".question1Extra.textInput").hide();
            console.log("multiple Choice");
            $(".question1Extra.multipleChoice").show();
        }
        if($(this).val() == 'slider'){
            $(".question1Extra.multipleChoice").hide();
            $(".question1Extra.textInput").hide();
            console.log("slider");
            $(".question1Extra.slider").show();
        }
        if($(this).val() == 'textInput'){
            $(".question1Extra.multipleChoice").hide();
            $(".question1Extra.slider").hide();
            console.log("textInput");
            $(".question1Extra.textInput").show();
        }
    });

    $('select.question1Extra.multipleChoice').change(function() {
        var required_choices = this.options[ this.selectedIndex ].value;
        var choices = $('.question1Extra.multipleChoice.multipleChoiceChoices').children();
        for(var i=0; i<required_choices; i++){
            choices[i].style.display = "inline";
            console.log("changed")
        }
        for(var i=required_choices; i<choices.length; i++){
            choices[i].style.display = "none";
            console.log("changed")
        }
    });
});
