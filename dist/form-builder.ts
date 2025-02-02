// form-builder.ts
import { Form, FormField, FormFieldType, FormStorage } from './types';

export class FormBuilder {
    private container: HTMLElement;
    private storage: FormStorage;
    private currentForm: Form | null = null;
    private isPreviewMode = false;

    constructor(containerId: string) {
        const container = document.getElementById(containerId);
        if (!container) throw new Error('Container element not found');
        
        this.container = container;
        this.storage = new FormStorage();
        this.initialize();
    }

    private async initialize(): Promise<void> {
        await this.renderFormsList();
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        // New Form Button
        const newFormBtn = document.getElementById('newFormBtn');
        if (newFormBtn) {
            newFormBtn.addEventListener('click', () => this.createNewForm());
        }

        // Global event delegation for dynamic elements
        this.container.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            
            if (target.matches('.edit-form-btn')) {
                const formId = target.getAttribute('data-form-id');
                if (formId) this.editForm(formId);
            }
            
            if (target.matches('.delete-form-btn')) {
                const formId = target.getAttribute('data-form-id');
                if (formId && confirm('Are you sure you want to delete this form?')) {
                    this.deleteForm(formId);
                }
            }
            
            if (target.matches('.preview-form-btn')) {
                const formId = target.getAttribute('data-form-id');
                if (formId) this.previewForm(formId);
            }
        });
    }

    private async renderFormsList(): Promise<void> {
        const forms = await this.storage.getForms();
        
        this.container.innerHTML = `
            <div class="header">
                <h1>Form Builder</h1>
                <button id="newFormBtn" class="btn primary">Create New Form</button>
            </div>
            <div class="forms-grid">
                ${forms.map(form => this.renderFormCard(form)).join('')}
            </div>
        `;
    }

    private renderFormCard(form: Form): string {
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

    private createNewForm(): void {
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

    private renderFormEditor(): void {
        if (!this.currentForm) return;

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
                    ${this.currentForm.fields.map(this.renderFormField.bind(this)).join('')}
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

    private escapeHtml(unsafe: string): string {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // ... More methods to be implemented
}