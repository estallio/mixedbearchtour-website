import S from '@sanity/desk-tool/structure-builder';
import { AiOutlineHome, AiOutlineContacts, AiOutlineFileProtect } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BiCalendarEvent, BiMedal, BiLogIn } from 'react-icons/bi';
import { GiRuleBook } from 'react-icons/gi';
import { FaHandsHelping } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { GrOrganization } from 'react-icons/gr';

const pageItemsIds = [
  { schemaId: 'startseite',   title: 'Startseite',  pageType: 'single',   icon: AiOutlineHome },
  { schemaId: 'standort',     title: 'Standorte',   pageType: 'multi',    icon: GoLocation },       // uses table ordering
  { schemaId: 'termin',       title: 'Termine',     pageType: 'multi',    icon: BiCalendarEvent, defaultOrdering: [{ field: 'date', direction: 'asc' }] },
  { schemaId: 'regeln',       title: 'Regeln',      pageType: 'single',   icon: GiRuleBook },
  { schemaId: 'preise',       title: 'Preise',      pageType: 'single',   icon: BiMedal },
  { schemaId: 'partners',     title: 'Partner',     pageType: 'single',   icon: FaHandsHelping },   // uses table ordering
  { schemaId: 'kontakt',      title: 'Kontakt',     pageType: 'single',   icon: AiOutlineContacts },
  { schemaId: 'anmelden',     title: 'Anmelden',    pageType: 'single',   icon: BiLogIn },
  { schemaId: 'datenschutz',  title: 'Datenschutz', pageType: 'single',   icon: AiOutlineFileProtect },
  { schemaId: 'impressum',    title: 'Impressum',   pageType: 'single',   icon: GrOrganization },
  { schemaId: 'seo',          title: 'SEO',         pageType: 'single',   icon: BsSearch },
];

const pageItems = pageItemsIds.map(item => {
  switch (item.pageType) {
    case 'single':
      return S.listItem()
        .title(item.title)
        .icon(item.icon)
        .child(
          S.editor()
          .title(item.title)
          .id(item.schemaId)
          .schemaType(item.schemaId)
          .documentId(item.schemaId)
        );
    case 'multi':
      return S.listItem()
        .title(item.title)
        .icon(item.icon)
        .child(
          S.documentTypeList(item.schemaId)
          .id(item.schemaId)
          .schemaType(item.schemaId)
          .defaultOrdering(
            [{ field: 'date', direction: 'desc' }]
          )
        );
  }
});

export default () =>
  S.list()
  .title('Inhalte')
  .items(pageItems);
