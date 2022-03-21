const text = [
  `Consequat sunt amet nostrud pariatur culpa ullamco. Sit sint minim qui qui occaecat dolor dolore esse ut. Voluptate ipsum est amet commodo. In nisi quis veniam ipsum ad officia irure aliquip enim duis. Occaecat duis deserunt commodo tempor velit id eiusmod Lorem duis do ut. Qui adipisicing pariatur sit culpa.`,
  `Qui proident minim elit duis aliqua sunt esse minim sit do veniam magna esse. Aliquip qui qui officia fugiat voluptate ullamco consectetur duis duis cillum veniam. Lorem sint aliqua excepteur est magna proident est cupidatat officia excepteur sit. Sunt anim deserunt non est adipisicing amet ipsum do et velit eu consequat ut. Pariatur duis do aliqua fugiat mollit. Officia est anim esse consequat eiusmod quis veniam cupidatat ut eu non pariatur aliquip et.`,
  `Consequat qui commodo anim pariatur. Aliquip minim irure dolor deserunt deserunt. Sit velit pariatur culpa mollit quis Lorem mollit ut irure in dolore. Tempor aliqua deserunt nulla adipisicing incididunt labore veniam amet sint. Nostrud nulla esse amet dolore veniam in. Id proident sit duis ea occaecat pariatur commodo. Ut sint consectetur dolore cupidatat adipisicing voluptate cillum quis esse est dolor in.`,
  `Ut cupidatat irure eu tempor exercitation. Occaecat sunt anim velit dolore magna id proident magna veniam adipisicing deserunt ullamco voluptate. Consequat ipsum quis proident et eu.`,
  `Laborum culpa proident consequat nulla in qui. Incididunt fugiat anim duis tempor. Do duis proident aliquip aliquip do aute qui mollit reprehenderit dolor qui. Pariatur esse sunt amet culpa.`,
  `Sint et qui aliquip est mollit elit occaecat ex elit culpa eu. Enim qui Lorem cupidatat laborum mollit elit. Aute reprehenderit ad esse excepteur eiusmod ut enim nostrud Lorem. Fugiat non ut quis velit exercitation. Ut tempor eiusmod exercitation mollit aliquip. Eu et sunt mollit ea officia aliqua incididunt eu qui nisi commodo deserunt aliqua. Ad qui incididunt nulla laboris elit id elit eu aliquip occaecat.`,
  `Dolor ad mollit id dolore occaecat commodo. Aute tempor sunt nisi ex enim ipsum nulla incididunt eiusmod duis. Aliqua elit laborum et in amet dolore qui minim magna culpa veniam et dolor.`,
  `Pariatur laboris consequat dolore sunt. Reprehenderit nostrud aliquip eu consequat non. Eiusmod exercitation ex reprehenderit nostrud velit elit. Adipisicing veniam reprehenderit est officia aliqua laboris dolor dolore.`,
  `Magna exercitation et commodo eu ad eiusmod consectetur esse commodo magna. Mollit duis ipsum nulla duis. Tempor anim aute nostrud quis dolore nulla. Quis voluptate eu consequat deserunt aliquip esse elit. Ullamco consequat incididunt non officia veniam excepteur incididunt ea dolore Lorem. Exercitation ad minim ad ea anim proident proident eu non velit exercitation eiusmod elit consequat.`,
]

const form = document.querySelector('.lorem-ipsum')
const amount = document.getElementById('amount')
const result = document.querySelector('.lorem-text')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  const value = parseInt(amount.value)
  const random = Math.floor(Math.random() * text.length)
  if(isNaN(value) || value <= 0 || value > 9){
    result.innerHTML = `<p class="result">${text[random]}</p>`
  } else {
    let tempText = text.slice(0, value)
    tempText = tempText
    .map(function(item){
      return `<p class="result">${item}</p>`
    })
    .join("")
    result.innerHTML = tempText
  }
})