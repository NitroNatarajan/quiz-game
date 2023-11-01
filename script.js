const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');

let currentQuestion = {};

// function fetchQuestion() {
//     fetch('https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY')
//         .then(response => response.json())
//         .then(data => {
//             // currentQuestion = data[0];
//            
//             questionElement.innerText = currentQuestion.question;
//             optionsElement.innerHTML = '';
//               Object.values.(currentQuestion.answers).forEach((answer,index) => {
//                 const option = document.createElement('div');
//                 option.classList.add('option');
//                 option.innerText = answer;
//                 option.addEventListener('click', () => checkAnswer(index));
//                 optionsElement.appendChild(option);
//             });
//         }).catch(error => console.error('Error fetching question:', error.message));
// }
 
// Api key might be expired ..so i have tested this by the sample json object..

currentQuestion = {
    "id": 1,
    "question": "How to delete a directory in Linux?",
    "description": "delete folder",
    "answers": {
      "answer_a": "ls",
      "answer_b": "delete",
      "answer_c": "remove",
      "answer_d": "rmdir",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "false",
      "answer_b_correct": "false",
      "answer_c_correct": "false",
      "answer_d_correct": "true",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "explanation": "rmdir deletes an empty directory",
    "tip": null,
    "tags": [],
    "category": "linux",
    "difficulty": "Easy"
  };

  
questionElement.innerText = currentQuestion.question;
optionsElement.innerHTML = '';
  Object.values(currentQuestion.answers).forEach((answer,index) => {
    const option = document.createElement('div');
    option.classList.add('option');
    option.innerText = answer;
    option.addEventListener('click', () => checkAnswer(index));
    optionsElement.appendChild(option);
});


function checkAnswer(index) {
    const trueIndex = Object.values(currentQuestion.correct_answers);
    if (index === trueIndex.indexOf("true")) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
    fetchQuestion();
}

nextButton.addEventListener('click', fetchQuestion);

fetchQuestion();
