export class FormStorage {
    private readonly FORMS_KEY = 'forms';
    private readonly RESPONSES_KEY = 'form_responses';

    public async getForms(): Promise<Form[]> {
        const data = localStorage.getItem(this.FORMS_KEY);
        return data ? JSON.parse(data) : [];
    }

    public async saveForm(form: Form): Promise<void> {
        const forms = await this.getForms();
        const existingIndex = forms.findIndex(f => f.id === form.id);

        if (existingIndex !== -1) {
            forms[existingIndex] = {
                ...form,
                updatedAt: new Date().toISOString()
            };
        } else {
            forms.push({
                ...form,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
        }

        localStorage.setItem(this.FORMS_KEY, JSON.stringify(forms));
    }

    public async deleteForm(id: string): Promise<void> {
        const forms = await this.getForms();
        const updatedForms = forms.filter(form => form.id !== id);
        localStorage.setItem(this.FORMS_KEY, JSON.stringify(updatedForms));
        await this.deleteFormResponses(id);
    }

    public async getFormResponses(formId: string): Promise<FormResponse[]> {
        const data = localStorage.getItem(this.RESPONSES_KEY);
        const allResponses = data ? JSON.parse(data) : {};
        return allResponses[formId] || [];
    }

    public async saveFormResponse(response: FormResponse): Promise<void> {
        const data = localStorage.getItem(this.RESPONSES_KEY);
        const allResponses = data ? JSON.parse(data) : {};
        
        if (!allResponses[response.formId]) {
            allResponses[response.formId] = [];
        }
        
        allResponses[response.formId].push({
            ...response,
            submittedAt: new Date().toISOString()
        });
        
        localStorage.setItem(this.RESPONSES_KEY, JSON.stringify(allResponses));
    }

    private async deleteFormResponses(formId: string): Promise<void> {
        const data = localStorage.getItem(this.RESPONSES_KEY);
        const allResponses = data ? JSON.parse(data) : {};
        delete allResponses[formId];
        localStorage.setItem(this.RESPONSES_KEY, JSON.stringify(allResponses));
    }
}