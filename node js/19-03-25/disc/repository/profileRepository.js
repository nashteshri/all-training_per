"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRepository = void 0;
const data_source_1 = require("../config/data-source");
const profile_1 = require("../entities/profile");
exports.profileRepository = data_source_1.AppDataSource.getRepository(profile_1.Profile);
