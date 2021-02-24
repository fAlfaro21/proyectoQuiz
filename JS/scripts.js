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
            value: "todasCorrectas",
        }
    ],
    answer: "todasCorrectas"},
    {title: '¿Cómo se dividen las extensas colonias de las hormigas?',
    choices: [
        {
            label: "En castas",
            id: "enCastas",
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
let correctAnswerCounter = 0;
let numberOfQuestionsAnswered = 0;
let paint = false;
let contenedor = [];
let inputTagToManage;

function printTheInput(questions, questionNumber, i){
            choicesDiv = document.getElementById("containerPack");
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
            
            printClass = document.createAttribute("class");
            printClass.value = "choices";
            printInput.setAttributeNode(printClass);

            contenedor.push(printInput);  
     }

function printTheLabel(questions, questionNumber, i) {
            choicesDiv = document.getElementById("containerPack");
            printLabel = document.createElement("label"); 
            printLabel.innerText = questions[questionNumber].choices[i].label;
            choicesDiv.appendChild(printLabel);                         

            getLabel = document.getElementsByTagName("label")[i]; 
            printFor = document.createAttribute("for");  
            printFor.value = questions[questionNumber].choices[i].id; 
            printLabel.setAttributeNode(printFor); 

            printClass = document.createAttribute("class");
            printClass.value = "centered";
            printLabel.setAttributeNode(printClass);

            contenedor.push(printLabel);  
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
    questionsDiv = document.getElementById("containerPack");    

    gameInfo = document.createElement("legend");
    gameInfo.innerText = "Pregunta " + (questionNumber+1) + " de " + numberOfQ.value;
    questionsDiv.appendChild(gameInfo);

    title = document.createElement("legend");    
    title.innerText = questions[questionNumber].title;       
    questionsDiv.appendChild(title);       
    
    contenedor.push(gameInfo);
    contenedor.push(title);
}

function printQandA(questions,questionNumber){

    printQuestion(questions,questionNumber);
    printChoices(questions,questionNumber);
    
}

function erase(){
    const container = document.getElementById("containerPack");
    if (container !== ""){
        container.remove();
    };
}

function eraseQandA (contenedor){
    for (let i = 0; i < contenedor.length; i++) {
        contenedor[i].remove();
    };
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

function getAnswerValue(){
    userAnswerValue = answerValue.value;
}

function validateAnswer(usersChoice){
        
    if (usersChoice == questions[questionNumber-1].answer){
        
        //Respuesta correcta: la marca en verde         
        printClass = document.createAttribute("class");
        printClass.value = "correctAnswer";
        inputTagToManage.setAttributeNode(printClass);
        inputTagToManage.classList.add("centered");
        correctAnswerCounter++;
        numberOfQuestionsAnswered++;     
    }
    else {
        //Respuesta incorrecta: la marca en rojo        
        printClass = document.createAttribute("class");
        printClass.value = "incorrectAnswer";
        inputTagToManage.setAttributeNode(printClass);
        inputTagToManage.classList.add("centered");
        numberOfQuestionsAnswered++;      
    };    
}

function printResults(){
    
    questionsDiv = document.getElementById("questionPack");
    gameInfo = document.createElement("legend");
    gameInfo.innerText = `Haz conseguido ${correctAnswerCounter} acierto(s) de un total de ${numberOfQ.value} preguntas`;
    questionsDiv.appendChild(gameInfo);    
   
}
if (resetButton) {
    resetButton.addEventListener ("click", resetGame);
}


if (startButton) {
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
            //erase();
            eraseQandA (contenedor);
            printQandA(questions, questionNumber);
            questionNumber++;
            paint = false;
            changeButtonsText();       
            if (questionNumber == numberOfQ.value && youCanGo){
                changeButtonTextToFinish();
            }
        }
    }); 
}

function removeButton(){
    startButton.classList.remove("welcomeButton");
    startButton.classList.add("displayNone");
}

if (startButton) {
    startButton.addEventListener ("click", function(){
    
        if (numberOfQuestionsAnswered == numberOfQ.value){ 
            //Si el total de respuestas han sido respondias   
            eraseQandA (contenedor);  
            removeButton();   
            printResults();
        }
    });
}
    
let container = document.getElementById("containerPack")
if (container) {
    container.addEventListener("click", () => {
        if(paint == false){
            const allTheChoices = document.getElementsByTagName("input");
            const allTheLabelsChoices = document.getElementsByTagName("label");
            let arrayChoices = Array.from(allTheChoices);
            let arrayLabels = Array.from(allTheLabelsChoices);        
            
            for ( index = 0; index < arrayChoices.length; index++) {
                if (arrayChoices[index].checked){
                    usersChoice = arrayChoices[index].id;
                    inputTagToManage = allTheLabelsChoices[index];            
                    validateAnswer(usersChoice);                
                    paint = true;
                    
                };
            }
            
            //Va a marcar la opción correcta
            for ( index1 = 0; index1 < arrayLabels.length; index1++) {
                
                if(allTheLabelsChoices[index1].getAttribute("for") == questions[questionNumber-1].answer){                
                    let theGoodAnswer = allTheLabelsChoices[index1];
                    printClass = document.createAttribute("class");
                    printClass.value = "correctAnswer"; 
                    theGoodAnswer.setAttributeNode(printClass);
                    theGoodAnswer.classList.add("centered");
                }
                
            }
            
        }        
    });
}
