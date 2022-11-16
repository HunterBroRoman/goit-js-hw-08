import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state'; //key localSrorage
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onFormInput, 500));

let feedbackFormObj =
  JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE)) || {};

if (localStorage.getItem(FEEDBACK_FORM_STATE)) {
  const { email, message } = feedbackForm.elements;
  const localStorageObj = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
  const { email: currentEmail, message: currentMessage } = localStorageObj;
  email.value = currentEmail || '';
  message.value = currentMessage || '';
}

function onFormInput({ target: { name, value } }) {
  feedbackFormObj[name] = value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(feedbackFormObj));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (e.currentTarget.email.value && e.currentTarget.message.value) {
    console.log(feedbackFormObj);
    feedbackFormObj = {};
    localStorage.removeItem(FEEDBACK_FORM_STATE);
    e.currentTarget.reset();
  }
}

// const userData = {};
// function formInput(e) {
// const { name, value } = e.target;

// userData[name] = value;

// localStorage.setItem(LOCAL_KEY, value);
// }

// function formsubmit(e) {
//   e.preventDefault();

//   const { elements : {
//     email: { value: emailValue },
//     message: { value: messageValue},
//      },
//   } = e.currentTarget;

//   if (emailValue && messageValue) {
//   const formData = new FormData(e.currentTarget);
//   formData.forEach((value, name) => (userData[name] = value));
//   console.log(userData);
// } else  {
//   console.log("Please write a value");
// }
// }

// -----------------------------------

// let formData = {}; // хранит введенные данные

// popupalateTextarea(); //запускается функция по проверке хранилища

// form.addEventListener('input', e => {
//   e.preventDefault(); //снимает действия по дефолту для сабмита

//   formData[e.target.name] = e.target.value; // вносим в объект formData посимвольно данные из инпутов
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData)); //заносим в хранилище (key) по-символьно данные из инпута

//   // console.log(formData);

//   // e.target.reset(); //стирает данные из полей
//   localStorage.removeItem(LOCAL_KEY); // удаляет данные из хранилища
// });

// function popupalateTextarea() {
//   const savedMessage = localStorage.getItem(LOCAL_KEY); //если в хранилище есть данные, возвращает их в форму,
//    if (savedMessage) {
//     formData = JSON.parse(savedMessage);
//     const ggg = Object.entries(formData);

//     console.log(ggg);

//   }
// }

// import throttle from 'lodash.throttle';

// const LOCAL_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 500));

// function onFormInput (evt) {
//  const formData = evt.currentTarget.value;
//  localStorage.setItem(LOCAL_KEY, formData);
// }

// function onFormSubmit(evt) {
//     // evt.preventDefault();
//     // evt.currentTarget.reset();
// }
