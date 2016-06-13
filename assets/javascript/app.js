var questions = [
{
    question: 'Who is the most electrifying man in sports entertainment?',
    choices: ['The Brooklyn Brawler', 'Bret Hart', 'The Rock', 'Jake Roberts', 'Randy Savage'],
    answer: 'The Rock'
},

{
    question: "Who is the stylin', profilin', limousine riding, jet flying, kiss-stealing, wheelin' n' dealin' son of a gun?",
    choices: ['Ric Flair', 'Jerry Lawler', 'Mankind', 'Gorgeous George', 'Edge'],
    answer: 'Ric Flair'
},

{
    question: "This man was the first WWF Champion.",
    choices: ['Bruno Sammartino', 'Hulk Hogan', 'Pedro Morales', 'Buddy Rogers', 'Lou Thesz'],
    answer: 'Buddy Rogers'
},

{
    question: "Which wrestler has the most combined days as NWA champion?",
    choices: ['Ric Flair', 'Lou Thesz', 'Harley Race', 'Terry Funk', 'Kerry Von Erich'],
    answer:'Lou Thesz'
},

{
    question: "Who was the masked wrestler known as The Midnight Rider?",
    choices: ['Hulk Hogan', 'Jerry Lawler', 'Sting', 'Dusty Rhodes', 'Harley Race'],
    answer: 'Dusty Rhodes'
}
];


$(document).ready(function() {
    var counter = 60;

        $("#startButton").on("click", function() {
            var self = this;

            var intervalId = setInterval(function(){

                counter--;

                $(self).html('Time Remaining: ' + counter);

                if (counter === 0) {
                    $('#message').html("Time's up");
                    clearInterval(intervalId);
                }

            }, 1000);

        });

        $("#triviaQuestion1").html(questions[0].question);
        $("#triviaQuestion2").html(questions[1].question);
        $("#triviaQuestion3").html(questions[2].question);
        $("#triviaQuestion4").html(questions[3].question);
        $("#triviaQuestion5").html(questions[4].question);

        $('#q1Choice1').html(questions[0].choices[0]);
        $('#q1Choice2').html(questions[0].choices[1]);
        $('#q1Choice3').html(questions[0].choices[2]);
        $('#q1Choice4').html(questions[0].choices[3]);
        $('#q1Choice5').html(questions[0].choices[4]);

        $('#q2Choice1').html(questions[1].choices[0]);
        $('#q2Choice2').html(questions[1].choices[1]);
        $('#q2Choice3').html(questions[1].choices[2]);
        $('#q2Choice4').html(questions[1].choices[3]);
        $('#q2Choice5').html(questions[1].choices[4]);

        $('#q3Choice1').html(questions[2].choices[0]);
        $('#q3Choice2').html(questions[2].choices[1]);
        $('#q3Choice3').html(questions[2].choices[2]);
        $('#q3Choice4').html(questions[2].choices[3]);
        $('#q3Choice5').html(questions[2].choices[4]);

        $('#q4Choice1').html(questions[3].choices[0]);
        $('#q4Choice2').html(questions[3].choices[1]);
        $('#q4Choice3').html(questions[3].choices[2]);
        $('#q4Choice4').html(questions[3].choices[3]);
        $('#q4Choice5').html(questions[3].choices[4]);

        $('#q5Choice1').html(questions[4].choices[0]);
        $('#q5Choice2').html(questions[4].choices[1]);
        $('#q5Choice3').html(questions[4].choices[2]);
        $('#q5Choice4').html(questions[4].choices[3]);
        $('#q5Choice5').html(questions[4].choices[4]);


     

});

 
