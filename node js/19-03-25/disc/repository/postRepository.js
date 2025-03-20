"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRepository = void 0;
const data_source_1 = require("../config/data-source");
const post_1 = require("../entities/post");
exports.postRepository = data_source_1.AppDataSource.getRepository(post_1.post);
