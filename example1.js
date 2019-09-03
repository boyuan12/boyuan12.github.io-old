var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$("#trivia-form").on("submit", function(event){
            event.preventDefault();
            var $choice = $("#trivia-answer");
            var choice = $choice.val();
            console.log(choice)
            if(choice === 'c') {
                $("#result").text("congratulation!");
            } else {
                $("#result").text("Try again!")
            }
        })
