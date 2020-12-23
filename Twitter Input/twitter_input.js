const text = document.querySelector('#string');
const button = document.querySelector('#btn');
const count = document.querySelector('#counterFooter');
const maxLength = 140;

const countChar = () => {
  const counter = text.value.length;
  const charLeft = maxLength - counter;
  count.innerText = `${charLeft}/140`;
  if (counter >= 120 && counter <= maxLength) {
    button.classList.remove('buttonDisabled');
    count.style.color = 'red';
  } else if (counter > maxLength) {
    button.classList.add('buttonDisabled');
    text.style.color = 'red';
  } else {
    button.classList.remove('buttonDisabled');
    text.removeAttribute('style');
  }
};

const shareTweet = () => {
  const tweet = text.value;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${tweet}`;
  window.open(twitterUrl, '_blank');
};

text.addEventListener('keydown', countChar);
button.addEventListener('click', shareTweet);
