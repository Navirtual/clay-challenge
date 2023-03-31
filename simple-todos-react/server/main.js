import { Meteor } from "meteor/meteor";
import { TextsCollection } from "../imports/api/TextsCollection";

import comoAyudamosData from "./comoAyudamos.data.json";
import destacamosData from "./destacamos.data.json";

const insertText = ({ lang, component, texts }) =>
  TextsCollection.insert({
    lang,
    component,
    texts,
  });

Meteor.startup(() => {
  let filters = { component: "como-ayudamos" };
  if (TextsCollection.find(filters).count() === 0) {
    comoAyudamosData.forEach(insertText);
  }

  filters = { component: "destacamos" };
  if (TextsCollection.find(filters).count() === 0) {
    destacamosData.forEach(insertText);
  }
});

Meteor.startup(async () => {});
