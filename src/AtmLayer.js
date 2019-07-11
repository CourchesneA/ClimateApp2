import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import './AtmLayer.css';
// import { FaUnlockAlt, FaLock, FaUnlock, FaTimes } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';


class AtmLayer extends Component {
    //This components should be enclosed in a SmallContainer
    constructor(props) {
        super(props);

        this.handleRemoveLayer = this.handleRemoveLayer.bind(this);
        this.handleChangeAlpha = this.handleChangeAlpha.bind(this);
        this.handleChangeOpa = this.handleChangeOpa.bind(this);//added
        this.handleChangeSca = this.handleChangeSca.bind(this);//added
    }

    handleChangeAlpha(newValue) {
        this.props.alphaHandler(this.props.layer.layerNumber, newValue);
    }
    
    handleChangeOpa(newValue) {
        this.props.opaHandler(this.props.layer.layerNumber, newValue);
    }

    handleChangeSca(newValue) {
        this.props.scaHandler(this.props.layer.layerNumber, newValue);
    }

    handleRemoveLayer() {
        this.props.removeLayer(this.props.layer);
    }


    render() {
        // console.log("Rendered layer " + this.props.layer.layerNumber + "With default value" + this.props.layer.alpha);
        return (
            <div className="atm-layer">
                <div className="header-line">
                    <span className="layer-name"><b>Layer {this.props.layer.layerNumber}</b></span>
                    <span className="layer-tools">
                        <button type="button" onClick={this.handleRemoveLayer} className="layer-button">
                            <FaTimes size={14} />
                        </button>
                    </span>
                </div>
                <div className="core-line">
                    <p data-tip="The total amount of incoming
                    shortwave radiation that is<br/> absorbed or scattered by the atmospheric layer." 
                    data-place="left"
                    data-effect="solid" 
                    data-type="info"
                    data-delay-show='700'
                    data-multiline="true">
                        Shortwave Opacity: {this.props.layer.opa.toFixed(2)}</p>
                        <ReactTooltip/>
                    <div className="push-above"><Slider
                        min={0}
                        max={1}
                        step={0.01}
                        trackStyle={{
                            backgroundColor: '#4f97c5',
                            height: 7
                        }}
                        handleStyle={{
                            borderColor: '#4f97c5',
                            borderWidth: 3,
                            height: 20,
                            width: 20,
                            marginLeft: -14,
                            marginTop: -7,
                        }}
                        railStyle={{
                            backgroundColor: '#84b3d1',
                            marginTop: 1
                        }}
                        defaultValue={this.props.layer.opa}
                        value={this.props.layer.opa}
                        onChange={(value) => this.handleChangeOpa(value)} /></div>
                    <p data-tip="The proportionality between the amount of scattered radiation<br/>
                     and the shortwave opacity
                     of the atmospheric layer." 
                    data-place="left"
                    data-effect="solid" 
                    data-type="info"
                    data-delay-show='700'
                    data-multiline="true">
                        Single Scattering Albedo: {this.props.layer.sca.toFixed(2)}</p>
                    
                    <div className="push-above"><Slider
                        min={0}
                        max={1}
                        step={0.01}
                        trackStyle={{
                            backgroundColor: '#4f97c5',
                            height: 7
                        }}
                        handleStyle={{
                            borderColor: '#4f97c5',
                            borderWidth: 3,
                            height: 20,
                            width: 20,
                            marginLeft: -14,
                            marginTop: -7,
                        }}
                        railStyle={{
                            backgroundColor: '#84b3d1',
                            marginTop: 1
                        }}
                        defaultValue={this.props.layer.sca}
                        value={this.props.layer.sca}
                        onChange={(value) => this.handleChangeSca(value)} /></div>
                    <p data-tip="The atmospheric layer's effectiveness in emitting
                     and <br/> absorbing energy in form of thermal radiation (longwave)." 
                    data-place="left"
                    data-effect="solid" 
                    data-type="info"
                    data-delay-show='700'
                    data-multiline="true">
                        Longwave Emissivity: {this.props.layer.alpha.toFixed(2)}</p>
                    
                    <div className="push-above"><Slider
                        min={0}
                        max={1}
                        step={0.01}
                        trackStyle={{
                            backgroundColor: '#4f97c5',
                            height: 7
                        }}
                        handleStyle={{
                            borderColor: '#4f97c5',
                            borderWidth: 3,
                            height: 20,
                            width: 20,
                            marginLeft: -14,
                            marginTop: -7,
                        }}
                        railStyle={{
                            backgroundColor: '#84b3d1',
                            marginTop: 1
                        }}
                        defaultValue={this.props.layer.alpha}
                        value={this.props.layer.alpha}
                        onChange={(value) => this.handleChangeAlpha(value)} /></div>
                </div>
            </div>
        );
    }
}

export default AtmLayer;