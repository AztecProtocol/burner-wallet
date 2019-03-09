import React from 'react';
import { Scaler } from "dapparatus";
import Ruler from "./Ruler";
import {CopyToClipboard} from "react-copy-to-clipboard";
import i18n from '../i18n';
import Section from './Section/Section';
import Row from './layout/Row/Row';
import Button from './general/Button/Button';
import ButtonCol from './ButtonCol';
const QRCode = require('qrcode.react');

export default class Advanced extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      privateKeyQr:false,
      viewingKeyQr: false,
      seedPhraseHidden:true,
      privateKeyHidden:true
    }
  }
  render(){
    let {isVendor, balance, address, privateKey, viewingKey, changeAlert, changeView, goBack, setPossibleNewPrivateKey} = this.props
    const {
      privateKeyQr,
      viewingKeyQr,
    } = this.state;

    let url = window.location.protocol+"//"+window.location.hostname
    if(window.location.port&&window.location.port!=80&&window.location.port!=443){
      url = url+":"+window.location.port
    }
    let qrSize = Math.min(document.documentElement.clientWidth,512)-90
    let privateKeyQrDisplay = ""
    if (privateKeyQr){
      let qrValue = url+"/#"+privateKey
      privateKeyQrDisplay = (
        <div className="main-card card w-100">
          <div className="content qr row">
            <QRCode value={qrValue} size={qrSize}/>
          </div>
        </div>
      )
    }
    let viewingKeyQrDisplay = '';
    if (viewingKeyQr){
      const qrValue = `${url}/#${viewingKey}`;
      viewingKeyQrDisplay = (
        <div className="main-card card w-100">
          <div className="content qr row">
            <QRCode value={qrValue} size={qrSize}/>
          </div>
        </div>
      )
    }

    let showingQr = ""
    if(this.state.showingQr){
      showingQr = (
        <div className="main-card card w-100">
          <div className="content qr row">
            <QRCode value={this.state.showingQr} size={qrSize}/>
          </div>
        </div>
      )
    }


    let inputPrivateEyeButton = ""
    let inputPrivateSize = "col-4 p-1"

    if(this.state.newPrivateKey){
      inputPrivateEyeButton = (
        <div className="col-2 p-1">
          <button className="btn btn-large w-100" style={this.props.buttonStyle.secondary} onClick={()=>{this.setState({privateKeyHidden:!this.state.privateKeyHidden})}}>
            <i className="fas fa-eye"></i>
          </button>
        </div>
      )
    }else{
      inputPrivateSize = "col-6 p-1"
    }

    let inputPrivateKeyRow = (
      <div className="content ops row">
        <div className={inputPrivateSize}>
            <input type={this.state.privateKeyHidden?"password":"text"}  autocorrect="off" autocapitalize="none"  autocorrect="off" autocapitalize="none" className="form-control" placeholder="private key" value={this.state.newPrivateKey}
                   onChange={event => this.setState({newPrivateKey:event.target.value})} />
        </div>
        {inputPrivateEyeButton}
        <div className="col-6 p-1">
          <button className="btn btn-large w-100" style={this.props.buttonStyle.primary}
                  onClick={()=>{
                    console.log(this.state.newPrivateKey)
                    if(this.state && this.state.newPrivateKey && this.state.newPrivateKey.length>=64&&this.state.newPrivateKey.length<=66){
                      //let pkutils = require("ethereum-mnemonic-privatekey-utils")
                      //const newPrivateKey = pkutils.getPrivateKeyFromMnemonic(newPrivateKey)
                      changeView('main')
                      let possibleNewPrivateKey = this.state.newPrivateKey
                      if(possibleNewPrivateKey.indexOf("0x")!=0){
                        possibleNewPrivateKey = "0x"+possibleNewPrivateKey
                      }
                      setPossibleNewPrivateKey(possibleNewPrivateKey)
                    }else{
                      changeAlert({type: 'warning', message: 'Invalid private key.'})
                    }
                  }}>
            <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
              <i className="fas fa-plus-square"/> {i18n.t('create')}
            </Scaler>
          </button>
        </div>
      </div>
    )


    let inputSeedEyeButton = ""
    let inputSeedSize = "col-4 p-1"

    if(this.state.newSeedPhrase){
      inputSeedEyeButton = (
        <div className="col-2 p-1">
          <button className="btn btn-large w-100" style={this.props.buttonStyle.secondary} onClick={()=>{this.setState({seedPhraseHidden:!this.state.seedPhraseHidden})}}>
            <i className="fas fa-eye"></i>
          </button>
        </div>
      )
    }else{
      inputSeedSize = "col-6 p-1"
    }

    let inputSeedRow = (
      <div className="content ops row" style={{paddingTop:10}}>
        <div className={inputSeedSize}>
        <input type={this.state.seedPhraseHidden?"password":"text"}  autocorrect="off" autocapitalize="none" className="form-control" placeholder="seed phrase" value={this.state.newSeedPhrase}
               onChange={event => this.setState({newSeedPhrase:event.target.value})} />
        </div>
        {inputSeedEyeButton}
        <div className="col-6 p-1">
          <button className="btn btn-large w-100" style={this.props.buttonStyle.primary}
                  onClick={()=>{
                    if(!this.state.newSeedPhrase){
                      changeAlert({type: 'warning', message: 'Invalid seed phrase.'})
                    }else{
                      let pkutils = require("ethereum-mnemonic-privatekey-utils")
                      const newPrivateKey = pkutils.getPrivateKeyFromMnemonic(this.state.newSeedPhrase)
                      changeView('main')
                      setPossibleNewPrivateKey("0x"+newPrivateKey)
                    }
                  }}>
            <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
              <i className="fas fa-plus-square"/> {i18n.t('create')}
            </Scaler>
          </button>
        </div>
      </div>
    )

    return (
      <div>
        <Section
          title="Learn More"
        >
          <Row>
            <ButtonCol>
              <Button
                icon={<i className="fas fa-code"/>}
                text={i18n.t('code')}
                href="https://github.com/austintgriffith/burner-wallet"
                outlined
                expand
              />
            </ButtonCol>
            <ButtonCol>
              <Button
                icon={<i className="fas fa-info"/>}
                text={i18n.t('about')}
                href="https://medium.com/gitcoin/ethereum-in-emerging-economies-b235f8dac2f2"
                outlined
                expand
              />
            </ButtonCol>
          </Row>
        </Section>

        {privateKey && (
          <Section
            title="Private Key"
          >
            {!isVendor && (
              <div>
                <Row>
                  <ButtonCol>
                    <Button
                      icon={<i className="fas fa-key"/>}
                      text={i18n.t(privateKeyQr ? 'hide_pk' : 'show')}
                      onClick={() => this.setState({
                        privateKeyQr: !privateKeyQr,
                      })}
                      outlined
                      expand
                    />
                  </ButtonCol>
                  <ButtonCol>
                    <CopyToClipboard text={privateKey}>
                      <Button
                        icon={<i className="fas fa-key"/>}
                        text={i18n.t('copy')}
                        onClick={() => changeAlert({type: 'success', message: 'Private Key copied to clipboard'})}
                        outlined
                        expand
                      />
                    </CopyToClipboard>
                  </ButtonCol>
                </Row>
                <div className="content ops row">
                  {privateKeyQrDisplay}
                </div>
              </div>
            )}
            <Row>
              <ButtonCol column={12}>
                <Button
                  icon={<i className="fas fa-fire"/>}
                  text={i18n.t('burn')}
                  onClick={() => {
                    console.log("BALANCE",balance)
                    changeView('burn-wallet');
                  }}
                  expand
                />
              </ButtonCol>
            </Row>
          </Section>
        )}

        {viewingKey && (
          <Section
            title="Viewing Key"
          >
            {!isVendor && (
              <div>
                <Row>
                  <ButtonCol>
                    <Button
                      icon={<i className="fas fa-key"/>}
                      text={i18n.t(privateKeyQr ? 'hide_vk' : 'show_vk')}
                      onClick={() => this.setState({
                        viewingKeyQr: !privateKeyQr,
                      })}
                      outlined
                      expand
                    />
                  </ButtonCol>
                  <ButtonCol>
                    <CopyToClipboard text={viewingKey}>
                      <Button
                        icon={<i className="fas fa-key"/>}
                        text={i18n.t('copy_vk')}
                        onClick={() => changeAlert({type: 'success', message: 'Viewing Key copied to clipboard'})}
                        outlined
                        expand
                      />
                    </CopyToClipboard>
                  </ButtonCol>
                </Row>
                <div className="content ops row">
                  {viewingKeyQrDisplay}
                </div>
              </div>
            )}
            <Row>
              <ButtonCol column={12}>
                <Button
                  icon={<i className="fas fa-fire"/>}
                  text={i18n.t('burn_vk')}
                  onClick={()=> changeView('burn-wallet')}
                  expand
                />
              </ButtonCol>
            </Row>
          </Section>
        )}

        <hr style={{paddingTop:20}}/>

        <div style={{width:"100%",textAlign:"center"}}><h5>Create Account</h5></div>

        {inputPrivateKeyRow}

        {inputSeedRow}

        <hr style={{paddingTop:20}}/>
        <div style={{width:"100%",textAlign:"center"}}><h5>Extra Tools</h5></div>

        <div className="content ops row">
          <div className="col-6 p-1">
              <input type="text" autocorrect="off" autocapitalize="none" className="form-control" placeholder="any text to encode" value={this.state.newQr}
                     onChange={event => this.setState({newQr:event.target.value})} />
          </div>
          <div className="col-6 p-1">
            <button className="btn btn-large w-100" style={this.props.buttonStyle.secondary}
                    onClick={()=>{
                      this.setState({showingQr:this.state.newQr})
                    }}>
              <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
                <i className="fas fa-qrcode"/> {i18n.t('advanced.to_qr')}
              </Scaler>
            </button>
          </div>
        </div>
        {showingQr}

        {isVendor &&
        <div>
          <div className="content ops row" style={{marginBottom:10}}>

            <div className="col-12 p-1">
            <button className="btn btn-large w-100" style={this.props.buttonStyle.secondary} onClick={()=>{
              this.props.changeView("exchange")
            }}>
              <Scaler config={{startZoomAt:400,origin:"50% 50%"}}>
                <i className="fas fa-key"/> {"Exchange"}
              </Scaler>
            </button>
            </div>
          </div>
        </div>
        }

      </div>
    )
  }
}
