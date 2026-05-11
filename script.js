// CURSOR

const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {

  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";

  ring.style.left = mouseX + "px";
  ring.style.top = mouseY + "px";
});


// HERO TYPING EFFECT

const words = [
  "Spring Boot",
  "REST APIs",
  "JWT Authentication",
  "Hibernate ORM",
  "MySQL"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingEl = document.getElementById("heroTyping");

function typeEffect(){

  const currentWord = words[wordIndex];

  if(!deleting){

    typingEl.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if(charIndex === currentWord.length){
      deleting = true;

      setTimeout(typeEffect, 1500);
      return;
    }

  }else{

    typingEl.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if(charIndex === 0){

      deleting = false;

      wordIndex++;

      if(wordIndex >= words.length){
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();