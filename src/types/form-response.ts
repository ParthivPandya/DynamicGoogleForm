export interface FormResponse {
    id: string;
    formId: string;
    answers: {
        fieldId: string;
        value: string | string[];
    }[];
    submittedAt: string;
}