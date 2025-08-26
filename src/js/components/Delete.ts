import type ListController from "../controller/ListController"

class Delete {

    private del: HTMLSpanElement
    private controller: ListController

    constructor(controller: ListController, id: number) {
        this.controller = controller

        this.del = document.createElement('span')
        this.del.textContent = 'close'
        this.del.className = 'icon close'

        this.del.addEventListener('click', (e: Event) => this.delete(e, id))

    }

    private delete(e: Event, id: number) {
        e.preventDefault()
       this.controller.remove(id)
    }

    public get element(): HTMLSpanElement { return this.del }

}

export default Delete