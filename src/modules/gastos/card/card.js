/**
 * Card component
 */
 import { LightningElement, api } from "lwc";

 export default class Card extends LightningElement {

     @api data;

     show = false;

    handleClick(){
        this.show === false ? this.show = true : this.show = false
    }

    get total() {
        return this.data.total || ''
    }

    get expenses() {
        return this.data.april || {};
    }

    get key() {
        return Math.random()
    }

    get entries() {
        const entriesArr = []
        for(let key in this.expenses){
            entriesArr.push({category: key, quantity: this.expenses[key]})
        }
        return entriesArr

    }

 }