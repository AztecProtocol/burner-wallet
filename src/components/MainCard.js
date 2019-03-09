import React from 'react';
import { Scaler } from "dapparatus";
import i18next from 'i18next';
import ButtonCol from './ButtonCol';
import Button from './general/Button/Button';

export default ({ERC20TOKEN,address, balance, changeAlert, changeView, dollarDisplay, subBalanceDisplay}) => {
  let sendButtons;

  if(ERC20TOKEN){
    sendButtons = [
      <ButtonCol
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
      </ButtonCol>,
      <ButtonCol
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
      </ButtonCol>,
      <ButtonCol
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
      </ButtonCol>,
    ];
  } else {
    sendButtons = [
      <ButtonCol
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
      </ButtonCol>,
      <ButtonCol
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
      </ButtonCol>,
      <ButtonCol
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
      </ButtonCol>,
    ];
  }


  return sendButtons;
}
