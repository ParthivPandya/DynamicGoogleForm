// src/main.ts

import { FormBuilder } from './components/form-builder';

document.addEventListener('DOMContentLoaded', () => {
    const formBuilder = new FormBuilder('form-container');
    formBuilder.initialize();
});
