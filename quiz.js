//Question bank
var questionBank= [
    {
        question : 'Does your child look at you when you call his/her name?',
        option : ['NO','YES'],
        answer : 'NO'
    },
    {
        question : 'Does your child often makes eye-contact?',
        option : ['NO','YES'],
        answer : 'NO'
    },
    {
        question : 'Does your child point to indicate that s/he wants something?',
        option : ['NO','YES'],
        answer : 'NO'
    },
    {
        question : 'Does your child pretend? e.g. care for dolls, talk on a toy phone?',
        option : ['NO','YES'],
        answer : 'NO'
    },
    {
        question : 'Does your child follow where you are looking?',
        option : ['NO','YES'],
        answer : 'NO'
    },
    {
        question : ': If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? e.g. stroking hair, hugging them?',
        
        option : ['NO','YES'],
        answer : 'NO'
    },
    {
        question : 'Would you describe your child first word satisfactory?',
        option : ['NO','YES'],
        answer : 'NO'
    },
    {
        question : ' Does your child use simple gestures (e.g.wave goodbye)?',
        option : ['NO','YES'],
        answer : 'NO'
    },
    {
        question : 'Does your child stare at nothing with no apparent purpose?',
        option : ['NO','YES'],
        answer : 'NO'
    },
    {
        question : 'Have you ever wondered if your child might be deaf?',
        option : ['NO','YES'],
        answer : 'YES'
    }

]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
//var option2= document.getElementById('option2');
//var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var results= document.getElementById('RESULTS');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    //option2.innerHTML= questionBank[i].option[2];
    //option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'limegreen';
    }
   
    //setTimeout(nextQuestion,300);
}


//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        if(score>=4){
            points.innerHTML= 'THE CHILD MIGHT BE IN THE ASD SPECTRUM';
        }
        else{
            points.innerHTML= 'The child is not in the spectrum';
        }
        //points.innerHTML= score+ '/'+ questionBank.length;
        //displayResults();
        
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block';
    }
}
// function to display results
function displayResults(){
    if (score>=4){
        return'THE CHILD IS LIKELY TO BE IN THE SPECTRUM'
    }
    else{
        return "The child is not in the spectrum"
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();