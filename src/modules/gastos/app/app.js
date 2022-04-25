import { LightningElement } from 'lwc';
import { currentMonth } from './constants.js';
import { APRIL_DATA } from './data/months/april/april';
import { MARCH_DATA } from './data/months/march/march';


export default class App extends LightningElement {
    month = currentMonth
    data = APRIL_DATA
    newEntry = {}

    handleSubmitEntry(event){
        this.newEntry = event.detail
    }
}
