import { LightningElement } from 'lwc';
import { currentMonth } from './constants.js';
import { CURRENT_DATA, CURRENT_ENTRIES } from './currentData.js';

import {
  entriesToObject,
  totalExpensesByCategory,
  totalExpenses,
} from './main/utils.js';

export default class App extends LightningElement {
  data = CURRENT_DATA;
  newEntry = {};

  connectedCallback() {
    this.data = this.storedData || {
      [currentMonth]: this.totalExpensesByCategory,
      total: this.totalExpenses,
    };
  }

  handleSubmitEntry({ detail }) {
    console.log(detail);
    this.newEntry = JSON.parse(JSON.stringify(detail));
    this.entries.push(this.newEntry);
    console.log(this.entriesToObject);

    this.data = {
      [currentMonth]: this.totalExpensesByCategory,
      total: this.totalExpenses,
    };
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  get entries() {
    return CURRENT_ENTRIES;
  }

  get month() {
    return currentMonth;
  }

  get storedData() {
    return JSON.parse(localStorage.getItem('data'));
  }

  get totalExpenses() {
    return totalExpenses(this.totalExpensesByCategory);
  }

  get totalExpensesByCategory() {
    return totalExpensesByCategory(this.entriesToObject);
  }

  get entriesToObject() {
    return entriesToObject(this.entries);
  }
}
