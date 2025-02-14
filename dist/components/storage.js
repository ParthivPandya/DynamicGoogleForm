var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var FormStorage = /** @class */ (function () {
    function FormStorage() {
        this.FORMS_KEY = 'forms';
        this.RESPONSES_KEY = 'form_responses';
    }
    FormStorage.prototype.getForms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = localStorage.getItem(this.FORMS_KEY);
                return [2 /*return*/, data ? JSON.parse(data) : []];
            });
        });
    };
    FormStorage.prototype.saveForm = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var forms, existingIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getForms()];
                    case 1:
                        forms = _a.sent();
                        existingIndex = forms.findIndex(function (f) { return f.id === form.id; });
                        if (existingIndex !== -1) {
                            forms[existingIndex] = __assign(__assign({}, form), { updatedAt: new Date().toISOString() });
                        }
                        else {
                            forms.push(__assign(__assign({}, form), { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }));
                        }
                        localStorage.setItem(this.FORMS_KEY, JSON.stringify(forms));
                        return [2 /*return*/];
                }
            });
        });
    };
    FormStorage.prototype.deleteForm = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var forms, updatedForms;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getForms()];
                    case 1:
                        forms = _a.sent();
                        updatedForms = forms.filter(function (form) { return form.id !== id; });
                        localStorage.setItem(this.FORMS_KEY, JSON.stringify(updatedForms));
                        return [4 /*yield*/, this.deleteFormResponses(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormStorage.prototype.getFormResponses = function (formId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, allResponses;
            return __generator(this, function (_a) {
                data = localStorage.getItem(this.RESPONSES_KEY);
                allResponses = data ? JSON.parse(data) : {};
                return [2 /*return*/, allResponses[formId] || []];
            });
        });
    };
    FormStorage.prototype.saveFormResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var data, allResponses;
            return __generator(this, function (_a) {
                data = localStorage.getItem(this.RESPONSES_KEY);
                allResponses = data ? JSON.parse(data) : {};
                if (!allResponses[response.formId]) {
                    allResponses[response.formId] = [];
                }
                allResponses[response.formId].push(__assign(__assign({}, response), { submittedAt: new Date().toISOString() }));
                localStorage.setItem(this.RESPONSES_KEY, JSON.stringify(allResponses));
                return [2 /*return*/];
            });
        });
    };
    FormStorage.prototype.deleteFormResponses = function (formId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, allResponses;
            return __generator(this, function (_a) {
                data = localStorage.getItem(this.RESPONSES_KEY);
                allResponses = data ? JSON.parse(data) : {};
                delete allResponses[formId];
                localStorage.setItem(this.RESPONSES_KEY, JSON.stringify(allResponses));
                return [2 /*return*/];
            });
        });
    };
    return FormStorage;
}());
export { FormStorage };
