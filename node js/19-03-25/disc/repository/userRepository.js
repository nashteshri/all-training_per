"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const data_source_1 = require("../config/data-source");
const user_1 = require("../entities/user");
exports.userRepository = data_source_1.AppDataSource.getRepository(user_1.user);
