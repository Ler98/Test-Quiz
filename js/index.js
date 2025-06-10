//console.log("hej js")


document.addEventListener("DOMContentLoaded", function () {

//var tidigare dolt med display: none. visas nu som ett block = quizet synligt.
const quizSection = document.getElementById("quiz-section");
quizSection.style.display = "block";


    //hämtar rubrik-texten från HTML
    const rubrik = document.querySelector("h2");
    console.log(rubrik);

    //Hämtar fråga-texten från HTML
    const quest = document.querySelector("#question-text");
    console.log(quest);

    //hämtar svar-texten från HTML
    const ans1 = document.querySelector("#label1");
    console.log(ans1)
    const ans2 = document.querySelector("#label2");
    console.log(ans2)
    const ans3 = document.querySelector("#label3")

     //hämtar knappen från HTML
    const nextbutton = document.querySelector("#next-btn");
    //kontrollerar så koden funkar
    console.log(nextbutton)



    //array med frågor och svar till Quiz
    const allQuestions = [
        {
        question: "Vad har jag för husdjur?",
        answers: ["Katt", "Hund", "fiskar"],
        correctAnswer: "Katt"
        },
        {
        question: "Vad är en växt?",
        answers: ["gulklint, lilaklint", "fuxia"],
        correctAnswer: "gulklint"
        },
        {
        question: "vilka färger blir grön",
        answers: ["gul & grå", "röd & blå", "gul & blå"],
        correctAnswer: "gul & blå"
        }

     

    ];

let currentQuestion = 0;
let score = 0;


    if (currentQuestion < allQuestions.length) {
    //Hämtar första frågan och dess svarsalternativ från arrayen.
    quest.innerText = allQuestions[0].question;
    ans1.innerText = allQuestions[0].answers[0];
    ans2.innerText = allQuestions[0].answers[1];
    ans3.innerText = allQuestions[0].answers[2];

     //quest.innerText = allQuestions[currentQuestion].question; 
    // ans1.innerText = "label1";
     //ans2.innerText = "";
    // ans3.innerText = "";
    }
function showQuestion() {
}

   /* allQuestions[currentQuestion].answers.forEach(function(ans) {
     const btn = document.createElement("button");
     btn.innerText = ans;
     btn.addEventListener("click", function() {
        checkAnswer(ans);
     });
     //ans1, ans2, 
     ans3.appendChild(btn);
     
});

function checkAnswer(selectedAnswer) {
    Array.from(ans1.children).forEach(btn => btn.disabled = true);
    if (selectedAnswer === allQuestions[currentQuestion].correctAnswer)
        score++;
}
*/

nextbutton.addEventListener("click", function() {
currentQuestion++;   
showQuestion(); 
  
});      




}
)
//en fråga står på websidan
//under frågan finns svarsalternativ, 3 stycken.
//det går inte att gå vidare innan frågan är besvarad.
//när man tryckt på ett svar så kan man gå vidare
//det finns en knapp "Nästa" som det går att trycka på för att gå vidare när man svarat
//nästa fråga kommer upp när man tryckt på nästa
//upprepa 3 gånger
//när alla frågor är svarade kommer ett resultat upp på websidan