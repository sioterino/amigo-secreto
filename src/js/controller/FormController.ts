import Person from "../models/Person"
import type ListController from "./ListController"

class FormController {

    private form: HTMLFormElement
    private nameInput: HTMLInputElement
    private emailInput: HTMLInputElement

    private listController: ListController

    constructor(form: HTMLFormElement, listController: ListController) {
        this.form = form
        this.listController = listController

        this.nameInput = form.querySelector('#name') as HTMLInputElement
        this.emailInput = form.querySelector('#email') as HTMLInputElement

        this.form.addEventListener('submit', (e: Event) => this.submit(e))
    }

    private submit(e: Event): void {
        e.preventDefault()

        const name: string = this.nameInput.value
        const email: string = this.emailInput.value
        this.form.reset()
        this.nameInput.focus()

        this.listController.push(new Person(email, name))
    }
 
}

export default FormController