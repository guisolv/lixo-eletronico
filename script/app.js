const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            entry.target.classList.add('show');
        else
            entry.target.classList.remove('show');
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / 2000);
}, false);





const card = document.querySelectorAll('.card')

document.addEventListener('mousemove', (e) => rotateElement(e, card))

const lerp = (a, b, t) => {
    return a + (b - a) * t
}

function rotateElement(event, elements) {
    const x = event.clientX
    const y = event.clientY
    elements.forEach(element => {
        const rect = element.getBoundingClientRect()

        const middleX = rect.left + rect.width/2
        const middleY = rect.top + rect.height/2

        var offsetX = (x - middleX) / 20
        var offsetY = (y - middleY) / 20
        
        if (x < rect.left || x > rect.right || y > rect.bottom || y < rect.top)
            element.classList.add('stop')
        else
            element.classList.remove('stop')

        const curX = element.style.getPropertyValue('--rotateX')
        const curY = element.style.getPropertyValue('--rotateY')
        console.log(element.classList)
        element.style.setProperty('--rotateX', offsetX + "deg")
        element.style.setProperty('--rotateY', -offsetY + "deg")

        
    });
}
