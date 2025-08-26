import IdGenerator from "../utils/IdGenerator"

class Person {

    private num: number
    private mail: string
    private nome: string
    private exc: Person | null
    private secret: Person | null

    constructor(email: string, name: string, id: number | null = null) {
        this.num = id ? id : IdGenerator.new()
        this.mail = email
        this.nome = name
        
        this.exc = null
        this.secret = null
    }

    public get email(): string { return this.mail }
    public get name(): string { return this.nome }
    public get id(): number { return this.num }

    public get exclude(): Person | null { return this.exc }
    public get secretFriend(): Person | null { return this.secret }

    public set exclude(exclude: Person) { this.exc = exclude }
    public set secretFriend(secret: Person) { this.secret = secret }

    public equal(other: Person): boolean {
        if (this.num === other.id && this.nome === other.name && this.mail === other.email && this.exc === other.exclude) return true
        return false
    }

}

export default Person