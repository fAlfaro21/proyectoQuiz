const questions = [
    {title: '¿Sabes a qué orden pertenecen las hormigas?',
    choices: [
        {
            label: "Himenópteros",
            id: "himenopteros",
            name: "choice",
            value: "himenopteros",
        },
        {
            label: "Lepidópteros",
            id: "lepidopteros",
            name: "choice",
            value: "lepidopteros",
        },
        {
            label: "Ungulados",
            id: "ungulados",
            name: "choice",
            value: "ungulados",
        },
        {
            label: "Coleópteros",
            id: "coleopteros",
            name: "choice",
            value: "coleopteros",
        }
    ],
    answer: "himenopteros"},
    {title: 'Con una familia tan extensa, las hormigas deben ser omnipresentes. ¿Sabrías decir dónde viven?',
    choices: [
        {
            label: "En todo el mundo",
            id: "enTodoElMundo",
            name: "choice",
            value: "enTodoElMundo",
        },
        {
            label: "En todos los continentes menos la Antártida",
            id: "menosEnAntartida",
            name: "choice",
            value: "menosEnAntartida",
        },
        {
            label: "En todo el mundo menos en los polos",
            id: "menosEnPolos",
            name: "choice",
            value: "menosEnPolos",
        },
        {
            label: "En todo el mundo menos las islas",
            id: "menosEnIslas",
            name: "choice",
            value: "menosEnIslas",
        }
    ],
    answer: "menosEnAntartida"},
    {title: '¿Sabrías decirnos cómo se desplazan las hormigas?',
    choices: [
        {
            label: "Por tierra",
            id: "portierra",
            name: "choice",
            value: "portierra",
        },
        {
            label: "Por tierra y agua",
            id: "portierraAgua",
            name: "choice",
            value: "portierraAgua",
        },
        {
            label: "Por tierra, agua y aire",
            id: "tierraAguaAire",
            name: "choice",
            value: "tierraAguaAire",
        }
        
    ],
    answer: "tierraAguaAire"},
    {title: '¿Cómo consiguen comunicarse entre ellas con tanta eficiencia?',
    choices: [
        {
            label: "Por las feromonas",
            id: "freomonas",
            name: "choice",
            value: "porLasFeromonas",
        },
        {
            label: "Por las vibraciones del terreno",
            id: "vibracionesTerreno",
            name: "choice",
            value: "porVibracionesDelTerreno",
        },
        {
            label: "Por el sonido",
            id: "sonido",
            name: "choice",
            value: "sonido",
        },
        {
            label: "Todas las respuestas son correctas",
            id: "todasCorrectas",
            name: "choice",
            value: "todasLasRespuestasSonCorrectas",
        }
    ],
    answer: "todasLasRespuestasSonCorrectas"},
    {title: '¿Cómo se dividen las extensas colonias de las hormigas?',
    choices: [
        {
            label: "En castas",
            id: "castas",
            name: "choice",
            value: "enCastas",
        },
        {
            label: "En hermandades",
            id: "hermandades",
            name: "choice",
            value: "enHermandades",
        },
        {
            label: "En manadas",
            id: "manadas",
            name: "choice",
            value: "enManadas",
        }
    ],
    answer: "enCastas"},
    {title: '¿Podemos encontrar más de una reina en un mismo nido?',
    choices: [
        {
            label: "Sí",
            id: "si",
            name: "choice",
            value: "si",
        },
        {
            label: "No",
            id: "no",
            name: "choice",
            value: "no",
        }
    ],
    answer: "si"},
    {title: '¿Sabes cuánto tiempo puede llegar a vivir una hormiga reina?',
    choices: [
        {
            label: "Unos 2 años",
            id: "unos2",
            name: "choice",
            value: "unos2",
        },
        {
            label: "No pueden vivir más de 5 años",
            id: "noMasDe5",
            name: "choice",
            value: "noMasDe5",
        },
        {
            label: "Unos 5 años, aunque en algunos casos han llegado hasta los 30 años",
            id: "unos5",
            name: "choice",
            value: "unos5",
        }
    ],
    answer: "unos5"},
    {title: '¿Qué factor es determinante para convertir a una larva en una futura reina?',
    choices: [
        {
            label: "La calidad de la alimentación",
            id: "alimentacion",
            name: "choice",
            value: "alimentacion",
        },
        {
            label: "Las condiciones climáticas en el que se encuentra el hormiguero",
            id: "clima",
            name: "choice",
            value: "conidicionClima",
        },
        {
            label: "La presión atmosférica de la cámara en la que se desarrolla",
            id: "presion",
            name: "choice",
            value: "presionDeLaCamara",
        }
    ],
    answer: "alimentacion"},
    {title: 'Si entre obreras y reinas se reparten el trabajo, ¿para qué sirven los machos?',
    choices: [
        {
            label: "Algunos lograrán aparearse con la reina",
            id: "apaConLaReina",
            name: "choice",
            value: "apaConLaReina",
        },
        {
            label: "Algunos conseguirán aparearse con las obreras",
            id: "apaConObreras",
            name: "choice",
            value: "apaConObreras",
        },
        {
            label: "Proveen de alimento a la hormiga reina",
            id: "aliALaReina",
            name: "choice",
            value: "aliALaReina",
        },
        {
            label: "Sirven de alimento a la hormiga reina",
            id: "sonaliDeReina",
            name: "choice",
            value: "sonaliDeReina",
        },
        {
            label: "Se encargan de la seguridad de la colonia",
            id: "seguridad",
            name: "choice",
            value: "seguridad",
        }
    ],
    answer: "apaConLaReina"},
    {title: 'Y qué sucede cuando muere la reina?',
    choices: [
        {
            label: "La colonia desaparece",
            id: "coloniaDesaparece",
            name: "choice",
            value: "coloniaDesaparece",
        },
        {
            label: "Las obreras eligen una nueva reina entre las hembras reproductoras",
            id: "nuevaReina",
            name: "choice",
            value: "nuevaReina",
        },
        {
            label: "Los machos se aparean rápidamente con una hembra reproductora",
            id: "machoApa",
            name: "choice",
            value: "machoApa",
        },
        {
            label: "Una reina de otra colonia ocupa el trono",
            id: "otraReina",
            name: "choice",
            value: "otraReina",
        }
    ],
    answer: "coloniaDesaparece"}
]

const startButton = document.getElementById("startButton"); 
const resetButton = document.getElementById("resetButton"); 
const numberOfQ = document.getElementById("numberOfQ");
const homePage = document.getElementById("homePage");

let questionNumber = 0;
let i;
let choicesDiv;
let countLimit = 0;
let youCanGo = true;
let usersChoice = "";
let index;

function printTheInput(questions, questionNumber, i){
            choicesDiv = document.getElementById("questionPack");
            printInput = document.createElement("input"); 
            printInput.innerText = questions[questionNumber].choices[i].id; 
            choicesDiv.appendChild(printInput); 

            getInput = document.getElementsByTagName("Input")[i];            
            printId = document.createAttribute("id");  
            printId.value = questions[questionNumber].choices[i].id;            
            printInput.setAttributeNode(printId);  
            
            printName = document.createAttribute("name");  
            printName.value = questions[questionNumber].choices[i].name;            
            printInput.setAttributeNode(printName); 
            
            printType = document.createAttribute("type"); 
            printType.value = "radio"; 
            printInput.setAttributeNode(printType); 
            
            //printValue = document.createAttribute("value");  
            //printValue.value = questions[questionNumber].choices[i].value;
            //printInput.setAttributeNode(printValue);    
            
            printClass = document.createAttribute("class");
            printClass.value = "choices";
            printInput.setAttributeNode(printClass);
     }

//FUNCION DESACTIVADA
function printTheLabel(questions, questionNumber, i) {
            choicesDiv = document.getElementById("questionPack");
            printLabel = document.createElement("label"); 
            printLabel.innerText = questions[questionNumber].choices[i].label;
            choicesDiv.appendChild(printLabel);                         

            getLabel = document.getElementsByTagName("label")[i]; 
            printFor = document.createAttribute("for");  
            printFor.value = questions[questionNumber].choices[i].id; 
            printLabel.setAttributeNode(printFor);   

            // choicesDiv = document.getElementById("questionPack");
            // printDiv = document.createElement("div"); 
            // choicesDiv.appendChild(printDiv);
        
            //printClass = document.createAttribute("class");
            // printClass.value = "choicesPack";
            // printDiv.setAttributeNode(printClass);
}

function printOneChoice(questions, questionNumber, i){        
        printTheLabel(questions, questionNumber, i);
        printTheInput(questions, questionNumber, i);    
}

function printChoices(questions,questionNumber){
    
    for(i=0; i<questions[questionNumber].choices.length; i++){ 
        printOneChoice(questions, questionNumber, i);
    }    
}

function printQuestion(questions,questionNumber){
    questionsDiv = document.getElementById("questionPack");    

    gameInfo = document.createElement("legend");
    gameInfo.innerText = "Pregunta " + (questionNumber+1) + " de " + numberOfQ.value;
    questionsDiv.appendChild(gameInfo);

    title = document.createElement("legend");    
    title.innerText = questions[questionNumber].title;       
    questionsDiv.appendChild(title);                     
}

function printQandA(questions,questionNumber){
    printQuestion(questions,questionNumber);
    printChoices(questions,questionNumber);
    //htmlString += printQuestion(pregunta);
    //htmlString += imprimeTodasLasRespuestas(pregunta)
    //return htmlString;
}

function resetGame(){
    window.location.reload();
}

function cleanScreen(){
    homePage.remove();
}

function changeButtonsText(){
    startButton.innerText = "Siguiente";
    resetButton.value = "Volver a jugar";
}

function changeButtonTextToFinish(){
    startButton.innerText = "Terminar";
}

// function appendGameInfo(questionNumber){
//     gameInfo = document.createElement("p");
//     gameInfo.innerText = "Pregunta " + questionNumber + "de " + numberOfQ.value;
//     messages.appendChild(gameInfo);
// }

function getAnswerValue(){
    userAnswerValue = answerValue.value;
}

function validateAnswer(index, usersChoice){
    //inputTagToManage = document.getElementById("usersChoice");
    if (usersChoice == questions[index].answer){
        //Marcala como correcta    
        console.log("Es correcta!");
        console.log(inputTagToManage);
        console.log(usersChoice);
        
        printClass = document.createAttribute("class");
        printClass.value = "correctAnswer";
        inputTagToManage.setAttributeNode(printClass);
    }
    else {
        //Marcala en rojo
        console.log("Es incorrecta!");
        printClass = document.createAttribute("class");
        printClass.value = "incorrectAnswer";
        inputTagToManage.setAttributeNode(printClass);
        //classList.add("blackColor");
    }
}

resetButton.addEventListener ("click", resetGame);

startButton.addEventListener ("click", function() { 
    if(numberOfQ.value == "" || numberOfQ.value <= 0){
        resetGame();
        alert("El número de preguntas debe ser mayor a 0");
        youCanGo = false;
    }

    if(numberOfQ.value > questions.length){
        resetGame();
        alert("Tu solicitud supera el máximo de preguntas posibles");
        youCanGo = false;
    }

    if (questionNumber < numberOfQ.value && youCanGo){
        cleanScreen();
        printQandA(questions, questionNumber);
        questionNumber++;
        changeButtonsText();       
        if (questionNumber == numberOfQ.value && youCanGo){
            changeButtonTextToFinish();
        }
        //appendGameInfo(questionNumber);
    }
}); 

document
    .getElementById("questionPack")
    .addEventListener("click", () => {
        const allTheChoices = document.getElementsByTagName("input");
        const allTheLabelsChoices = document.getElementsByTagName("label");
        let arrayChoices = Array.from(allTheChoices);
        let arrayLabels = Array.from(allTheLabelsChoices);
        
        //console.log(arrayChoices[0].checked);
        //console.log(arrayChoices[1].checked);

        for ( index = 0; index < arrayChoices.length; index++) {
            if (arrayChoices[index].checked){
                usersChoice = arrayChoices[index].id;
                inputTagToManage = allTheLabelsChoices[index];
               
                //console.log(inputTagToManage);
                validateAnswer(index, usersChoice);
            };
        }
        
        //Va a marcar la opción correcta

        for ( index1 = 0; index1 < arrayLabels.length; index1++) {

            console.log(allTheLabelsChoices[index1].getAttribute("for"));

            //for ( index2 = 0; index2 < questions[questionNumber-1].choices.length; index2++) {
            //labelTagToManage = allTheLabelsChoices[index];
            //theGoodAnswer = allTheLabelsChoices.querySelector("[for='usersChoice']");
            //console.log(theGoodAnswer);
            //console.log(arrayLabels[index]);
            //console.log("usersChoice: " + usersChoice);
            //if (arrayLabels[index].id == "usersChoice"){
             //   theGoodAnswer = arrayLabels[index].id;
                //console.log("The good answer: " + theGoodAnswer);
              //  printClass = document.createAttribute("class");
             //   printClass.value = "correctAnswer"; 
             //   theGoodAnswer.setAttributeNode(printClass);
            //};
                
                //console.log(questions[questionNumber-1].choices[index2]);
            if(allTheLabelsChoices[index1].getAttribute("for") == questions[questionNumber-1].answer){
                let theGoodAnswer = allTheLabelsChoices[index1];
                printClass = document.createAttribute("class");
                printClass.value = "correctAnswer"; 
                theGoodAnswer.setAttributeNode(printClass);
            }
        //}
        }

            
    });

// document
//     .getElementById("himenopteros")
//     .addEventListener("change", function(){
//     //verifyResult();
//     console.log("Entro!");
// });

// function verifyResult(){
//     if (document.getElementsByName("login").value == ""){

//         document
//         .getElementById("loginErrorMessage")
//        .innerText = "Esta mal";
//        document
//          .getElementById("login")
//          .style
//          .backgroundColor = "crimson";
     
//          // o
     
//          // this.style.backgroundColor = "crimson";
//      }
//      else{
//        document
//        .getElementById("loginErrorMessage")
//        .innerText = "";
//      }
//     }
//No consigue leer un elemento que no existe, que está creado virtualmente:
//answerValue = document.getElementsByName("actor");
// answerValue.addEventListener("input", function(){
//         getAnswerValue();
//     });

// start.addEventListener ("click", function(){
//     cleanScreen();
//     printQandA(questions,questionNumber);
//     questionNumber++;
//     appendButtonNext();
// });

//document.replaceChild(new, old)
//querySelector: ej: Change the text of the first <p> element in a <div> element

// document.addEventListener("click", e => {
//     if (e.target.id === "questionBtn") {
//       
//       e.preventDefault(); //con esto hacemos que no tenga el comportamiento establecido
//     }
//     else if (e.target.tagName === "LABEL") {
//       document.getElementById("questionBtn").click(); //simulo el haber pinchado sobre el botón
//       const $label = document.querySelectorAll("label");
//       const $selectedInput = document.querySelector(`#${e.target.htmlFor}`);
//       const $selectedLabel = document.querySelector(`label[for=answer_${$selectedInput.value}]`);
  
//       result = validateAnswer($selectedInput, $selectedLabel, validAnswer);
//       if (result) {
//         result.quID = quizQuestions[questionIndex].questionID;
//         results.push(result);
//         console.log(results);
//         questionIndex++;
//         if (results.length === NUM_QUESTIONS) {
//           setTimeout(() => {
//             printResults(results, $screenParent, $formParent);
//           }, 1000);
//         }
//         else {
//           setTimeout(() => {
//             //TODO unificar estas dos funciones
//             printQuestion(quizQuestions[questionIndex], $formParent);
//             changeScreen($screenParent, questionIndex, NUM_QUESTIONS);
//           }, 1000); //TODO: Volver a poner un tiempo mayor de espera
//         }
//       }
//     }
//     else if (e.target.classList.contains("answerWrapper")) {
//       e.target.lastChild.click(); //hacemos lo mismo que si se hace click en el label
//       console.log("click")
//     }
//     else if (e.target.classList.contains("goIndex")) {
//       window.location.assign("index.html");
//     }
//     else if (e.target.classList.contains("newGame")) {
//       window.location.assign("quiz.html");
//     }
//   })