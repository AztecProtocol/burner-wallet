import React from 'react';
import { Scaler, Blockie } from "dapparatus";
import burnerloader from '../burnerloader.gif';
import FlexBox from './layout/FlexBox/FlexBox';
import Block from './layout/Block/Block';
import Text from './general/Text/Text';
import Clickable from './utils/Clickable/Clickable';

export  default ({openScanner, network, total, dollarDisplay, ens, title, titleImage, mainStyle, balance, address, changeView, view}) => {


  let sendButtonOpacity = 1.0
  if(view=="receive" || view=="send_badge"){
    sendButtonOpacity = 0
  }



  let name = ens
  if(!name){
    name = address.substring(2,8)
  }

  let moneyDisplay
  let blockieDisplay
  if(typeof total == "undefined" || Number.isNaN(total)){
    moneyDisplay = (
      <div>
        connecting...
      </div>
    )
    blockieDisplay = (
      <div>
        <img src ={burnerloader} style={{maxHeight:50,opacity:0.25,marginLeft:-20}}/>
      </div>
    )
  }else{
    /*moneyDisplay = (
      <div>
        ${dollarDisplay(total)}
      </div>
    )*/
    moneyDisplay = (
      <div style={{opacity:0.4,fontSize:22,paddingTop:18}}>
        {network}
      </div>
    )
    blockieDisplay = (
      <Blockie
          address={address}
          config={{size:6}}>
      </Blockie>
    )
  }

  let scanButtonStyle = {
    opacity:sendButtonOpacity,
    position:"fixed",
    right:20,
    bottom:20,
    zIndex:2,
    cursor:"pointer"
  }

  if(view=="send_to_address"){
    scanButtonStyle.position = "absolute"
    scanButtonStyle.right = -3
    scanButtonStyle.top = 217
    delete scanButtonStyle.bottom
  }

  const goToMainPage = view !== 'main' && view !== 'exchange';

  return (
    <Block
      styleName="header"
      padding="l"
    >
      <FlexBox
        align="space-between"
        valign="center"
      >
        <Clickable
          href={goToMainPage
            ? '/'
            : `https://blockscout.com/poa/dai/address/${address}/transactions`
          }
          onClick={goToMainPage
            ? () => changeView('main')
            : undefined
          }
        >
          <FlexBox valign="center">
            {blockieDisplay}
            <Block left="m">
              <Text
                text={name}
              />
            </Block>
          </FlexBox>
        </Clickable>
        {moneyDisplay}
      </FlexBox>
    </Block>
  )
};
