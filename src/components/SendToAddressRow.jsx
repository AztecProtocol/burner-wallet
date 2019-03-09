import React from 'react';
import Blockies from 'react-blockies';
import FlexBox from './layout/FlexBox/FlexBox';
import Block from './layout/Block/Block';
import Button from './general/Button/Button';

const SendToAddressRow = ({
  type,
  address,
  value,
  buttonStyle,
  disabled,
  updateState,
  onGetMax,
  onSubmit,
}) => (
  <Block
    padding="m"
    background="grey-lightest"
  >
    <Block padding="xs 0">
      <FlexBox valign="flex-end">
        <div className="flex-free-expand">
          <label htmlFor="amount_input">To Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="0x..."
            value={address}
            onChange={event => updateState(
              `${type}SendToAddress`,
              event.target.value,
            )}
          />
        </div>
        {address
          && address.length === 42
          && (
            <div
              styleName="flex-fixed"
              style={{
                marginLeft: '8px',
                width: '38px',
                height: '38px',
              }}
            >
              <Blockies
                seed={address.toLowerCase()}
                scale={5}
              />
            </div>
          )
        }
      </FlexBox>
    </Block>
    <Block padding="xs 0">
      <label htmlFor="amount_input">Send Amount</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">$</div>
        </div>
        <input
          type="number"
          step="0.1"
          className="form-control"
          placeholder="0.00"
          value={value}
          onChange={event => updateState(
            `${type}SendAmount`,
            event.target.value,
          )}
        />
        <div
          className="input-group-append"
          onClick={onGetMax}
        >
          <span
            id="basic-addon2"
            className="input-group-text"
            style={buttonStyle.secondary}
          >
            max
          </span>
        </div>
      </div>
    </Block>
    <Block padding="m 0 xs">
      <Button
        text="Send"
        disabled={disabled}
        onSubmit={onSubmit}
        expand
      />
    </Block>
  </Block>
);

export default SendToAddressRow;
