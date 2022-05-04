import { LightningElement } from 'lwc';
import { SubmitEntry } from './events';
import { CATEGORIES, KEYS } from './constants';
export default class NewCardEntry extends LightningElement {
  categoryInput;
  keyInput;
  quantityInput;

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

  get categories() {
    return CATEGORIES;
  }

  get id() {
    return this.categories.map((c) => `${c}-select`);
  }
  get selectedKey() {
    return KEYS[this.categoryInput];
  }
}
