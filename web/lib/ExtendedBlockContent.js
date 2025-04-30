import React, { useState } from 'react';

import BlockContent from '@sanity/block-content-to-react';

import Lightbox from 'react-image-lightbox';

import styles from '../pages/index.module.sass';

const link = ({ mark, children }) => {
  const { sameTab, href } = mark;

  return sameTab ? (
    <a href={href}>
      <span>{children}</span>
    </a>
  ) : (
    <a href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
    </a>
  );
};

const file = ({ mark, children }) => {
  const { fileUrl } = mark;

  return (
    <a href={fileUrl} target="_blank" rel="noreferrer">
      <span>{children}</span>
    </a>
  );
};

const serializers = {
  marks: {
    link: link,
    file: file,
  },
  types: {
    image: ({ node: { imageUrl, altText } }) => {
      return (
        <a
          href={imageUrl}
          target="_blank"
          rel="noreferrer"
          style={{ display: 'block', margin: '30px 0' }}
        >
          <img
            alt={altText}
            src={imageUrl + '?w=1500&h=1000&fit=clip&auto=format'}
            style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
          />
        </a>
      );
    },
    gallery: ({ node: { images } }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [isOpen, setIsOpen] = useState(false);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [photoIndex, setPhotoIndex] = useState(0);

      const galleryImages = images.map((image) => ({
        imageUrl: image.imageUrl + '?w=1500&h=1000&fit=clip&auto=format',
        thumbnailUrl: image.imageUrl + '?w=200&h=200&fit=clip&auto=format',
      }));

      return (
        <>
          {isOpen && (
            <Lightbox
              mainSrc={galleryImages[photoIndex].imageUrl}
              nextSrc={
                galleryImages[(photoIndex + 1) % galleryImages.length].imageUrl
              }
              prevSrc={
                galleryImages[
                  (photoIndex + galleryImages.length - 1) % galleryImages.length
                ].imageUrl
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + galleryImages.length - 1) % galleryImages.length
                )
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % galleryImages.length)
              }
            />
          )}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: 50,
              overflow: 'auto',
            }}
          >
            {galleryImages.map((item, i) => (
              <div key={i} className={styles.gridItem}>
                <a
                  onClick={() => {
                    setPhotoIndex(i);
                    setIsOpen(true);
                  }}
                >
                  <img
                    src={item.thumbnailUrl}
                    className={styles.gridImage}
                    alt={item.title}
                  />
                </a>
              </div>
            ))}
          </div>
        </>
      );
    },
    code: ({ node: { language, code } }) => (
      <pre data-language={language}>
        <code>{code}</code>
      </pre>
    ),
  },
};

const ExtendedBlockContent = ({ blocks }) => (
  <div className={styles.blockContent}>
    <BlockContent blocks={blocks} serializers={serializers} />
  </div>
);

export default ExtendedBlockContent;
