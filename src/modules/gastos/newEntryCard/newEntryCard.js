import { LightningElement } from 'lwc';
import { SubmitEntry } from './events';

export default class NewCardEntry extends LightningElement {
    categoryInput = 'test';
    keyInput = 'rent';
    quantityInput = [135];

    handleInputChange(event) {
        this[event.path[0].id] = event.target.value;
    }

    handleButtonClick() {
        const newEntry = {
            category: this.categoryInput,
            key: this.keyInput,
            quantity: [parseFloat(this.quantityInput)],
        };
        this.dispatchEvent(new SubmitEntry(newEntry));
    }
}
