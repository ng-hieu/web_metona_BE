import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
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
    // entities: ["dist/src/model/*.js"]
});
=======
    entities: [__dirname + '/entity/*.{js,ts}'],
})
>>>>>>> ab27217ba34f0a06fea9fe05f6832fa8aa4c7770
