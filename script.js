function onReady() {
  console.log('Yay!, onReady() got called when the page loaded.');
  // we can select things
  // document basically means html file
  // querySelector will match 1 thing. the first thing
  let header = document.querySelector('h1');
console.log(header)
header.classList.add('pink-text')
header.textContent = 'HELLO FROM JAVASCRIPT'
}

// Will call onReady() when the page loads.
onReady();

function potatoClick() {
  console.log('you clicked potato.');
  let farm = document.getElementById('potatoesAndUnicorns');
  farm.innerHTML += '<span onclick="deletePotato(event)">🥔</span>';
}

function unicornClick() {
  console.log('you clicked unicorn.');
  let ranch = document.getElementById('potatoesAndUnicorns');
  ranch.innerHTML += `<span onclick="deleteUnicorn(event)">🦄</span>`;

}

function deletePotato(event) {
  console.log('you clicked -A- potato.', event.target); //event.target is where the click happened
  event.target.remove()
}

function deleteUnicorn(event) {
  console.log('you clicked -A- unicorn', event.target);
  event.target.remove()
}
