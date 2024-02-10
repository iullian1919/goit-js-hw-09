import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const refs = {
  amount: formEl.elements.amount,
  delay: formEl.elements.delay,
  step: formEl.elements.step,
};

formEl.addEventListener('submit', submitForm);

// callback submit
function submitForm(ev) {
  ev.preventDefault();

  if (refs.amount.value < 0 || refs.delay.value < 0) {
    Notiflix.Notify.failure('The value cannot be negative');
    return;
  }
  let delay = Number(refs.delay.value);
  for (let i = 1; i <= refs.amount.value; i += 1) {
    const promise = createPromise(i, delay).then(onSuccess).catch(onError);
    delay += Number(refs.step.value);
  }
}
// Create promisess
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
// success
function onSuccess(value) {
  Notiflix.Notify.success(value);
}
// error
function onError(error) {
  Notiflix.Notify.failure(error);
}
