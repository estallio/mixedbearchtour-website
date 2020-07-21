import S from '@sanity/desk-tool/structure-builder';
import anmelden from './schemas/anmelden'
import kontakt from './schemas/kontakt'
import partner from './schemas/partner'
import preise from './schemas/preise'
import regeln from './schemas/regeln'
import startseite from './schemas/startseite'
import impressum from './schemas/impressum'
import datenschutz from './schemas/datenschutz'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const pageItemsIds = [
  'anmelden',
  'kontakt',
  'preise',
  'regeln',
  'startseite',
  'impressum',
  'datenschutz',
];

const pageItems = pageItemsIds.map(item => {
  return S.listItem()
  .title(capitalizeFirstLetter(item))
  .child(
    S.editor()
    .title(capitalizeFirstLetter(item))
    .id(item)
    .schemaType(item)
    .documentId(item)
  );
});

export default () =>
  S.list()
  .title('Inhalte')
  .items([
    ...pageItems,
    ...S.documentTypeListItems().filter(listItem => !pageItemsIds.includes(listItem.getId())
    )
  ]);
