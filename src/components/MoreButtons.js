import React from 'react';
import { Scaler } from "dapparatus";
import ButtonWrapper from './ButtonWrapper';
import Button from './general/Button/Button';
import i18n from '../i18n';

export default ({isVendor, buttonStyle,ERC20TOKEN,address, balance, changeAlert, changeView, dollarDisplay, subBalanceDisplay}) => {
  let exchangeButton

  if(!isVendor){
    exchangeButton  = (
      <Button
        onClick={() => changeView('exchange')}
        outlined
        expand
      >
        <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
          <i className="fa fa-random"></i> {i18n.t('more_buttons.exchange')}
        </Scaler>
      </Button>
    )
  }else{
    exchangeButton  = (
      <Button
        onClick={changeView('cash_out')}
        outlined
        expand
      >
        <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
          <i className="fa fa-credit-card"></i> {"Cash Out"}
        </Scaler>
      </Button>
    )
  }


  return (
    <ButtonWrapper>
      {exchangeButton}
    </ButtonWrapper>
  )
}
