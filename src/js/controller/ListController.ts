import Delete from "../components/Delete"
import Heading from "../components/Heading"
import Option from "../components/Option"
import Warn from "../components/Warn"
import type Person from "../models/Person"
import ListService from "../service/ListService"

class ListController {

    private list: HTMLDivElement

    private service: ListService
    private template: HTMLTemplateElement

    private title = Heading.h2('Participantes')
    private sortButton: HTMLButtonElement
    private clearButton: HTMLButtonElement

    constructor (list: HTMLDivElement, service: ListService, template: HTMLTemplateElement, sortButton: HTMLButtonElement, clearButton: HTMLButtonElement) {
        this.service = service
        this.list = list
        this.template = template
        this.sortButton = sortButton
        this.clearButton = clearButton

        this.clearButton.addEventListener('click', () => this.clear())
    }

    public push(person: Person): void {
        const people = this.service.push(person)
        this.renderList(people)
    }

    public remove(id: number): void {
        const people = this.service.remove(id)
        this.renderList(people)
    }

    private clear(): void {
        this.service.clear()
        this.renderList(this.service.people)
    }

    private renderList(people: Person[]): void {
        this.list.innerHTML = ''
        this.list.append(this.title)
        people.forEach((p: Person) => {
            this.list.appendChild(this.newCard(p))
        })

        if (this.service.people.length === 0)
            this.list.append(new Warn().element)

        if (this.service.people.length > 0)
            this.clearButton.disabled = false
        else this.clearButton.disabled = true

        if (this.service.people.length > 3)
            this.sortButton.disabled = false
        else this.sortButton.disabled = true
    }

    private newCard(person: Person): HTMLDivElement {
        const people = this.service.people
        const clone = this.template.content.firstElementChild!.cloneNode(true) as HTMLDivElement

        clone!.id = String(person.id)
        clone.querySelector('.nome')!.textContent = person.name
        clone.querySelector('.email')!.textContent = person.email
        
        const select = clone.querySelector('.excluir-select') as HTMLSelectElement
        
        people.forEach((p: Person) => {
            if (!p.equal(person)) {
                select.append(Option.option(String(p.id), p.name))
            }
        })

        clone.querySelector('.top')!.append(new Delete(this, person.id).element)

        return clone
    }

}

export default ListController