import React from 'react';
import FlexBox from './layout/FlexBox/FlexBox';
import Block from './layout/Block/Block';
import Text from './general/Text/Text';
import Button from './general/Button/Button';

const ExchangeBalanceRow = ({
  logo,
  text,
  amount,
  active,
  onClickDisabled,
  onClickSend,
  dollarDisplay,
}) => (
  <Block padding="l 0">
    <FlexBox
      align="space-between"
      valign="center"
    >
      <FlexBox
        valign="center"
      >
        <img
          src={logo}
          alt={text}
          style={{
            width: '50px',
            height: '50px',
          }}
        />
        <Block
          padding="0 m"
          style={{ minWidth: '64px' }}
        >
          <Text
            text={text}
          />
        </Block>
        <Block left="xl">
          <Text
            text={`$${dollarDisplay((!isNaN(amount) && amount) || 0.00)}`}
            size="s"
            weight="bold"
          />
        </Block>
      </FlexBox>
      <Button
        size="s"
        icon={(
          <i
            className={`fas fa-${active ? 'times' : 'arrow-right'}`}
          />
        )}
        onSubmit={onClickSend}
        outlined={!active}
        disabled={onClickDisabled}
      />
    </FlexBox>
  </Block>
);

export default ExchangeBalanceRow;
