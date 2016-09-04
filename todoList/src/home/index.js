import {Contact} from './../Contact';

export class Home {
    constructor() {
        this.heading = 'List of contacts';
        this.contacts = new Contact().getData();
    }

    deleteContact(name) {
        this.reg = this.contacts.filter((el) => {
            return el.name == name;
        });

        console.log(name);
        console.log(this.reg[0]);

        let index = this.contacts.indexOf(this.reg[0]);
        console.log(index);

        if (index !== -1) {
            this.contacts.splice(index, 1);
        }
    }
}
;