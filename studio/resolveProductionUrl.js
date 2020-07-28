const previewSecret = 'MxVGXXBhGtmiju78MWMxVGXXBhGtmiju78MW';
const projectUrl = 'https://mixedbeachtour.ch';

export default function resolveProductionUrl(document) {
  switch(document._type) {
    case 'startseite':
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=`;
    case 'termin':
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=termine`;
    case 'standort':
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=standorte`;
    default:
      return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document._type}`;
  }
}
