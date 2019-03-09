import React from 'react';
import FlexBox from './layout/FlexBox/FlexBox';
import Block from './layout/Block/Block';
import Button from './general/Button/Button';
import TextButton from './general/TextButton/TextButton';
import i18n from '../i18n';

const ExchangingRow = ({
  direction = 'up',
  amount,
  buttonStyle,
  onChangeInput,
  onGetMax,
  onCancel,
  onSubmit,
}) => (
  <FlexBox
    align="space-between"
    valign="center"
    nowrap
  >
    <div className="flex-free-expand">
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">$</div>
        </div>
        <input
          type="number"
          step="0.1"
          className="form-control"
          placeholder="0.00"
          value={amount}
          onChange={onChangeInput}
        />
       <div className="input-group-append" onClick={onGetMax}>
         <span className="input-group-text" id="basic-addon2" style={buttonStyle.secondary}>
           max
         </span>
       </div>
      </div>
    </div>
    <FlexBox
      styleName="flex-fixed"
      valign="center"
    >
      <Block padding="0 m">
        <TextButton
          size="xs"
          text={i18n.t('cancel')}
          onClick={onCancel}
        >
          <i className="fas fa-times"/> {i18n.t('cancel')}
        </TextButton>
      </Block>
      <Button
        size="s"
        icon={<i className={`fas fa-arrow-${direction}`} />}
        text="Send"
        onSubmit={onSubmit}
      />
    </FlexBox>
  </FlexBox>
);

export default ExchangingRow;
