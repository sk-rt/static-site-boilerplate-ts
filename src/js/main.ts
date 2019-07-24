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
    // eslint-disable-next-line no-console
    console.log(message);
};
