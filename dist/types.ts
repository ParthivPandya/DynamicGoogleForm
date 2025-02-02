export enum FormFieldType {
    TEXT = 'text',
    RADIO = 'radio',
    CHECKBOX = 'checkbox'
}

export interface FormField {
    id: string;
    type: FormFieldType;
    label: string;
    order: number;
    required: boolean;
    options?: FormFieldOption[];
}

export interface FormFieldOption {
    id: string;
    label: string;
    value: string;
}

export interface Form {
    id: string;
    title: string;
    description: string;
    fields: FormField[];
    createdAt: string;
    updatedAt: string;
}

export interface FormResponse {
    id: string;
    formId: string;
    answers: {
        fieldId: string;
        value: string | string[];
    }[];
    submittedAt: string;
}