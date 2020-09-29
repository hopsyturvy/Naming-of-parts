

let clicked="";
let wronganswers=0
let questionNumber=1
let answer1='leftgroup'
let answer2='rightgroup'
let Question=""

document.getElementById('leftgroup').setAttribute('onclick', 'click(this.id)');
document.getElementById('rightgroup').setAttribute('onclick', 'click(this.id)');
document.getElementById('rightwand').setAttribute('onclick', 'click(this.id)');
document.getElementById('leftwand').setAttribute('onclick', 'click(this.id)');
document.getElementById('driptray').setAttribute('onclick', 'click(this.id)');
document.getElementById('leftpf').setAttribute('onclick', 'click(this.id)');
document.getElementById('rightpf').setAttribute('onclick', 'click(this.id)');
document.getElementById('driptray').setAttribute('onclick', 'click(this.id)');
document.getElementById('next').setAttribute('onclick', 'nextQuestion()');

function nextQuestion() {
    questionNumber+=1;
    document.getElementById('next').style="visibility:hidden";
    document.getElementById('display').style="visibility:hidden";
    switch (questionNumber){
        case 2:
            Question="Now click on the steam wand";
            answer1='rightwand';
            answer2='leftwand';
            break;
        case 3:
            Question="Now click on the portafilter";
            answer1='rightpf';
            answer2='leftpf';
            break;
        case 4:
            Question="Finally, click on the drip tray";
            answer1='driptray';
            answer2='';
            break;
        case 5:
            Question="Now, on this grinder, please click on the hopper";
            answer1='hopper';
            switchGrinder();
            break;
    }
    document.getElementById('qno').innerHTML=questionNumber;
    document.getElementById('question').innerHTML=Question;
}

function previousQuestion() {
    questionNumber-=2;
    nextQuestion();
}

function switchGrinder () {
    document.getElementById('machinecontainer').classList.add('slide-out')
    document.getElementById('grindercontainer').classList.add('slide-in')
}

function click(pathID) {
    document.getElementById(pathID).animate ([
        { fill: '#9EDACD' },
        { fill: 'transparent'}
    ],{
        duration:1000
    });
    clicked=pathID;
    test()
}

function test() {
    if (clicked==answer1||clicked==answer2) {
        document.getElementById('display').innerHTML="That's right!";
        document.getElementById('display').style="visibility:visible";
        document.getElementById('next').style="visibility:visible";
    } else {
        wrongAnswer (clicked);
    }
}

function wrongAnswer (clicked) {
    document.getElementById('next').style="visibility:hidden";
    let answertext
    switch (clicked) {
        case "driptray":
            answertext="drip tray, which catches drips and sends them to the waste pipe";
            break;
        case "leftpf":
        case "rightpf":
            answertext="portafilter, also called the handle. This is the part we can remove from the machine that holds the coffee";
            break;
        case "leftgroup":
        case "rightgroup":
            answertext="group head, often just called the group. This is where the brewing water comes out of the machine";
            break;
        case "leftwand":
        case "rightwand":
            answertext="steam wand, used for heating and texturing milk"


    }
    document.getElementById('display').style="visibility:visible;color:#d83232";
    document.getElementById('display').innerHTML="This answer is incorrect. You clicked on the " + answertext + ". Try again!";
    wronganswers+=1

}