let menuButton = document.querySelector('.bi-three-dots-vertical')
let menuList = document.querySelector('.menu-list')
let ourTargetButton = document.getElementById('ourTargetButton')
let funcButton = document.getElementById('funcButton')
//let linkButton = document.getElementById('linkButton')

menuButton.onclick = function() {
    console.log('Click')
    menuList.classList.toggle('show')
}

ourTargetButton.onclick = function() {
    console.log("click");
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    })
}

funcButton.onclick = function() {
    console.log("click");
    window.scrollTo({
        top: window.innerHeight*2,
        behavior: 'smooth'
    })
}

/*linkButton.onclick = function() {
    console.log("click");
    window.scrollTo({
        top: window.innerHeight*3,
        behavior: 'smooth'
    })
}*/