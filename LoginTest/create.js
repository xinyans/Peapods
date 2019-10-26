$(window).ready(function() {
    $("#addQuestion").click(function() {

    })
    $('input:radio[name="question1Type"]').change(function(){
        if($(this).val() == 'multipleChoice'){
            $(".question1Extra").remove();
            console.log("multiple Choice");
            var child = '<input type="text" class="question1Extra" placeholder="multiple choice stuff">';
            $("#question1").append(child);
        }
        if($(this).val() == 'slidebar'){
            $(".question1Extra").remove();
            console.log("slidebar");
            var child = '<input type="text" class="question1Extra" placeholder="slidebar stuff">';
            $("#question1").append(child);
        }
        if($(this).val() == 'textInput'){
            $(".question1Extra").remove();
            console.log("slidebar");
            var child = '<input type="text" class="question1Extra" placeholder="text input stuff">';
            $("#question1").append(child);
        }
    });
});