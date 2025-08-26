import type Person from "../models/Person"
import type ListService from "./ListService"

class SorterService {

    private listService: ListService

    constructor(listService: ListService) {
        this.listService = listService
    }

    public sort() {

        const people: Person[] = this.listService.people

        if (people.length <= 3) throw new Error('Mínimo de 3 participantes é necessário')

        let shuffled: Person[];
        let attempts = 0;
        const maxAttempts = 1000;

        while (attempts < maxAttempts) {
            attempts++;
            shuffled = [...people].sort(() => Math.random() - 0.5);

            let valid = true;
            for (let i = 0; i < shuffled.length; i++) {
                const person = shuffled[i];
                const next = shuffled[(i + 1) % shuffled.length];

                if (person.exclude && person.exclude.id === next.id) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                for (let i = 0; i < shuffled.length; i++) {
                    const person = shuffled[i];
                    const next = shuffled[(i + 1) % shuffled.length];
                    person.secretFriend = next;
                }
                return;
            }
        }

        throw new Error('Não foi possível gerar uma distribuição válida de secret friends');
    }

}

export default SorterService