import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

// Helper to render links with the respective properties when the blank-field in the sanity studio is set
// This is like an extension for the structured-text approach of Sanity
const serializers = {
  marks: {
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

const ExtendedBlockContent = ({ blocks }) => (
  <BlockContent blocks={blocks} serializers={serializers} />
);

export default ExtendedBlockContent;
