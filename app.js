$(document).ready(function(){

 
     
    $("#login").click(function(){

        var user = {
            firstname : $("#firstname").val(),
            lastname : $("#lastname").val(),
            language :  $("#selectLang").val(),
            isFormal: $("#formal").prop('checked')
        }

       var greet = G$(user.firstname,user.lastname,user.language);
       
       greet.JQGreeting("#greetings",user.isFormal);

    })

})

 


