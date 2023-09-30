const questions = [
    {
        'que': "Which of the following is a markup language?",
        'a': "HTML",
        'b': "CSS",
        'c': "JAVASCRIPT",
        'd': "PHP",
        'correct': 'a'   //answer is option a
    },
    {
        'que': "Which year was javascript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': 'b'   //answer is option a
    },
    {
        'que': "What does CSS stands for?",
        'a': "HyperText Markup Language ",
        'b': "Jason Object Notation",
        'c': "control Selection State",
        'd': "Cascading Style Sheet",
        'correct': 'd'   //answer is option a
    },
]
//note optionsInputs = options
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox"); //question select
const options = document.querySelectorAll(".options");// option select

const loadquestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];// putting all our obj aaray in const data
    quesBox.innerText = `${index + 1}. ${data.que}`; //to access key of an array use .keyname
    //string ke inside variable use krne ka option deta h tempalte literals
    //Adding options to our questions
    options[0].nextElementSibling.innerText = data.a; //accessing its next sibling which is label ok
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {           //do not use here function name here
    const data = questions[index]
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;        //save the collected user option in a const ans
    } else {
        wrong++;
    }
    index++;//go to the next question if loadquestion calling then works
    loadquestion();
    return;
}
//collecting user selected option
const getAnswer = () => {           // Arrow function
    let answer;
    options.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;     //input.value gives a,b,c,d depends on user select
            }
        }
    )
    return answer;
}
//refresh page after every submission
const reset = () => {
    options.forEach(
        (input) => {
            input.checked = false;
        }
    )

}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3 id="display"> Thank You for playing the Quiz </h3>
    <h2 id="display"> ${right}/${total} are correct </h2>
    `
}
const backQues = () => {           //do not use here function name here
    const data = questions[index]
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;        //save the collected user option in a const ans
    } else {
        wrong++;
    }
    index--;
    loadquestion();
    return;
}

//initial call
loadquestion();