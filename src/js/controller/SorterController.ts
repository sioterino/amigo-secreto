import PopUp from "../components/PopUp"
import EmailService from "../service/EmailService"
import type ListService from "../service/ListService"
import type SorterService from "../service/SorterService"

class SorterController {

    private sortButton: HTMLButtonElement
    private list: HTMLDivElement
    private listService: ListService
    private sorterService: SorterService
    private emailService: EmailService

    constructor(sortButton: HTMLButtonElement, sorterService: SorterService, list: HTMLDivElement, listService: ListService, emailService: EmailService) {
        this.sorterService = sorterService
        this.listService = listService
        this.emailService = emailService

        this.list = list
        this.sortButton = sortButton
        this.sortButton.addEventListener('click', (e: Event) => this.sort(e))
    }

    private async sort(e: Event): Promise<void> {
        e.preventDefault
        this.update()

        try {
            this.sorterService.sort();
        } catch (error) {
            if (error instanceof Error) new PopUp('warn', error.message).show();
            else new PopUp('warn', String(error)).show();
            return
        }

        new PopUp('info', 'Sorteando e enviando emails...').show((this.listService.people.length - 1) * 1000)
        await this.emailService.send(this.listService.people)
        new PopUp('success', 'Emails enviados!').show()
    }

    private update(): void {
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