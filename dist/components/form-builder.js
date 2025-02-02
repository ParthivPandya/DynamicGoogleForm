var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// form-builder.ts
import { FormStorage } from './storage';
import { FormFieldType } from '../types/form-types';
var FormBuilder = /** @class */ (function () {
    function FormBuilder(containerId) {
        this.currentForm = null;
        this.isPreviewMode = false;
        var container = document.getElementById(containerId);
        if (!container)
            throw new Error('Container element not found');
        this.container = container;
        this.storage = new FormStorage();
        this.initialize();
    }
    FormBuilder.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.renderFormsList()];
                    case 1:
                        _a.sent();
                        this.setupEventListeners();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormBuilder.prototype.setupEventListeners = function () {
        var _this = this;
        // New Form Button
        var newFormBtn = document.getElementById('newFormBtn');
        if (newFormBtn) {
            newFormBtn.addEventListener('click', function () { return _this.createNewForm(); });
        }
        // Global event delegation for dynamic elements
        this.container.addEventListener('click', function (e) {
            var target = e.target;
            if (target.matches('.edit-form-btn')) {
                var formId = target.getAttribute('data-form-id');
                if (formId)
                    _this.editForm(formId);
            }
            if (target.matches('.delete-form-btn')) {
                var formId = target.getAttribute('data-form-id');
                if (formId && confirm('Are you sure you want to delete this form?')) {
                    _this.deleteForm(formId);
                }
            }
            if (target.matches('.preview-form-btn')) {
                var formId = target.getAttribute('data-form-id');
                if (formId)
                    _this.previewForm(formId);
            }
        });
    };
    FormBuilder.prototype.renderFormsList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var forms;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getForms()];
                    case 1:
                        forms = _a.sent();
                        this.container.innerHTML = "\n            <div class=\"header\">\n                <h1>Form Builder</h1>\n                <button id=\"newFormBtn\" class=\"btn primary\">Create New Form</button>\n            </div>\n            <div class=\"forms-grid\">\n                ".concat(forms.map(function (form) { return _this.renderFormCard(form); }).join(''), "\n            </div>\n        ");
                        return [2 /*return*/];
                }
            });
        });
    };
    FormBuilder.prototype.renderFormCard = function (form) {
        return "\n            <div class=\"form-card\">\n                <h3>".concat(this.escapeHtml(form.title), "</h3>\n                <p>").concat(this.escapeHtml(form.description || 'No description'), "</p>\n                <div class=\"form-card-actions\">\n                    <button class=\"btn edit-form-btn\" data-form-id=\"").concat(form.id, "\">Edit</button>\n                    <button class=\"btn preview-form-btn\" data-form-id=\"").concat(form.id, "\">Preview</button>\n                    <button class=\"btn delete-form-btn\" data-form-id=\"").concat(form.id, "\">Delete</button>\n                </div>\n            </div>\n        ");
    };
    FormBuilder.prototype.createNewForm = function () {
        this.currentForm = {
            id: crypto.randomUUID(),
            title: 'Untitled Form',
            description: '',
            fields: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.renderFormEditor();
    };
    FormBuilder.prototype.renderFormEditor = function () {
        var _this = this;
        if (!this.currentForm)
            return;
        this.container.innerHTML = "\n            <div class=\"form-editor\">\n                <div class=\"form-editor-header\">\n                    <input type=\"text\" \n                           class=\"form-title\" \n                           value=\"".concat(this.escapeHtml(this.currentForm.title), "\"\n                           placeholder=\"Form Title\">\n                    <textarea \n                        class=\"form-description\"\n                        placeholder=\"Form Description\">").concat(this.escapeHtml(this.currentForm.description), "</textarea>\n                </div>\n                <div class=\"form-fields\">\n                    ").concat(this.currentForm.fields.map(function (field) { return _this.renderFormField(field, false); }).join(''), "\n                </div>\n                <div class=\"form-actions\">\n                    <button class=\"btn add-field-btn\">Add Field</button>\n                    <button class=\"btn save-form-btn\">Save Form</button>\n                    <button class=\"btn cancel-btn\">Cancel</button>\n                </div>\n            </div>\n        ");
        this.setupFormEditorListeners();
    };
    FormBuilder.prototype.escapeHtml = function (unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };
    FormBuilder.prototype.addField = function (type) {
        if (!this.currentForm)
            return;
        // Create a new field with default values based on the field type
        var newField = {
            id: crypto.randomUUID().toString(),
            label: 'New Field', // Default label, you could customize this
            type: type,
            required: false, // Default "required" status
            options: type === FormFieldType.RADIO || type === FormFieldType.CHECKBOX
                ? [{ id: crypto.randomUUID().toString(), value: '', label: 'Option 1' }] // Default option for radio/checkbox
                : [],
            order: 0
        };
        // Add the new field to the current form
        this.currentForm.fields.push(newField);
        // Re-render the form editor to reflect the new field
        this.renderFormEditor();
    };
    FormBuilder.prototype.editForm = function (formId) {
        return __awaiter(this, void 0, void 0, function () {
            var forms, form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getForms()];
                    case 1:
                        forms = _a.sent();
                        form = forms.find(function (f) { return f.id === formId; });
                        if (form) {
                            this.currentForm = form;
                            this.renderFormEditor();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FormBuilder.prototype.deleteForm = function (formId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.deleteForm(formId)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.renderFormsList()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormBuilder.prototype.previewForm = function (formId) {
        return __awaiter(this, void 0, void 0, function () {
            var forms, form, previewForm, backBtn;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getForms()];
                    case 1:
                        forms = _a.sent();
                        form = forms.find(function (f) { return f.id === formId; });
                        if (!form)
                            return [2 /*return*/];
                        this.container.innerHTML = "\n            <div class=\"form-preview\">\n                <div class=\"form-preview-header\">\n                    <h2>".concat(this.escapeHtml(form.title), "</h2>\n                    <p>").concat(this.escapeHtml(form.description), "</p>\n                </div>\n                <form id=\"previewForm\">\n                    ").concat(form.fields.map(function (field) { return _this.renderFormField(field, true); }).join(''), "\n                    <div class=\"form-actions\">\n                        <button type=\"submit\" class=\"btn primary\">Submit</button>\n                        <button type=\"button\" class=\"btn\" id=\"backToList\">Back</button>\n                    </div>\n                </form>\n            </div>\n        ");
                        previewForm = document.getElementById('previewForm');
                        backBtn = document.getElementById('backToList');
                        if (previewForm) {
                            previewForm.addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            e.preventDefault();
                                            return [4 /*yield*/, this.handleFormSubmission(form)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        if (backBtn) {
                            backBtn.addEventListener('click', function () { return _this.renderFormsList(); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FormBuilder.prototype.renderFormField = function (field, isPreview) {
        var _this = this;
        var _a, _b;
        if (isPreview === void 0) { isPreview = false; }
        var fieldHtml = "\n            <div class=\"form-field\" data-field-id=\"".concat(field.id, "\">\n                ").concat(isPreview ? '' : '<div class="field-header">', "\n        ");
        if (!isPreview) {
            fieldHtml += "\n                <input type=\"text\" \n                    class=\"field-label\" \n                    value=\"".concat(this.escapeHtml(field.label), "\"\n                    placeholder=\"Question\">\n                <div class=\"field-type\">").concat(field.type, "</div>\n            ");
        }
        else {
            fieldHtml += "<label>".concat(this.escapeHtml(field.label), "</label>");
        }
        // Field content based on type
        switch (field.type) {
            case FormFieldType.TEXT:
                fieldHtml += "\n                    <input type=\"text\" \n                        class=\"field-input\" \n                        name=\"".concat(field.id, "\"\n                        ").concat(field.required ? 'required' : '', "\n                        ").concat(!isPreview ? 'disabled' : '', ">\n                ");
                break;
            case FormFieldType.RADIO:
                fieldHtml += "<div class=\"radio-group\">";
                (_a = field.options) === null || _a === void 0 ? void 0 : _a.forEach(function (option) {
                    fieldHtml += "\n                        <div class=\"radio-option\">\n                            <input type=\"radio\" \n                                name=\"".concat(field.id, "\" \n                                value=\"").concat(option.value, "\"\n                                ").concat(field.required ? 'required' : '', "\n                                ").concat(!isPreview ? 'disabled' : '', ">\n                            ").concat(!isPreview ?
                        "<input type=\"text\" class=\"option-label\" value=\"".concat(_this.escapeHtml(option.label), "\">") :
                        "<label>".concat(_this.escapeHtml(option.label), "</label>"), "\n                        </div>\n                    ");
                });
                fieldHtml += '</div>';
                break;
            case FormFieldType.CHECKBOX:
                fieldHtml += "<div class=\"checkbox-group\">";
                (_b = field.options) === null || _b === void 0 ? void 0 : _b.forEach(function (option) {
                    fieldHtml += "\n                        <div class=\"checkbox-option\">\n                            <input type=\"checkbox\" \n                                name=\"".concat(field.id, "\" \n                                value=\"").concat(option.value, "\"\n                                ").concat(!isPreview ? 'disabled' : '', ">\n                            ").concat(!isPreview ?
                        "<input type=\"text\" class=\"option-label\" value=\"".concat(_this.escapeHtml(option.label), "\">") :
                        "<label>".concat(_this.escapeHtml(option.label), "</label>"), "\n                        </div>\n                    ");
                });
                fieldHtml += '</div>';
                break;
        }
        if (!isPreview) {
            fieldHtml += "\n                <div class=\"field-actions\">\n                    <label class=\"required-toggle\">\n                        <input type=\"checkbox\" \n                            ".concat(field.required ? 'checked' : '', " \n                            class=\"required-checkbox\">\n                        Required\n                    </label>\n                    <button class=\"btn delete-field-btn\">Delete</button>\n                </div>\n            ");
        }
        fieldHtml += "</div>";
        return fieldHtml;
    };
    FormBuilder.prototype.setupFormEditorListeners = function () {
        var _this = this;
        // Title and description listeners
        var titleInput = this.container.querySelector('.form-title');
        var descInput = this.container.querySelector('.form-description');
        if (titleInput && this.currentForm) {
            titleInput.addEventListener('change', function (e) {
                if (_this.currentForm) {
                    _this.currentForm.title = e.target.value;
                }
            });
        }
        if (descInput && this.currentForm) {
            descInput.addEventListener('change', function (e) {
                if (_this.currentForm) {
                    _this.currentForm.description = e.target.value;
                }
            });
        }
        // Add Field button
        var addFieldBtn = this.container.querySelector('.add-field-btn');
        if (addFieldBtn) {
            addFieldBtn.addEventListener('click', function () {
                _this.showAddFieldDialog();
            });
        }
        // Save Form button
        var saveFormBtn = this.container.querySelector('.save-form-btn');
        if (saveFormBtn) {
            saveFormBtn.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.currentForm) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.storage.saveForm(this.currentForm)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.renderFormsList()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        }
        // Cancel button
        var cancelBtn = this.container.querySelector('.cancel-btn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', function () {
                _this.renderFormsList();
            });
        }
        // Field-specific event delegation
        this.container.addEventListener('click', function (e) {
            var target = e.target;
            if (target.matches('.delete-field-btn')) {
                var fieldElement = target.closest('.form-field');
                if (fieldElement && _this.currentForm) {
                    var fieldId_1 = fieldElement.getAttribute('data-field-id');
                    if (fieldId_1) {
                        _this.currentForm.fields = _this.currentForm.fields.filter(function (f) { return f.id !== fieldId_1; });
                        _this.renderFormEditor();
                    }
                }
            }
        });
    };
    FormBuilder.prototype.showAddFieldDialog = function () {
        var _this = this;
        var dialog = document.createElement('div');
        dialog.className = 'field-type-dialog';
        dialog.innerHTML = "\n            <div class=\"dialog-content\">\n                <h3>Select Field Type</h3>\n                <button class=\"btn\" data-type=\"".concat(FormFieldType.TEXT, "\">Text Input</button>\n                <button class=\"btn\" data-type=\"").concat(FormFieldType.RADIO, "\">Multiple Choice</button>\n                <button class=\"btn\" data-type=\"").concat(FormFieldType.CHECKBOX, "\">Checkboxes</button>\n                <button class=\"btn cancel\">Cancel</button>\n            </div>\n        ");
        var handleTypeSelection = function (e) {
            var target = e.target;
            var type = target.getAttribute('data-type');
            if (type && _this.currentForm) {
                _this.addField(type);
                document.body.removeChild(dialog);
            }
            if (target.classList.contains('cancel')) {
                document.body.removeChild(dialog);
            }
        };
        dialog.addEventListener('click', handleTypeSelection);
        document.body.appendChild(dialog);
    };
    FormBuilder.prototype.handleFormSubmission = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData(document.getElementById('previewForm'));
                        response = {
                            id: crypto.randomUUID(),
                            formId: form.id,
                            answers: [],
                            submittedAt: new Date().toISOString()
                        };
                        form.fields.forEach(function (field) {
                            if (field.type === FormFieldType.CHECKBOX) {
                                var values = formData.getAll(field.id);
                                response.answers.push({
                                    fieldId: field.id,
                                    value: values
                                });
                            }
                            else {
                                var value = formData.get(field.id);
                                if (value) {
                                    response.answers.push({
                                        fieldId: field.id,
                                        value: value
                                    });
                                }
                            }
                        });
                        return [4 /*yield*/, this.storage.saveFormResponse(response)];
                    case 1:
                        _a.sent();
                        alert('Form submitted successfully!');
                        return [4 /*yield*/, this.renderFormsList()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FormBuilder;
}());
export { FormBuilder };
