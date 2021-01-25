const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // get where the click happened in the window
        // it's gonne fire only when it's inside of the button
        const x = e.clientX
        const y = e.clientY

        // get where the button is positioned in the window
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // get position inside of the button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // create a span
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})