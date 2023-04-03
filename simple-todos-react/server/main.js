import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";
import { TextsCollection } from "../imports/api/TextsCollection";

import comoAyudamosData from "../imports/data/comoAyudamos.data.json";
import destacamosData from "../imports/data/destacamos.data.json";
import jumbotronData from "../imports/data/jumbotron.data.json";

import { COMPONENTE } from "../imports/ui/utils/";
import express from "express";

const app = express();
const BASE_PATH = "/api/textos";

const insertText = ({ ...args }) =>
  TextsCollection.insert({
    ...args,
  });

const STATUS_CODE = {
  OK: 200,
};

Meteor.startup(() => {
  let filters = { component: COMPONENTE.COMO_AYUDAMOS };
  if (TextsCollection.find(filters).count() === 0) {
    comoAyudamosData.forEach(insertText);
  }

  filters = { component: COMPONENTE.DESTACAMOS };
  if (TextsCollection.find(filters).count() === 0) {
    destacamosData.forEach(insertText);
  }

  filters = { component: COMPONENTE.JUMBOTRON };
  if (TextsCollection.find(filters).count() === 0) {
    jumbotronData.forEach(insertText);
  }
});

app.get(`${BASE_PATH}`, async (req, res) => {
  const results = await TextsCollection.find({}).fetch();
  res.status(STATUS_CODE.OK).json(results);
});

app.get(`${BASE_PATH}/:lang`, async (req, res) => {
  const results = await TextsCollection.find({ lang: req.params.lang }).fetch();
  res.status(STATUS_CODE.OK).json(results);
});

app.get(`${BASE_PATH}/:lang/:component`, async (req, res) => {
  const results = await TextsCollection.findOne({
    lang: req.params.lang,
    component: req.params.component,
  });
  res.status(STATUS_CODE.OK).json(results);
});

app.put(`${BASE_PATH}/:lang/:component`, async (req, res) => {
  const collection = await TextsCollection.findOne({
    lang: req.params.lang,
    component: req.params.component,
  });

  const body = req.body;
  const newCollection = {
    ...collection,
    ...body,
  };

  await TextsCollection.update(collection._id, newCollection);
  res
    .status(STATUS_CODE.OK)
    .json({ status: STATUS_CODE.OK, mensaje: "Registro actualizado." });
});

WebApp.connectHandlers.use(app);
