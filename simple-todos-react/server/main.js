import { Meteor } from 'meteor/meteor';
import { TextsCollection } from '../imports/api/TextsCollection';

const insertText = ({ lang = 'es', component, id, text }) =>
  TextsCollection.insert({
    lang,
    component,
    id,
    text,
  });

Meteor.startup(() => {
  if (TextsCollection.find().count() === 0) {
    [
      {
        component: 'how-we-help',
        id: 'header',
        text: '¿Cómo te ayudamos? Test',
      },
      {
        component: 'how-we-help',
        id: 'title',
        text: 'Impulsamos tu empresa a través de nuestra tecnología financiera Test',
      },
      {
        component: 'how-we-help',

        id: 'card1.title',
        text: 'Conciliación Bancaria Test',
      },
      {
        component: 'how-we-help',
        id: 'card1.p',
        text: 'Cuadra la caja de tu empresa de manera confiable y segura. Nos conectamos automáticamente a bancos, SII y facturadores. Todo desde nuestro Software contable y financiero',
      },
      {
        component: 'how-we-help',
        id: 'card2.title',
        text: 'Gestión y Cobranza Test',
      },
      {
        component: 'how-we-help',
        id: 'card2.p',
        text: 'Reportería instantánea de clientes y proveedores. Con nuestro software contable y de gestión financiera, automatizamos procesos para tener una cobranza más eficiente',
      },
      {
        component: 'how-we-help',
        id: 'card3.title',
        text: 'Conciliación Bancaria Test',
      },
      {
        component: 'how-we-help',
        id: 'card3.p',
        text: 'Cuadra la caja de tu empresa de manera confiable y segura. Nos conectamos automáticamente a bancos, SII y facturadores. Todo desde nuestro Software contable y financiero',
      },
    ].forEach(insertText);
  }
});

Meteor.startup(async () => {});
