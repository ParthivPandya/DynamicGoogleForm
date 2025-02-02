// src/main.ts
import { FormBuilder } from './components/form-builder';
document.addEventListener('DOMContentLoaded', function () {
    var formBuilder = new FormBuilder('form-container');
    formBuilder.initialize();
});
