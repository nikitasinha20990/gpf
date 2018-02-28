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
const decorators_1 = require("nodedata/core/decorators");
const course_1 = require('../models/course');
const dynamic_repository_1 = require('nodedata/core/dynamic/dynamic-repository');
let CourseRepository = class CourseRepository extends dynamic_repository_1.DynamicRepository {
};
CourseRepository = __decorate([
    decorators_1.repository({ path: 'course', model: course_1.course }), 
    __metadata('design:paramtypes', [])
], CourseRepository);
exports.CourseRepository = CourseRepository;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CourseRepository;

//# sourceMappingURL=courseRepository.js.map
