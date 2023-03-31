import { Meteor } from "meteor/meteor";
import { TextsCollection } from "../imports/api/TextsCollection";
import comoAyudamosData from "../imports/data/comoAyudamos.data.json";
import destacamosData from "../imports/data/destacamos.data.json";
import {COMPONENTES} from '../imports/ui/utils/'

const insertText = ({  ...args }) =>
  TextsCollection.insert({
    ...args
  });

Meteor.startup(() => {
  let filters = { component: COMPONENTES.COMO_AYUDAMOS };
  if (TextsCollection.find(filters).count() === 0) {
    comoAyudamosData.forEach(insertText);
  }

  filters = { component: COMPONENTES.DESTACAMOS };
  if (TextsCollection.find(filters).count() === 0) {
    destacamosData.forEach(insertText);
  }
});

Meteor.startup(async () => {});