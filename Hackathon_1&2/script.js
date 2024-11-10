"use strict";
let exper_section = document.getElementById('exper');
let exper_btn = document.getElementById('exper_btn');
exper_btn?.addEventListener('click', () => {
    exper_section.classList.toggle('hide');
});
