import emailjs from "@emailjs/browser"
import type Person from "../models/Person"

class EmailService {

    private serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID!
    private templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!
    private publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!


    constructor() {
        emailjs.init(this.publicKey)
    }

    public async send(people: Person[]): Promise<void> {
        for (const person of people) {
            const params = this.emailParams(person)
            await emailjs.send(this.serviceID, this.templateID, params)
            await new Promise((resolve) => setTimeout(resolve, 1000))
        }

        console.log('Todos os emails foram enviados')
    }

    private emailParams(person: Person) {
        return {
            name: person.name,
            email: person.email,
            secret: person.secretFriend!.name
        }
    }

}

export default EmailService