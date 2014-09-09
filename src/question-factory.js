app.factory('QuestionFactory', [function QuestionFactory() {
	return {
		getAllQuestions: function getAllQuestions() {
			/* NOTE: do not include 'answer' among 'choices' */
			return [
				{
					id: 1,
					title: 'What is the Hulk\'s real name?',
					answer: 'Bruce Banner',
					choices: [
						'Bruce Wayne',
						'Bruce Lee',
						'Bruce Willis'
					]
				}, {
					id: 2,
					title: 'What color is the Hulk?',
					answer: 'Green',
					choices: [
						'Yellow',
						'Blue',
						'White'
					]
				}, {
					id: 3, 		
					title: 'What is the name of the character responsible for bringing The Avengers together?',		
					answer: 'Nick Fury',
					choices: [
						'Hank Pym',
						'J. Jonah Jameson',
						'Dr. Strange'
					]
				}, {		
					id: 4, 		
					title: 'Which of The Avengers is the only non-Earthling?',		
					answer: 'Thor',
					choices: [
						'Black Widow',
						'Hawkeye',
						'The Hulk'
					]
				}, {		
					id: 5, 		
					title: 'Which of the characters has not appeared in another film as played by the actor playing him/her in The Avengers?',		
					answer: 'The Hulk',
					choices: [
						'Thor',
						'Hawkeye',
						'Black Widow'
					]
				}, {		
					id: 6, 		
					title: 'Which Avenger bears a personal connection to the film\'s villain?',		
					answer: 'Thor',
					choices: [
						'Iron Man',
						'Captain America',
						'Hawkeye'
					]
				}, {		
					id: 7, 		
					title: 'Which Avenger has a habit of hiding out in remote locales, and is hiding out in India when S.H.I.E.L.D. attempts to recruit him/her?',		
					answer: 'The Hulk',
					choices: [
						'Black Widow',
						'Thor',
						'Hawkeye'
					]
				}, {		
					id: 8, 		
					title: 'Which of these Avengers has not been scientifically enhanced?',		
					answer: 'Thor',
					choices: [
						'Captain America',
						'Iron Man',
						'The Hulk',
					]
				}, {		
					id: 9, 		
					title: 'Which Avenger is from Eastern Europe?',		
					answer: 'Black Widow',
					choices: [
						'Nick Fury',
						'Iron Man',
						'Hawkeye',
					]
				}, {		
					id: 10, 		
					title: 'Banner became The Hulk after being exposed to what?',		
					answer: 'Gamma radiation',
					choices: [
						'A nuclear explosion',
						'Super Soldier serum',
						'Genetically modified human grown hormone'
					]
				}, {		
					id: 11, 		
					title: 'The Avengers costars Alexis Denisof, who first worked with director Joss Whedon on which television show?',		
					answer: 'Buffy the Vampire Slayer',
					choices: [
						'Angel',
						'Firefly',
						'Dollhouse'
					]
				}, {		
					id: 12, 		
					title: 'What do The Avengers use as a headquarters?',		
					answer: 'A helicarrier',
					choices: [
						'A subterranean compound',
						'A NYC skyscraper',
						'A hollowed-out mountain'
					]
				}, {		
					id: 13, 		
					title: 'Where was Captain America first approached by the man who assembled The Avengers?',		
					answer: 'New York City',
					choices: [
						'Germany',
						'London',
						'Arizona',
					]
				}, {		
					id: 14, 		
					title: 'At the end of The Incredible Hulk, which character makes a surprise appearance on behalf of The Avengers?',		
					answer: 'Tony Stark',
					choices: [
						'Nick Fury',
						'Agent Coulson',
						'Black Widow'
					]
				}
			];
		}
	};
}]);

