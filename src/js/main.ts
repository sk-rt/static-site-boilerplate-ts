'use strict';

import '../scss/style.scss';
document.addEventListener(
    'DOMContentLoaded',
    () => {
        main('hello');
    },
    false
);

const main = (message: string): void => {
    console.log(message);
};
