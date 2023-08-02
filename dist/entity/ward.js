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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wards = void 0;
const typeorm_1 = require("typeorm");
const district_1 = require("./district");
const bill_1 = require("./bill");
let Wards = exports.Wards = class Wards {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Wards.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wards.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wards.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => district_1.District, (district) => district.wards),
    __metadata("design:type", district_1.District)
], Wards.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bill_1.Bill, (bill) => bill.wards),
    __metadata("design:type", Array)
], Wards.prototype, "bill", void 0);
exports.Wards = Wards = __decorate([
    (0, typeorm_1.Entity)()
], Wards);
//# sourceMappingURL=ward.js.map