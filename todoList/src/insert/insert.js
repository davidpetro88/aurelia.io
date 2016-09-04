import { Contact } from './../Contact';

export class Insert {
    constructor() {
        this.heading = "Add a new contact";
        this.name = '';
        this.lastname = '';
        this.telephone = 0;
        this.message = ""
    }

    addContact() {
        let contact = new Contact();
        contact.getData().push(contact.formatObject(this.name, this.lastname, this.telephone))
        console.log(contact.getData());
        this.message = "successfully inserted user";
    }
}