import React from 'react';
import Block from '../layout/Block/Block';
import Text from '../general/Text/Text';
import './section.scss';

const Section = ({
  title,
  children,
}) => (
  <Block
    styleName="section"
    padding="m 0"
  >
    {title && (
      <Block
        padding="s 0"
        align="center"
      >
        <Text
          text={title}
          size="m"
        />
      </Block>
    )}
    <Block padding="s 0">
      {children}
    </Block>
  </Block>
);

export default Section;
