import EmailService from "../service/EmailService"
import type ListService from "../service/ListService"
import type SorterService from "../service/SorterService"

class SorterController {

    private button: HTMLButtonElement
    private list: HTMLDivElement
    private listService: ListService
    private sorterService: SorterService
    private emailService: EmailService

    constructor(button: HTMLButtonElement, sorterService: SorterService, list: HTMLDivElement, listService: ListService, emailService: EmailService) {
        this.sorterService = sorterService
        this.listService = listService
        this.emailService = emailService

        this.list = list
        this.button = button
        this.button.addEventListener('click', (e: Event) => this.sort(e))
    }

    private sort(e: Event) {
        e.preventDefault
        this.update()

        try {
            this.sorterService.sort();
        } catch (error) {
            console.error("Erro ao sortear secret friends:", error);
        }

        this.listService.printSecretFriends()
        this.emailService.send(this.listService.people)
    }

    private update() {
        const cards = this.list.querySelectorAll('.card')
        cards.forEach(card => {
            const value = card.querySelector('select')!.value
            if (value !== 'none') {
                const person = this.listService.findById(Number(card.id))
                const exclude = this.listService.findById(Number(value))
                person.exclude = exclude
            }
        })
    }
    }

export default SorterController