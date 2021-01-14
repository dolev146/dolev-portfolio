const text = document.querySelector(".skills-header");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span> " + splitText[i] + " </span>";
}

const onTick = async () => {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    await complete();
    return;
  }
};

let char = 0;
let timer = setInterval(onTick, 250);
let timer2;
let timer3;

const complete = async () => {
  await clearInterval(timer);
  char = 0;
  timer2 = setInterval(onComplete, 250);
};

const onComplete = () => {
  const span = text.querySelectorAll("span")[char];
  span.classList.remove("fade");
  char++;
  if (char === splitText.length) {
    clearInterval(timer2);
    char = 0;
    timer = setInterval(onTick, 250);
    return;
  }
};
