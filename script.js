let counter = 0;

function increment() {
  if (counter < 10) {
    counter++;
    document.getElementById("counter").innerText = counter;
  }
}

function decrement() {
  if (counter > 0) {
    counter--;
    document.getElementById("counter").innerText = counter;
    if (counter === 0) {
      alert("Il contatore è bloccato su 0.");
    }
  }
}
