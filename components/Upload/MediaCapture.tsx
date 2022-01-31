import React, { Component, Fragment } from 'react';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import "./MediaCapture.css";
import {preview_image} from './resize_base64_image.js';
export class MediaCapture extends Component {
    constructor(props){  
        super(props);
        this.state = {
            images: props.value !== undefined ? props.value : []
        };
    }

    handleCapture = ({ target }) => {
        preview_image(this);
        // var fileReader
        // Array.from(target.files).forEach(file => {
        //     fileReader = new FileReader();
        //     fileReader.readAsDataURL(file);
        //     fileReader.onload = (e) => {
        //         this.setState((prevState) => ({
        //             ['images']: [...prevState['images'], e.target.result]
        //         }));
        //         this.props.updateValue(this.state.images)
        //     };
        // });
    };

    render() {
        return (
            <Fragment>
                <p className="para">
                    {this.props.label}
                </p>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id={`icon_${this.props.path}`}
                    onChange={this.handleCapture}
                    type="file"
                    multiple
                />
                <label htmlFor={`icon_${this.props.path}`} className="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <>
                    {this.state.images.map((photo, i) =>
                        <img 
                            src={photo} 
                            width='100'
                            style={{ 
                                border: '2px solid #aaa',
                                marginRight: '2px'
                            }}
                            key={`${this.props.path}_${i}`}
                        />
                    )}
                </>
            </Fragment>
        );
    }
}