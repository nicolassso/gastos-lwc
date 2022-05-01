/**
 * Card component
 */
import { LightningElement, api } from 'lwc';

export default class Card extends LightningElement {
  @api data;
  @api month;
  @api newEntry;

  get total() {
    return this.data.total || '';
  }

  get expenses() {
    return this.data[this.month] || {};
  }

  get key() {
    return Math.random();
  }

  get entries() {
    const entriesArr = [];
    for (let key in this.expenses) {
      entriesArr.push({ category: key, quantity: this.expenses[key] });
    }
    return entriesArr;
  }
}
