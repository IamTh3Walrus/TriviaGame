var panel = $('#quiz-area');

$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});

var questions = [
{
    question: 'Who is the most electrifying man in sports entertainment?',
    answers: ['The Brooklyn Brawler', 'Bret Hart', 'The Rock', 'Jake Roberts', 'Randy Savage'],
    correctAnswer: 'The Rock'
},

{
    question: "Who is the stylin', profilin', limousine riding, jet flying, kiss-stealing, wheelin' n' dealin' son of a gun?",
    answers: ['Ric Flair', 'Jerry Lawler', 'Mankind', 'Gorgeous George', 'Edge'],
    correctAnswer: 'Ric Flair'
},

{
    question: "This man was the first WWF Champion.",
    answers: ['Bruno Sammartino', 'Hulk Hogan', 'Pedro Morales', 'Buddy Rogers', 'Lou Thesz'],
    correctAnswer: 'Buddy Rogers'
},

{
    question: "Which wrestler has the most combined days as NWA champion?",
    answers: ['Ric Flair', 'Lou Thesz', 'Harley Race', 'Terry Funk', 'Kerry Von Erich'],
    correctAnswer:'Lou Thesz'
},

{
    question: "Who was the masked wrestler known as The Midnight Rider?",
    answers: ['Hulk Hogan', 'Jerry Lawler', 'Sting', 'Dusty Rhodes', 'Harley Race'],
    correctAnswer: 'Dusty Rhodes'
}
];

var game = {
  correct:0,
  incorrect:0,
  counter:120,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};

