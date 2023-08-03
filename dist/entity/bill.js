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
exports.Bill = void 0;
const order_1 = require("./order");
const typeorm_1 = require("typeorm");
const city_1 = require("./city");
const district_1 = require("./district");
const ward_1 = require("./ward");
const user_1 = require("./user");
let Bill = exports.Bill = class Bill {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bill.prototype, "idBill", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bill.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bill.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bill.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Bill.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bill.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bill.prototype, "totalQuantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_1.City, (city) => city.bill),
    __metadata("design:type", city_1.City)
], Bill.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => district_1.District, (district) => district.bill),
    __metadata("design:type", district_1.District)
], Bill.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ward_1.Wards, (wards) => wards.bill),
    __metadata("design:type", ward_1.Wards)
], Bill.prototype, "wards", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (account) => account.bill),
    __metadata("design:type", user_1.User)
], Bill.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_1.Order, (order) => order.bill),
    __metadata("design:type", Array)
], Bill.prototype, "order", void 0);
exports.Bill = Bill = __decorate([
    (0, typeorm_1.Entity)()
], Bill);
//# sourceMappingURL=bill.js.map