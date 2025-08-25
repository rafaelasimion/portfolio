let btnMenu = document.getElementById('btn-menu')
let btnMenuIcon = document.querySelector('#btn-menu .fa-solid')
let menuToggle = document.querySelector('.menu-toggle')

let index = 0

btnMenu.addEventListener('click', () => {

    if (index === 0) {
        // abrir
        index = 1

        menuToggle.style.display = 'block'
        btnMenuIcon.classList.remove('fa-bars')
        btnMenuIcon.classList.add('fa-xmark')
    }
    else if (index === 1) {
        // fechar
        index = 0

        menuToggle.style.display = 'none'
        btnMenuIcon.classList.remove('fa-xmark')
        btnMenuIcon.classList.add('fa-bars')
    }

})