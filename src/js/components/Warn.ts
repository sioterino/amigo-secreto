class Warn {

    private p: HTMLParagraphElement

    constructor() {
        this.p = document.createElement('p')
        this.p.textContent = 'Adicione ao menos quatro participantes para o amigo secreto funcionar!'
        this.p.classList.add('dica')
    }

    public get element(): HTMLParagraphElement { return this.p }

}

export default Warn