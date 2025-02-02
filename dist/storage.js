"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormStorage = void 0;
class FormStorage {
    constructor() {
        this.FORMS_KEY = 'forms';
        this.RESPONSES_KEY = 'form_responses';
    }
    getForms() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = localStorage.getItem(this.FORMS_KEY);
            return data ? JSON.parse(data) : [];
        });
    }
    saveForm(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const forms = yield this.getForms();
            const existingIndex = forms.findIndex(f => f.id === form.id);
            if (existingIndex !== -1) {
                forms[existingIndex] = Object.assign(Object.assign({}, form), { updatedAt: new Date().toISOString() });
            }
            else {
                forms.push(Object.assign(Object.assign({}, form), { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }));
            }
            localStorage.setItem(this.FORMS_KEY, JSON.stringify(forms));
        });
    }
    deleteForm(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const forms = yield this.getForms();
            const updatedForms = forms.filter(form => form.id !== id);
            localStorage.setItem(this.FORMS_KEY, JSON.stringify(updatedForms));
            yield this.deleteFormResponses(id);
        });
    }
    getFormResponses(formId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = localStorage.getItem(this.RESPONSES_KEY);
            const allResponses = data ? JSON.parse(data) : {};
            return allResponses[formId] || [];
        });
    }
    saveFormResponse(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = localStorage.getItem(this.RESPONSES_KEY);
            const allResponses = data ? JSON.parse(data) : {};
            if (!allResponses[response.formId]) {
                allResponses[response.formId] = [];
            }
            allResponses[response.formId].push(Object.assign(Object.assign({}, response), { submittedAt: new Date().toISOString() }));
            localStorage.setItem(this.RESPONSES_KEY, JSON.stringify(allResponses));
        });
    }
    deleteFormResponses(formId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = localStorage.getItem(this.RESPONSES_KEY);
            const allResponses = data ? JSON.parse(data) : {};
            delete allResponses[formId];
            localStorage.setItem(this.RESPONSES_KEY, JSON.stringify(allResponses));
        });
    }
}
exports.FormStorage = FormStorage;
