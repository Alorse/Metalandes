import React, { Component, Fragment } from 'react';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

export class MediaCapture extends Component {
    constructor(props){  
        super(props);
        this.state = {
            images: [],
            names: [],
            hoverAt: null
        };
    }

    handleCapture = ({ target }) => {
        var fileReader
        Array.from(target.files).forEach(file => {
            fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (e) => {
                console.log(this.state.images)
                this.setState((prevState) => ({
                    ['images']: [...prevState['images'], e.target.result]
                }));
                this.props.updateValue(this.state.images)
            };
        });
    };

    render() {
        return (
            <Fragment>
                <p style={{font: '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'}}>
                    {this.props.path}
                </p>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="icon-button-photo"
                    onChange={this.handleCapture}
                    type="file"
                    multiple
                />
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <div>
                    {this.state.images.map((photo, i) =>
                        <img 
                            src={photo} 
                            width='100'
                            style={{ 
                                border: '2px solid #aaa',
                                marginRight: '2px'
                            }}
                            key={`${this.props.id}_${i}`}
                        />
                    )}
                </div>
            </Fragment>
        );
    }
    render2() {
        return (
            <div id='#/properties/rating' className='rating'>
            <p style={{font: '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'}}>
                {this.props.label}
            </p>
            <span style={{ cursor: 'pointer' }}>
                {[0, 1, 2, 3, 4].map((i) => {
                const fullStars = this.state.hoverAt ?? this.props.value;

                return (
                    <span
                    onMouseOver={() => this.setState({ hoverAt: i + 1 })}
                    onMouseOut={() => this.setState({ hoverAt: null })}
                    onClick={() => this.props.updateValue(i + 1)}
                    key={`${this.props.id}_${i}`}
                    >
                    {i < fullStars ? '\u2605' : '\u2606'}
                    </span>
                );
                })}
            </span>
            </div>
        )
    }
}