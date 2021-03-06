var app = angular.module('triviaApp', ['firebase']);

app.controller('triviaController', [
	'$scope',
	'QuestionFactory',
	'$firebase',
	function triviaController($s, QuestionFactory, $firebase) {

		var fireRef = new Firebase('https://kewl.firebaseIO.com/');
		$s.messages = $firebase(fireRef).$asArray();
		if(!$s.messages.length) {
			$s.messages.push({from: 'No', body: 'messages'});
		}

		$s.addMessage = function addMessage(e) {
         //LISTEN FOR RETURN KEY
         if (e.keyCode === 13 && $s.msg) {
           //ALLOW CUSTOM OR ANONYMOUS USER NAMES
           var name = $s.name || 'anonymous';
           $s.messages.$add({from: name, body: $s.msg});
           //RESET MESSAGE
           $s.msg = '';
         }
		};

		function loadQuestion() {
			$s.questionChose.choices.push($s.questionChose.answer);
			$s.questionChose.choices = _.shuffle($s.questionChose.choices);
			$s.question = $s.questionChose;
		}

		function checkAnswer(choice) {
			if(choice == $s.question.answer) {
				return true;
			} else {
				return false;
			}
		}

		$s.clickChoice = function clickChoice(click) {
			if(gameOver) { return; }
			var $target = $(click.currentTarget);
			var choice = $target.data('choice');
			var result = checkAnswer(choice);
			if(result) {
				$s.score += 2;
				$s.questionChose = $s.availableQuestions[++currentQuestion];
				$s.chooseQuestion(choice);
			} else {
				$s.score--;
				$target.addClass('wrong');
				$s.displayText = choice + ' is incorrect';
			}
		};

		$s.availableQuestions = _.shuffle( QuestionFactory.getAllQuestions() );
		var currentQuestion = 0;
		$s.questionChose = $s.availableQuestions[currentQuestion];

		$s.chooseQuestion = function chooseQuestion(text) {
			if($s.questionChose) {
				$('.wrong').removeClass('wrong');
				$s.displayText = text + ' is correct!';
				loadQuestion();
			} else {
				$s.displayText = 'You win!';
				gameOver = true;
			}
		};

		$s.question = {};
		$s.score = 0;
		$s.displayText = '+2 for correct and -1 for incorrect';
		var gameOver = false;

		loadQuestion($s.questionChose);
	}
]);
