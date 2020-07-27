const previewSecret = 'MxVGXXBhGtmiju78MWMxVGXXBhGtmiju78MW';
const projectUrl = 'http://localhost:3000';

export default function resolveProductionUrl(document) {
  switch(document._type) {
    case 'startseite':
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=`;
    case 'termin':
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=termin`;
    case 'standort':
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=standort`;
    default:
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document._type}`;
  }
}
