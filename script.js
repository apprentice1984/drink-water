const cups = document.querySelectorAll('.glass')
const litersSpan = document.getElementById('litersSpan')
const parentCups = document.querySelector('.cups')
const mainCup = document.querySelector('.mainCup')
const percentSpan = document.getElementById('percentSpan')
let percent = 12.5
let koeff = 0.25
const initial = 2

cups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
    let i = idx
    if (i === 7) {
      do {
        parentCups.children[i].classList.add('fill')
        i--
      } while (i >= 0)
    } else if (cup.nextElementSibling.classList.contains('fill')) {
      toggleAll(idx)
    } else if (
      !cup.nextElementSibling.classList.contains('fill') &&
      cup.classList.contains('fill')
    ) {
      cup.classList.toggle('fill')
    } else {
      fillCurrent(idx)
    }
    let filledArray = [...cups].filter((cup) => cup.classList.contains('fill'))
    let fillNumber = percent * filledArray.length
    mainCup.style.backgroundImage = `linear-gradient(to top,  var(--fillColor) 0%, var(--fillColor) ${fillNumber}%,#fff ${fillNumber}%,#fff 100%)`
    percentSpan.innerText = `${fillNumber}%`
    litersSpan.innerText = `${initial - koeff * filledArray.length}L`
    litersSpan.style.visibility = 'hidden'
  })
})

function toggleAll(idx) {
  cups.forEach((cup, index) => {
    if (index > idx) {
      cup.classList.remove('fill')
    } else {
      cup.classList.add('fill')
    }
  })
}

function fillCurrent(idx) {
  do {
    parentCups.children[idx].classList.add('fill')
    idx--
  } while (idx >= 0)
}
