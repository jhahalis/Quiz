let score = 0;
if(prompt("How old was Harry Potter when he received his Hogwarts invitation letter? 1) Eleven 2) Fifteen 3) Seven") == "1"){
    score = score + 1;
}
if(prompt("Who is head of Gryffindor house while Harry Potter is at Hogwarts? 1) Professor Dumbledore 2) Professor Snape 3) Professor McGonagall") == "3"){
    score = score + 1;
}
if(prompt("What Animagus form is taken by Sirius Black? 1) Stag 2) Dog 3) Cat") == "2"){
    score = score + 1;
}
if(prompt("What is the name of Harry Potter's owl? 1) Dobby 2) Petunia 3) Hedwig") == "3"){
    score = score + 1;
}
if(prompt("What is the form of Hermione's patronus? 1) Rabbit 2) Otter 3) Stag") == "2"){
    score = score + 1;
}

alert (`Score: ${score}`);