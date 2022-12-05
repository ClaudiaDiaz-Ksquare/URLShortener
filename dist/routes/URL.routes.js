"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectShortUrl = exports.URLRouter = void 0;
const express_1 = require("express");
const URL_repo_1 = require("../repository/URL.repo");
const uuid_1 = require("uuid");
exports.URLRouter = (0, express_1.Router)();
exports.redirectShortUrl = (0, express_1.Router)();
exports.URLRouter.post('/new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ogUrl = req.body.ogUrl;
    if (!ogUrl) {
        res.status(400);
        return res.send({
            message: 'No original url was provided'
        });
    }
    // Si tengo mi url
    // Debo crear un nuevo URL y guardarlo a la DB
    // pero primero creo el id unico
    const newId = (0, uuid_1.v4)().split('-')[0];
    const newURL = yield (0, URL_repo_1.createURL)(newId, ogUrl);
    res.status(201);
    res.json({
        newURL: 'http://' + process.env.DB_HOSTNAME + ':3000/url/' + newURL,
    });
}));
exports.URLRouter.get('/:shorturl', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shorturl = req.params['shorturl'];
    if (!shorturl) {
        res.status(400);
        res.send({
            error: 'No ID provided'
        });
    }
    const Url = yield (0, URL_repo_1.fetchUrlById)(shorturl);
    if (!Url) {
        res.status(400);
        return res.send({
            error: 'No URL with this ID was found'
        });
    }
    return res.redirect(Url);
}));
