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
exports.Pay = void 0;
const bill_1 = require("./bill");
const payment_1 = require("./payment");
const typeorm_1 = require("typeorm");
let Pay = exports.Pay = class Pay {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pay.prototype, "idPay", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bill_1.Bill),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", bill_1.Bill)
], Pay.prototype, "bill", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pay.prototype, "money", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pay.prototype, "timeCurrent", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => payment_1.Payment),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", payment_1.Payment)
], Pay.prototype, "payment", void 0);
exports.Pay = Pay = __decorate([
    (0, typeorm_1.Entity)()
], Pay);
//# sourceMappingURL=pay.js.map