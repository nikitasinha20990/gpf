"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const decorators_1 = require('nodedata/mongoose/decorators');
const _1 = require('nodedata/mongoose/enums/');
const baseModel_1 = require('./baseModel');
let student = class student extends baseModel_1.baseModel {
};
__decorate([
    decorators_1.field(), 
    __metadata('design:type', String)
], student.prototype, "roll_no", void 0);
__decorate([
    decorators_1.field(), 
    __metadata('design:type', String)
], student.prototype, "name", void 0);
__decorate([
    decorators_1.field(), 
    __metadata('design:type', String)
], student.prototype, "father_name", void 0);
__decorate([
    decorators_1.field(), 
    __metadata('design:type', String)
], student.prototype, "sex", void 0);
__decorate([
    decorators_1.field(), 
    __metadata('design:type', String)
], student.prototype, "dob", void 0);
__decorate([
    decorators_1.field(), 
    __metadata('design:type', String)
], student.prototype, "unique_id", void 0);
__decorate([
    decorators_1.field(), 
    __metadata('design:type', String)
], student.prototype, "join_date", void 0);
__decorate([
    decorators_1.field(), 
    __metadata('design:type', String)
], student.prototype, "distinction", void 0);
student = __decorate([
    decorators_1.document({ name: 'student', strict: _1.Strict.false }), 
    __metadata('design:paramtypes', [])
], student);
exports.student = student;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = student;

//# sourceMappingURL=student.js.map
