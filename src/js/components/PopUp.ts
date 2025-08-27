class PopUp {

    private div: HTMLDivElement

    constructor(level: 'warn' | 'info' | 'success', text: string) {

        this.div = document.createElement('div')
        this.div.className = `popup ${level}`

        let font;
        if (level === 'warn') font = 'close'
        else if (level === 'info') font = 'info_i'
        else if (level === 'success') font = 'check'

        const span = document.createElement('span')
        span.className = `icon ${level}`
        span.textContent = font as string

        const p = document.createElement('p')
        p.textContent = text

        this.div.append(span, p)
    }

    public show(duration: number = 5000, parent: HTMLElement = document.querySelector('.popup-wrapper')!) {
        parent.appendChild(this.div)

        requestAnimationFrame(() => { this.div.classList.add('show') })

        setTimeout(() => {
            this.div.classList.remove('show')
            this.div.classList.add('hide')
            
            this.div.addEventListener('transitionend', () => this.div.remove(), { once: true })
        }, duration)
    }

}

export default PopUp