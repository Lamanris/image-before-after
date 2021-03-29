let box = document.querySelector('.box')
let secondImgOverlay = document.querySelector('.secondImg-overlay')

box.addEventListener('mousemove', (e) => {
    secondImgOverlay.style.width = e.offsetX + 'px'
})