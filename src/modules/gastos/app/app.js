import { LightningElement } from 'lwc';
import { currentMonth } from './constants.js';
import { APRIL_DATA } from './data/months/april/april';
import {APRIL_ENTRIES} from './data/months/april/entries';

import { entriesToObject, totalExpensesByCategory, totalExpenses } from './main/utils.js';


export default class App extends LightningElement {

    month = currentMonth;
    data = APRIL_DATA;
    entries = APRIL_ENTRIES;
    newEntry = {};


    handleSubmitEntry({detail}){
        this.newEntry = JSON.parse(JSON.stringify(detail))
        this.entries.push(this.newEntry)
        this.data.april = this.totalExpensesByCategory
        this.data.total = this.totalExpenses
    }

    get totalExpenses() {
        return totalExpenses(this.totalExpensesByCategory)
    }

    get totalExpensesByCategory() {
        return totalExpensesByCategory(this.entriesToObject)
    }

    get entriesToObject() {
        return entriesToObject(this.entries)
    }
}
