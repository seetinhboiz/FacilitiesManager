const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const revealItems = $$('.reveal')
window.addEventListener('scroll', reveal)

//reveal
function reveal(){
    revealItems.forEach((item) => {
        const windowHeight = window.innerHeight
        const revealTop = item.getBoundingClientRect().top

        // scrollY - offsetTop < innerHeight

        if (revealTop < windowHeight - 100) {
            item.classList.add('active')
        } 
        //reveal lại khi kéo lên xong lại kéo xuống =))
        else {
            item.classList.remove('active')
        }
    })
}