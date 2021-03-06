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
const score_1 = require('../models/score');
const dynamic_repository_1 = require('nodedata/core/dynamic/dynamic-repository');
const Mongoose = require("mongoose");
let scoreRepository = class scoreRepository extends dynamic_repository_1.DynamicRepository {
    // @inject(ScoreService)
    // private scoreService: ScoreService.ScoreService
    // postCreate(params: EntityActionParam): Q.Promise<any> {
    //     let input_score: score = <score>(params.newPersistentEntity);
    //     return this.scoreService.reporting(input_score);  
    // }
    // postUpdate(params: EntityActionParam): Q.Promise<any> {
    //     let input_score: score = <score>(params.newPersistentEntity);
    //     return this.scoreService.reporting(input_score);
    // }
    bulkPost(objArr) {
        objArr.forEach((obj) => {
            this.findWhere({ "student": Mongoose.Types.ObjectId(obj.student), "assessment": Mongoose.Types.ObjectId(obj.assessment) }).then(scores => {
                var score = scores[0];
                if (score) {
                    return this.put(score._id, obj);
                }
                else {
                    return this.post(obj);
                }
            });
        });
        return super.bulkPost([]);
    }
};
scoreRepository = __decorate([
    decorators_1.repository({ path: 'score', model: score_1.score }), 
    __metadata('design:paramtypes', [])
], scoreRepository);
exports.scoreRepository = scoreRepository;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = scoreRepository;

//# sourceMappingURL=scoreRepository.js.map
