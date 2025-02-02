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
exports.FormBuilder = void 0;
// form-builder.ts
const storage_1 = require("./storage");
const types_1 = require("./types");
class FormBuilder {
    constructor(containerId) {
        this.currentForm = null;
        this.isPreviewMode = false;
        const container = document.getElementById(containerId);
        if (!container)
            throw new Error('Container element not found');
        this.container = container;
        this.storage = new storage_1.FormStorage();
        this.initialize();
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.renderFormsList();
            this.setupEventListeners();
        });
    }
    setupEventListeners() {
        // New Form Button
        const newFormBtn = document.getElementById('newFormBtn');
        if (newFormBtn) {
            newFormBtn.addEventListener('click', () => this.createNewForm());
        }
        // Global event delegation for dynamic elements
        this.container.addEventListener('click', (e) => {
            const target = e.target;
            if (target.matches('.edit-form-btn')) {
                const formId = target.getAttribute('data-form-id');
                if (formId)
                    this.editForm(formId);
            }
            if (target.matches('.delete-form-btn')) {
                const formId = target.getAttribute('data-form-id');
                if (formId && confirm('Are you sure you want to delete this form?')) {
                    this.deleteForm(formId);
                }
            }
            if (target.matches('.preview-form-btn')) {
                const formId = target.getAttribute('data-form-id');
                if (formId)
                    this.previewForm(formId);
            }
        });
    }
    renderFormsList() {
        return __awaiter(this, void 0, void 0, function* () {
            const forms = yield this.storage.getForms();
            this.container.innerHTML = `
            <div class="header">
                <h1>Form Builder</h1>
                <button id="newFormBtn" class="btn primary">Create New Form</button>
            </div>
            <div class="forms-grid">
                ${forms.map(form => this.renderFormCard(form)).join('')}
            </div>
        `;
        });
    }
    renderFormCard(form) {
        return `
            <div class="form-card">
                <h3>${this.escapeHtml(form.title)}</h3>
                <p>${this.escapeHtml(form.description || 'No description')}</p>
                <div class="form-card-actions">
                    <button class="btn edit-form-btn" data-form-id="${form.id}">Edit</button>
                    <button class="btn preview-form-btn" data-form-id="${form.id}">Preview</button>
                    <button class="btn delete-form-btn" data-form-id="${form.id}">Delete</button>
                </div>
            </div>
        `;
    }
    createNewForm() {
        this.currentForm = {
            id: crypto.randomUUID(),
            title: 'Untitled Form',
            description: '',
            fields: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.renderFormEditor();
    }
    renderFormEditor() {
        if (!this.currentForm)
            return;
        this.container.innerHTML = `
            <div class="form-editor">
                <div class="form-editor-header">
                    <input type="text" 
                           class="form-title" 
                           value="${this.escapeHtml(this.currentForm.title)}"
                           placeholder="Form Title">
                    <textarea 
                        class="form-description"
                        placeholder="Form Description">${this.escapeHtml(this.currentForm.description)}</textarea>
                </div>
                <div class="form-fields">
                    ${this.currentForm.fields.map((field) => this.renderFormField(field, false)).join('')}
                </div>
                <div class="form-actions">
                    <button class="btn add-field-btn">Add Field</button>
                    <button class="btn save-form-btn">Save Form</button>
                    <button class="btn cancel-btn">Cancel</button>
                </div>
            </div>
        `;
        this.setupFormEditorListeners();
    }
    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    addField(type) {
        if (!this.currentForm)
            return;
        // Create a new field with default values based on the field type
        const newField = {
            id: crypto.randomUUID().toString(),
            label: 'New Field', // Default label, you could customize this
            type: type,
            required: false, // Default "required" status
            options: type === types_1.FormFieldType.RADIO || type === types_1.FormFieldType.CHECKBOX
                ? [{ id: crypto.randomUUID().toString(), value: '', label: 'Option 1' }] // Default option for radio/checkbox
                : [],
            order: 0
        };
        // Add the new field to the current form
        this.currentForm.fields.push(newField);
        // Re-render the form editor to reflect the new field
        this.renderFormEditor();
    }
    editForm(formId) {
        return __awaiter(this, void 0, void 0, function* () {
            const forms = yield this.storage.getForms();
            const form = forms.find(f => f.id === formId);
            if (form) {
                this.currentForm = form;
                this.renderFormEditor();
            }
        });
    }
    deleteForm(formId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storage.deleteForm(formId);
            yield this.renderFormsList();
        });
    }
    previewForm(formId) {
        return __awaiter(this, void 0, void 0, function* () {
            const forms = yield this.storage.getForms();
            const form = forms.find(f => f.id === formId);
            if (!form)
                return;
            this.container.innerHTML = `
            <div class="form-preview">
                <div class="form-preview-header">
                    <h2>${this.escapeHtml(form.title)}</h2>
                    <p>${this.escapeHtml(form.description)}</p>
                </div>
                <form id="previewForm">
                    ${form.fields.map(field => this.renderFormField(field, true)).join('')}
                    <div class="form-actions">
                        <button type="submit" class="btn primary">Submit</button>
                        <button type="button" class="btn" id="backToList">Back</button>
                    </div>
                </form>
            </div>
        `;
            const previewForm = document.getElementById('previewForm');
            const backBtn = document.getElementById('backToList');
            if (previewForm) {
                previewForm.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
                    e.preventDefault();
                    yield this.handleFormSubmission(form);
                }));
            }
            if (backBtn) {
                backBtn.addEventListener('click', () => this.renderFormsList());
            }
        });
    }
    renderFormField(field, isPreview = false) {
        var _a, _b;
        let fieldHtml = `
            <div class="form-field" data-field-id="${field.id}">
                ${isPreview ? '' : '<div class="field-header">'}
        `;
        if (!isPreview) {
            fieldHtml += `
                <input type="text" 
                    class="field-label" 
                    value="${this.escapeHtml(field.label)}"
                    placeholder="Question">
                <div class="field-type">${field.type}</div>
            `;
        }
        else {
            fieldHtml += `<label>${this.escapeHtml(field.label)}</label>`;
        }
        // Field content based on type
        switch (field.type) {
            case types_1.FormFieldType.TEXT:
                fieldHtml += `
                    <input type="text" 
                        class="field-input" 
                        name="${field.id}"
                        ${field.required ? 'required' : ''}
                        ${!isPreview ? 'disabled' : ''}>
                `;
                break;
            case types_1.FormFieldType.RADIO:
                fieldHtml += `<div class="radio-group">`;
                (_a = field.options) === null || _a === void 0 ? void 0 : _a.forEach(option => {
                    fieldHtml += `
                        <div class="radio-option">
                            <input type="radio" 
                                name="${field.id}" 
                                value="${option.value}"
                                ${field.required ? 'required' : ''}
                                ${!isPreview ? 'disabled' : ''}>
                            ${!isPreview ?
                        `<input type="text" class="option-label" value="${this.escapeHtml(option.label)}">` :
                        `<label>${this.escapeHtml(option.label)}</label>`}
                        </div>
                    `;
                });
                fieldHtml += '</div>';
                break;
            case types_1.FormFieldType.CHECKBOX:
                fieldHtml += `<div class="checkbox-group">`;
                (_b = field.options) === null || _b === void 0 ? void 0 : _b.forEach(option => {
                    fieldHtml += `
                        <div class="checkbox-option">
                            <input type="checkbox" 
                                name="${field.id}" 
                                value="${option.value}"
                                ${!isPreview ? 'disabled' : ''}>
                            ${!isPreview ?
                        `<input type="text" class="option-label" value="${this.escapeHtml(option.label)}">` :
                        `<label>${this.escapeHtml(option.label)}</label>`}
                        </div>
                    `;
                });
                fieldHtml += '</div>';
                break;
        }
        if (!isPreview) {
            fieldHtml += `
                <div class="field-actions">
                    <label class="required-toggle">
                        <input type="checkbox" 
                            ${field.required ? 'checked' : ''} 
                            class="required-checkbox">
                        Required
                    </label>
                    <button class="btn delete-field-btn">Delete</button>
                </div>
            `;
        }
        fieldHtml += `</div>`;
        return fieldHtml;
    }
    setupFormEditorListeners() {
        // Title and description listeners
        const titleInput = this.container.querySelector('.form-title');
        const descInput = this.container.querySelector('.form-description');
        if (titleInput && this.currentForm) {
            titleInput.addEventListener('change', (e) => {
                if (this.currentForm) {
                    this.currentForm.title = e.target.value;
                }
            });
        }
        if (descInput && this.currentForm) {
            descInput.addEventListener('change', (e) => {
                if (this.currentForm) {
                    this.currentForm.description = e.target.value;
                }
            });
        }
        // Add Field button
        const addFieldBtn = this.container.querySelector('.add-field-btn');
        if (addFieldBtn) {
            addFieldBtn.addEventListener('click', () => {
                this.showAddFieldDialog();
            });
        }
        // Save Form button
        const saveFormBtn = this.container.querySelector('.save-form-btn');
        if (saveFormBtn) {
            saveFormBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                if (this.currentForm) {
                    yield this.storage.saveForm(this.currentForm);
                    yield this.renderFormsList();
                }
            }));
        }
        // Cancel button
        const cancelBtn = this.container.querySelector('.cancel-btn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                this.renderFormsList();
            });
        }
        // Field-specific event delegation
        this.container.addEventListener('click', (e) => {
            const target = e.target;
            if (target.matches('.delete-field-btn')) {
                const fieldElement = target.closest('.form-field');
                if (fieldElement && this.currentForm) {
                    const fieldId = fieldElement.getAttribute('data-field-id');
                    if (fieldId) {
                        this.currentForm.fields = this.currentForm.fields.filter(f => f.id !== fieldId);
                        this.renderFormEditor();
                    }
                }
            }
        });
    }
    showAddFieldDialog() {
        const dialog = document.createElement('div');
        dialog.className = 'field-type-dialog';
        dialog.innerHTML = `
            <div class="dialog-content">
                <h3>Select Field Type</h3>
                <button class="btn" data-type="${types_1.FormFieldType.TEXT}">Text Input</button>
                <button class="btn" data-type="${types_1.FormFieldType.RADIO}">Multiple Choice</button>
                <button class="btn" data-type="${types_1.FormFieldType.CHECKBOX}">Checkboxes</button>
                <button class="btn cancel">Cancel</button>
            </div>
        `;
        const handleTypeSelection = (e) => {
            const target = e.target;
            const type = target.getAttribute('data-type');
            if (type && this.currentForm) {
                this.addField(type);
                document.body.removeChild(dialog);
            }
            if (target.classList.contains('cancel')) {
                document.body.removeChild(dialog);
            }
        };
        dialog.addEventListener('click', handleTypeSelection);
        document.body.appendChild(dialog);
    }
    handleFormSubmission(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData(document.getElementById('previewForm'));
            const response = {
                id: crypto.randomUUID(),
                formId: form.id,
                answers: [],
                submittedAt: new Date().toISOString()
            };
            form.fields.forEach(field => {
                if (field.type === types_1.FormFieldType.CHECKBOX) {
                    const values = formData.getAll(field.id);
                    response.answers.push({
                        fieldId: field.id,
                        value: values
                    });
                }
                else {
                    const value = formData.get(field.id);
                    if (value) {
                        response.answers.push({
                            fieldId: field.id,
                            value: value
                        });
                    }
                }
            });
            yield this.storage.saveFormResponse(response);
            alert('Form submitted successfully!');
            yield this.renderFormsList();
        });
    }
}
exports.FormBuilder = FormBuilder;
