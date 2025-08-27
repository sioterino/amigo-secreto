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

    public clear(): void {
        this.list = []
    }

    public findById(id: number): Person {
        return this.list.filter(item => item.id === id)[0]
    }

}

export default ListService