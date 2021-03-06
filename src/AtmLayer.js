import React, { Component } from 'react';
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
    }

    handleChangeAlpha(newValue) {
        this.props.alphaHandler(this.props.layer.layerNumber, newValue);
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
                    <p>Longwave Emissivity: {this.props.layer.alpha.toFixed(2)}</p>
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