import React from 'react';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Icon } from 'galio-framework';

import config from '../assets/config/config.json';
const Extra = require('../assets/font/extra.ttf');
const IconExtraExtra = createIconSetFromIcoMoon(config, 'Extra');

class IconExtra extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({ Extra: Extra });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, family, ...rest } = this.props;
    
    if (name && family && this.state.fontLoaded) {
      if (family === 'Extra') {
        return <IconExtraExtra name={name} family={family} {...rest} />;
      }
      return <Icon name={name} family={family} {...rest} />;
    }

    return null;
  }
}

export default IconExtra;
