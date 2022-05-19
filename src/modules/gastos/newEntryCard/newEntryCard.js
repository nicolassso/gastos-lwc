import { LightningElement } from 'lwc';
import { SubmitEntry } from './events';
import { CATEGORIES, KEYS } from './constants';
export default class NewCardEntry extends LightningElement {
  categoryInput = this.categories[0];
  keyInput = KEYS[this.categoryInput][0];
  quantityInput = 0;

  handleInputChange(event) {
    event.composedPath()[0].id === 'categoryInput'
      ? (this.categoryInput = event.target.value) &&
        (this.keyInput = KEYS[this.categoryInput][0])
      : event.composedPath()[0].id === 'keyInput'
      ? (this.keyInput = event.target.value)
      : (this.quantityInput = event.target.value);
    console.log(
      `${this.categoryInput}, ${this.keyInput}, ${this.quantityInput}`
    );
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

  get key() {
    return Math.random();
  }

  get selectedCategoryKeys() {
    return KEYS[this.categoryInput];
  }
}
