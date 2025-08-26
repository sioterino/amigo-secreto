import type Person from "../models/Person"

class ListService {

    private list: Person[]

    constructor() {
        this.list = []
    }

    public get people(): Person[] { return this.list }

    public push(person: Person): Person[] {
        let isThere: boolean = false
        this.list.forEach(item => {
            if (item.equal(person)) isThere = true   
        })
        if (!isThere) this.list.push(person)
        return this.list
    }

    public remove(id: number): Person[] {
        this.list = this.list.filter( (item: Person) => item.id !== id )
        return this.list
    }

    public findById(id: number): Person {
        return this.list.filter(item => item.id === id)[0]
    }

    public printSecretFriends(): void {
        const people = this.list;

        let start = people[0];
        let current = start;
        const names: string[] = [];

        do {
            names.push(current.name);
            if (!current.secretFriend) {
                console.log("O círculo não foi totalmente atribuído.");
                return;
            }
            current = current.secretFriend;
        } while (current.id !== start.id);

        names.push(start.name);
        console.log(names.join(" > "));
    }

}

export default ListService