const title = document.querySelector('.typewrite');

function typeWrite(element) {
    const textoArray = element.innerHTML.split("");
    element.innerHTML = " ";
    textoArray.forEach((letter, i) => {
      setTimeout( () => element.innerHTML += letter, 80 * i);
    });
  }

typeWrite(title);