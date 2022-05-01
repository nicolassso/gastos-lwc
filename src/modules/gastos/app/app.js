import { LightningElement, track } from 'lwc';
import { currentMonth } from './constants.js';
import { CURRENT_DATA, CURRENT_ENTRIES } from './currentData.js';

import {
  entriesToObject,
  totalExpensesByCategory,
  totalExpenses,
} from './main/utils.js';

export default class App extends LightningElement {
  month = currentMonth;
  data = CURRENT_DATA;
  entries = CURRENT_ENTRIES;
  newEntry = {};

  handleSubmitEntry({ detail }) {
    this.newEntry = JSON.parse(JSON.stringify(detail));
    this.entries.push(this.newEntry);
    this.data = this.totalExpensesByCategory;
    this.data.total = this.totalExpenses;
    console.log(this.entries);
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
