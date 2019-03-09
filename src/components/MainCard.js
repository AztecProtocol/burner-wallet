import React from 'react';
import { Scaler } from "dapparatus";
import i18next from 'i18next';
import ButtonWrapper from './ButtonWrapper';
import Button from './general/Button/Button';

export default ({ERC20TOKEN,address, balance, changeAlert, changeView, dollarDisplay, subBalanceDisplay}) => {
  let sendButtons;

  if(ERC20TOKEN){
    sendButtons = [
      <ButtonWrapper
        key="receive"
      >
        <Button
          onClick={() => changeView('receive')}
          expand
        >
          <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
            <i className="fas fa-qrcode"  /> {i18next.t('main_card.receive')}
          </Scaler>
        </Button>
      </ButtonWrapper>,
      <ButtonWrapper
        key="send"
      >
        <Button
          onClick={() => changeView('send_to_address')}
          expand
        >
          <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
            <i className="fas fa-paper-plane"/> {i18next.t('main_card.send')}
          </Scaler>
        </Button>
      </ButtonWrapper>,
      <ButtonWrapper
        key="share"
      >
        <Button
          onClick={() => changeView('share')}
          outlined
          expand
        >
          <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
            <i className="fas fa-share"/> {i18next.t('main_card.share')}
          </Scaler>
        </Button>
      </ButtonWrapper>,
    ];
  } else {
    sendButtons = [
      <ButtonWrapper
        key="receive"
      >
        <Button
          onClick={() => changeView('receive')}
          expand
        >
          <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
            <i className="fas fa-qrcode"  /> {i18next.t('main_card.receive')}
          </Scaler>
        </Button>
      </ButtonWrapper>,
      <ButtonWrapper
        key="send"
      >
        <Button
          onClick={() => changeView('send_to_address')}
          expand
        >
          <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
            {/* <i className="fas fa-paper-plane"/> Send */}
            <i className="fas fa-paper-plane"/> {i18next.t('main_card.send')}
          </Scaler>
        </Button>
      </ButtonWrapper>,
      <ButtonWrapper
        key="share"
      >
        <Button
          onClick={() => changeView('share')}
          outlined
          expand
        >
          <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
            <i className="fas fa-share"/> {i18next.t('main_card.share')}
          </Scaler>
        </Button>
      </ButtonWrapper>,
    ];
  }


  return sendButtons;
}
