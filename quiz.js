class Quiz {
    constructor(questions, correctAnswer){
        this.questions = questions;
        this.correctAnswer = correctAnswer;
    }
}

const question1 = new Quiz ("How old was Harry Potter when he received his Hogwarts invitation letter? a: Eleven, b: Fifteen, c: Seven", "a");
const question2 = new Quiz ("Who is head of Gryffindor house while Harry Potter is at Hogwarts? a: Professor Dumbledore, b: Professor Snape, c: Professor McGonagall", "c");
const question3 = new Quiz ("What Animagus form is taken by Sirius Black? a: Stag, b: Dog, c: Cat", "b");
const question4 = new Quiz ("What is the name of Harry Potter's owl? a: Dobby, b: Petunia, c: Hedwig", "c");
const question5 = new Quiz ("What is the form of Hermione's patronus? a: Rabbit, b: Otter, c: Stag", "b");

let questions = [];
questions.push (question1, question2, question3, question4, question5);


function getQuestions(){
    let score = 0;
    for (let i = 0; i < questions.length; i++){
        if (prompt(questions[i].questions) == questions[i].correctAnswer){
            score = score + 5;
        }else{
            score = score + 0;
        }
    }
    alert (`Score: ${score}`);
}
// if(prompt("How old was Harry Potter when he received his Hogwarts invitation letter? 1) Eleven 2) Fifteen 3) Seven") == "1"){
//     score = score + 5;
// }else {
//     score = score - 1;
// }
// if(prompt("Who is head of Gryffindor house while Harry Potter is at Hogwarts? 1) Professor Dumbledore 2) Professor Snape 3) Professor McGonagall") == "3"){
//     score = score + 5;
// }else {
//     score = score - 1;
// }
// if(prompt("What Animagus form is taken by Sirius Black? 1) Stag 2) Dog 3) Cat") == "2"){
//     score = score + 5;
// }else {
//     score = score - 1;
// }
// if(prompt("What is the name of Harry Potter's owl? 1) Dobby 2) Petunia 3) Hedwig") == "3"){
//     score = score + 5;
// }else {
//     score = score - 1;
// }
// if(prompt("What is the form of Hermione's patronus? 1) Rabbit 2) Otter 3) Stag") == "2"){
//     score = score + 5;
// }else {
//     score = score - 1;
// }


getQuestions ();
//alert (`Score: ${getQuestions.score}`);