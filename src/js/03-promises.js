import Notiflix from 'notiflix';


const refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  btnEl: document.querySelector('button')
}

btnDisabling();

refs.formEl.addEventListener('submit', onFormSubmit);
refs.delayEl.addEventListener('input', btnDisabling);
refs.amountEl.addEventListener('input', btnDisabling);
refs.stepEl.addEventListener('input', btnDisabling);

function onFormSubmit(e){
e.preventDefault();
const delay = +refs.delayEl.value;// + - приведение к числовому значению value
const step = +refs.stepEl.value;
const amount = +refs.amountEl.value;
for(let i = 0; i < amount; i++){
  const currentPosition = i + 1;
  const currentDelay = delay + step * i;
  createPromise(currentPosition, currentDelay).then(({position, delay}) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);   
  }).catch(({position, delay}) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
});
}
e.currentTarget.reset();
btnDisabling();
}

function createPromise(position, delay) {
  const promises = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
  if (shouldResolve) {
    // Fulfill
    resolve({ position, delay });
  } else {
    // Reject
    reject({ position, delay });
  }
}, delay);
  });
  return promises;
}

function btnDisabling(){
  refs.btnEl.disabled = refs.delayEl.value === '' || refs.stepEl.value === '' || refs.amountEl.value === '';
}