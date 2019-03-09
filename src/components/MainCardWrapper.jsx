import React from 'react';
import Block from './layout/Block/Block';

const MainCardWrapper = ({
  children,
}) => (
  <Block
    padding="xl l"
  >
    <Block
      padding="l"
      background="white"
      rounded="default"
      layer={1}
      relative
    >
      {children}
    </Block>
  </Block>
);

export default MainCardWrapper;
