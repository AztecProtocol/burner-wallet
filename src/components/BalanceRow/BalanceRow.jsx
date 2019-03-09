import React from 'react';
import classnames from 'classnames';
import FlexBox from '../layout/FlexBox/FlexBox';
import Block from '../layout/Block/Block';
import Text from '../general/Text/Text';
import './balance.scss';

const BalanceRow = ({
  icon,
  text,
  selected,
  amount,
  address,
  dollarDisplay,
}) => {
  if (isNaN(amount) || typeof amount === "undefined"){
    amount=0.00
  }

  return (
    <Block
      styleName={classnames(
        'balance-row',
        {
          selected: selected === text,
        },
      )}
      padding="l 0"
    >
      <FlexBox
        align="space-between"
        valign="center"
      >
        <FlexBox
          valign="center"
        >
          <img
            src={icon}
            alt={text}
            style={{
              width: '50px',
              height: '50px',
            }}
          />
          <Block padding="0 m">
            <Text
              text={text}
              size="xs"
            />
          </Block>
        </FlexBox>
        <Text
          text={`$${dollarDisplay(amount)}`}
          size="xl"
        />
      </FlexBox>
    </Block>
  )
};

export default BalanceRow;
