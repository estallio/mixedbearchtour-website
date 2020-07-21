import client, { previewClient } from './sanity';

export const getClient = preview => (preview ? previewClient : client);

export const fetchContact = async preview => {
  const resultContact = await getClient(preview).fetch(
    `*[_type == 'kontakt'] { mail, tel, whatsapp, facebook, instagram, socialMediaText }`
  );

  return {
    mail: resultContact[0].mail,
    tel: resultContact[0].tel,
    whatsapp: resultContact[0].whatsapp,
    facebook: resultContact[0].facebook,
    instagram: resultContact[0].instagram,
    socialMediaText: resultContact[0].socialMediaText,
    preview
  };
};

export const serializers = {
  marks: {
    // eslint-disable-next-line react/display-name
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    }
  }
};
