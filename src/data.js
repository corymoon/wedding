// @ts-nocheck
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
dayjs.extend(advancedFormat);

export const parties = ['Joni', 'Cory'];
export const city = 'Apple River, IL';
export const weddingDay = dayjs('2023-10-08');

export let formatDate = function (date, format) {
    return date.format(format);
};
