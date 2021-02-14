
//obtengo el coche
let coche = document.getElementById('coche')
let cocheX = 0 //coche.getBoundingClientRect().left
let cocheY = 0 //coche.getBoundingClientRect().top
let tamanoImg = 300

document.addEventListener('keydown', evento => {
    evento.preventDefault()
    switch (evento.key) {
        case 'ArrowUp':
            coche.style.transform = `translate(${cocheX}%, ${cocheY -= 5}%)`
            break
        case 'ArrowDown':
            coche.style.transform = `translate(${cocheX}%, ${cocheY += 5}%)`
                switch(true){
                case (coche.getBoundingClientRect().y +scrollY) - tamanoImg >= 380:
                    crearElemento(400)
                break
                case (coche.getBoundingClientRect().y + scrollY) - tamanoImg >= 780:
                    crearElemento(800)
                break
                case (coche.getBoundingClientRect().y + scrollY) - tamanoImg >= 1180:
                    crearElemento(1200)
                break
                case (coche.getBoundingClientRect().y + scrollY) - tamanoImg >= 1580:
                    crearElemento(1600)
                break
                case (coche.getBoundingClientRect().y + scrollY) - tamanoImg >= 1980:
                    crearElemento(2000)
                break
                }
            break
        case 'ArrowRight':
            coche.style.transform = `translate(${cocheX += 5}%, ${cocheY}%)`
            break
        case 'ArrowLeft':
            coche.style.transform = `translate(${cocheX -= 5}%, ${cocheY}%)`
            break
    }
})

const crearElemento = distancia => {
    const numero = document.createElement('h1')
    numero.textContent = ` --> ${distancia} M -------`
    numero.style.fontSize = '1rem'
    numero.style.position = 'absolute'
    numero.style.top = `${distancia}px`
    numero.style.left = '0px'
    document.body.appendChild(numero)
}

document.addEventListener('scroll', evento => {
    switch(true){
        case (scrollY >= 250 && scrollY <= 430):
            crearElemento(400)
        break
        case (scrollY >= 650 && scrollY <= 830):
            crearElemento(800)
        break
        case (scrollY >= 1050 && scrollY <= 1230):
            crearElemento(1200)
        break
        case (scrollY >= 1450 && scrollY <= 1630):
            crearElemento(1600)
        break
        case (scrollY >= 1850 && scrollY <= 2030):
            crearElemento(2000)
        break

    }
})


