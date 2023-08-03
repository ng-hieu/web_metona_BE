"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "website_metona",
    synchronize: true,
    logging: false,
<<<<<<< HEAD
    entities: [__dirname + "/entity/*.{js, ts}"],
=======
    entities: [__dirname + '/entity/*.{js,ts}'],
>>>>>>> ab27217ba34f0a06fea9fe05f6832fa8aa4c7770
});
//# sourceMappingURL=data-source.js.map