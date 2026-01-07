const grid = document.querySelector('.container')
let squarePerSide = 16;

const fillColor = (targetSquare) => {
  targetSquare.addEventListener('mousemove', () => {
    targetSquare.style.backgroundColor = 'black'
  })
}

const drawPad = (squarePerSide) => {
  for (let i = 0; i < squarePerSide * squarePerSide; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridItem.style.cssText = `width: calc(100% / ${squarePerSide}); flex-shrink: 0;`
    fillColor(gridItem)
    grid.appendChild(gridItem)
  }
}

drawPad(squarePerSide)

const resetAndRedrawButton = document.querySelector('button')
resetAndRedrawButton.addEventListener('click', () => {
  squarePerSide = prompt('Input number of desired blocks in line (1-100)')
  if (squarePerSide < 1 || squarePerSide > 100) {
    return alert("Please choose a number between 1-100")
  }
  console.log('🚀 ~ squarePerSide:', squarePerSide)
  grid.innerHTML = ''
  drawPad(squarePerSide)
})






