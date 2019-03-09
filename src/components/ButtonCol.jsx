import React from 'react';
import Col from './layout/Col/Col';
import Block from './layout/Block/Block';

const ButtonCol = ({
  column = 6,
  children,
}) => (
  <Col column={column}>
    <Block padding="s 0">
      {children}
    </Block>
  </Col>
);

export default ButtonCol;
