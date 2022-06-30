// @ts-nocheck
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
dayjs.extend(advancedFormat);

export const parties = ['Joni', 'Cory'];
export const city = 'Apple River, IL';
export const weddingDay = dayjs('2023-10-08');
export const rsvpCutoffDate = dayjs('2023-08-08');

export let formatDate = function (date, format) {
    return date.format(format);
};

export const meals = [
    "N.Y. Strip",
    "Stuffed Chicken Caprese",
    "Atlantic Salmon",
    "Vegetarian",
];

export const guestMealsInitial = [
    { name: null, meal: null },
    { name: null, meal: null },
    { name: null, meal: null },
    { name: null, meal: null },
    { name: null, meal: null },
    { name: null, meal: null },
];

export const rsvpUrl =
"https://script.google.com/macros/s/AKfycbzShgnqLPkKfJ-TCxgthCq2k-96J3ADIJcFQYoaIHaSwNRxgVnhEu1MHBHdjI8Xegqy/exec";

export let lodging = [
    {
        id: "eagle-ridge",
        name: "Eagle Ridge Resort & Spa",
        href: "https://goo.gl/maps/ccoYPiaPZhHKDmEU6",
        phone: "815-777-5000",
        web: "https://www.eagleridge.com/",
        street: "444 Eagle Ridge Dr",
        cityStateZip: "Galena, IL 61036",
        refName: "Meeder/Moon Wedding",
        until: "August 1, 2023"
    },
    {
        id: "best-western",
        name: "Best Western Galena Inn & Suites",
        href: "https://g.page/BWGalena?share",
        phone: "815-777-2577",
        web: "https://www.bestwestern.com/en_US/book/hotels-in-galena/best-western-galena-inn-suites/propertyCode.14119.html",
        street: "9923 W US Route 20",
        cityStateZip: "Galena, IL 61036",
        refName: "Joni/Cory Wedding",
        until: "September 15, 2023"
    }
];
