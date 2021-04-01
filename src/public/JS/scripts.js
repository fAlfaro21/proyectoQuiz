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
const signInButton = document.getElementById("signInButton");
const userEmail = document.getElementById("userEmail");
const userPass = document.getElementById("userPass");
const signUpButton = document.getElementById("signUpButton");
const signOutButton = document.getElementById("signOutButton");
const questionMasterButton = document.getElementById("questionMasterButton");
const newQuestionButton = document.getElementById("newQuestionButton");
const createQuestion = document.getElementById("createQuestion");

const questionTitle = document.getElementById("questionTitle"); 

const choiceTitle1 = document.getElementById("choiceTitle1");
const choiceId1 = document.getElementById("choiceId1");
const choiceName1 = document.getElementById("choiceName1");
const choiceValue1 = document.getElementById("choiceValue1");

const choiceTitle2 = document.getElementById("choiceTitle2");
const choiceId2 = document.getElementById("choiceId2");
const choiceName2 = document.getElementById("choiceName2");
const choiceValue2 = document.getElementById("choiceValue2");

const choiceTitle3 = document.getElementById("choiceTitle3");
const choiceId3 = document.getElementById("choiceId3");
const choiceName3 = document.getElementById("choiceName3");
const choiceValue3 = document.getElementById("choiceValue3");

const choiceTitle4 = document.getElementById("choiceTitle4");
const choiceId4 = document.getElementById("choiceId4");
const choiceName4 = document.getElementById("choiceName4");
const choiceValue4 = document.getElementById("choiceValue4");

const choiceAnswer = document.getElementById("choiceAnswer");


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
let contenedorMaster = [];
let inputTagToManage;
let emptyAnswer = true;
let userEmailValue = "";
let userAuthenticated = false;

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

function printQuestionMaster(quote){
    questionsDiv = document.getElementById("containerPackMaster");

    title = document.createElement("legend");
    title.innerText = quote.title;
    questionsDiv.appendChild(title);

    printName = document.createAttribute("name"); 
    printName.value = `question${quote.id}`;  
    printParagraph.setAttributeNode(printName);

    contenedorMaster.push(title);

    // for (let index2 = 0; index2 < quote.choices.length; index2++) {

    // choice = document.createElement("legend");
    // choice.innerText = quote.choices[index2].label;
    // questionsDiv.appendChild(choice);
 
    // result1 = document.querySelector('#results');
    
    // printParagraph = document.createElement("p"); 
    // printParagraph.innerText = `${index2 + 1}${". "}${quote.meanings[0].definitions[index2].definition}`;
    // result1.appendChild(printParagraph); 

    // printId = document.createAttribute("id"); 
    // printId.value = `paragraph${index2}`;  
    // printParagraph.setAttributeNode(printId);

    // contenedorMaster.push(title);
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

        if (questionNumber < numberOfQ.value && youCanGo && emptyAnswer == true){

            cleanScreen();
            eraseQandA (contenedor);
            printQandA(questions, questionNumber);
            questionNumber++;
            paint = false;
            emptyAnswer = false;
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

function createQuestions(){

    const options = {
        method: 'POST',
        body: JSON.stringify({
            title: questionTitle.value,
            choices:
            [
                {
                    label: choiceTitle1.value,
                    id: choiceId1.value,
                    name: choiceName1.value,
                    value: choiceValue1.value
                },
                {
                    label: choiceTitle2.value,
                    id: choiceId2.value,
                    name: choiceName2.value,
                    value: choiceValue2.value
                },
                {
                    label: choiceTitle3.value,
                    id: choiceId3.value,
                    name: choiceName3.value,
                    value: choiceValue3.value
                },
                {
                    label: choiceTitle4.value,
                    id: choiceId4.value,
                    name: choiceName4.value,
                    value: choiceValue4.value
                },
            ],
            answer: choiceAnswer.value,
        }),
        headers:{'Content-Type': 'application/json'}
      }
      
      fetch(`quiz/questions/createquestions`, options)
          .then(response => response.json())
          .then(data => {                    
              if (data.status === 200) {
                  alert("Pregunta registrada");
                  setTimeout(function(){
                      window.location.href = "http://localhost:4000/questions.html"
                  }, 1000);
              }
              else if (data.status === 400) {
                  alert("Error en registro. Contacte con el administrador de la aplicación");
                  setTimeout(function(){
                      window.location.href = "http://localhost:4000/questions.html"
                  }, 1000);
              }     
                 
          })
          .catch(err => console.log(err))

}

// function getquestions(){

// }

function verifyAccess() {
    const options = {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    }
    const localStorageId = JSON.parse(window.localStorage.getItem("Token"));
    fetch(`quiz/users/authentication/${localStorageId}`, options)
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                alert("Usuario autenticado");
                return userAuthenticated = true;
            }
            else if (data.status === 400) {
                alert("Acceso no autorizado");
                setTimeout(function(){
                    window.location.href = "http://localhost:4000/signin.html"
                }, 1000);
            }
        })
        .catch(err => console.log(err))
  }

function signOut(userEmailValue) {
    const options = {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    }
    console.log(`userEmailValue: ${userEmailValue}`);
    const localStorageId = JSON.parse(window.localStorage.getItem("Token"));
    fetch(`quiz/users/logout/${localStorageId}`, options)
        .then(response => {
            if (response.status === 200) {
                alert("Adiós");
                window.location.href = "http://localhost:4000/index.html"
            }
        })
        .catch(err => console.log(err))
  }

function signUp() {
    const options = {
      method: 'POST',
      body: JSON.stringify({email:userEmail.value, pass: userPass.value}),
      headers:{'Content-Type': 'application/json'}
    }
    
    fetch(`quiz/users/register`, options)
        .then(response => response.json())
        .then(data => {          
            const registerData = JSON.stringify(data);            
            if (data.status === 200) {
                alert("Bienvenido");
                setTimeout(function(){
                    window.location.href = "http://localhost:4000/home.html"
                }, 1000);
                // window.localStorage.setItem(userEmail.value, JSON.stringify(data.data));
                window.localStorage.setItem("Token", JSON.stringify(data.data));
            }
            else if (data.status === 400) {
                alert("Error en registro. Contacte con el administrador de la aplicación");
                setTimeout(function(){
                    window.location.href = "http://localhost:4000/index.html"
                }, 1000);
            }     
               
        })
        .catch(err => console.log(err))
  }

function signIn() {
    const options = {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    }
    
    fetch(`quiz/users/login/${userEmail.value}`, options)
        .then(response => response.json())
        .then(data => {                    
            if (data.status === 200) {
                alert("Bienvenido");
                setTimeout(function(){
                    window.location.href = "http://localhost:4000/home.html"
                }, 1000);
                // window.localStorage.setItem(userEmail.value, JSON.stringify(data.data));
                window.localStorage.setItem("Token", JSON.stringify(data.data));
                return userEmailValue = userEmail.value;
            }
            else if (data.status === 400) {
                setTimeout(function(){
                    window.location.href = "http://localhost:4000/signup.html"
                }, 1000);
            };        
        })
        .catch(err => console.log(err))   
        
        
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
                    emptyAnswer = true;
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
//--------------------------------------------------------------
// App Authentication management

if(signUpButton){
    signUpButton.addEventListener('click', () => {
        if(userEmail.value == "" || userPass.value == ""){
            resetGame();
            setTimeout(function(){
                alert("El email y la contraseña son requeridos");
            }, 1000);            
        } 
        else {
            signUp();
        }
    });
}

if(signInButton){
    signInButton.addEventListener('click', () => {
        if(userEmail.value == "" || userPass.value == ""){
            resetGame();
            setTimeout(function(){
                alert("El email y la contraseña son requeridos");
            }, 2000);            
        } 
        else {
            signIn();
        }
    
    });
}

if(signOutButton){    
    signOutButton.addEventListener('click', () => {                  
            signOut(userEmailValue);
    });
}

//--------------------------------------------------------------
// Question Master Management

if(createQuestion){
    createQuestion.addEventListener('click', () => {       
        verifyAccess();    
        if (userAuthenticated == false){        
            createQuestions();
        }
    });
    }

if(newQuestionButton){
    newQuestionButton.addEventListener('click', () => {       
        verifyAccess();    
        if (userAuthenticated == false){        
            window.location.href = "http://localhost:4000/createquestions.html";
        }
    });
    }

if(questionMasterButton){
    questionMasterButton.addEventListener('click', () => {       
        verifyAccess();    
        if (userAuthenticated == false){        
            window.location.href = "http://localhost:4000/questions.html";
        }
        //getquestions();
    });
    }