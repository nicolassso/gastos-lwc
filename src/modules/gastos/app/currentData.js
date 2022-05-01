import * as DATA from './data/months/may/may';
import * as ENTRIES from './data/months/may/entries.js';
import { currentMonth } from './constants';

export const CURRENT_DATA = DATA;

export const CURRENT_ENTRIES = ENTRIES[`${currentMonth.toUpperCase()}_ENTRIES`];
