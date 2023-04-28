const _aside = document.querySelector('.show_aside')
_aside.addEventListener('click', () => {
    document.getElementById('aside').style.transform = 'translateX(0)'
    document.getElementById('aside').style.transition= '2s'
})
document.querySelector(".close-icon").addEventListener("click", () => {
    document.getElementById('aside').style.transform = 'translateX(-100%)'
    document.getElementById('aside').style.transition= '2s'
})