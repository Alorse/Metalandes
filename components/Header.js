import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Text, Button, Block, NavBar, theme } from 'galio-framework';

import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import Theme from '../constants/Theme';
import { I18n } from '../constants/locales';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return (back ? navigation.goBack() : navigation.openDrawer());
  }
  renderSearch = () => {
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder={ I18n.search }
        placeholderTextColor={'#8898AA'}
        iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="search-zoom-in" family="Extra" />}
      />
    );
  }
  renderOptions = () => {
    const { navigation, optionLeft, optionRight } = this.props;

    return (
      <Block row style={styles.options}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon name="diamond" family="Extra" style={{ paddingRight: 8 }} color={Theme.COLORS.ICON} />
            <Text size={16} style={styles.tabTitle}>{optionLeft || 'Beauty'}</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon size={16} name="bag-17" family="Extra" style={{ paddingRight: 8 }} color={Theme.COLORS.ICON}/>
            <Text size={16} style={styles.tabTitle}>{optionRight || 'Fashion'}</Text>
          </Block>
        </Button>
      </Block>
    );
  }
  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;
    
    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })} />
    )
  }
  renderHeader = () => {
    const { search, tabs, options } = this.props;
    if (search || tabs || options) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
          {options ? this.renderOptions() : null}
          {tabs ? this.renderTabs() : null}
        </Block>
      );
    }
  }
  render() {
    const { back, title, white, transparent, bgColor, iconColor, titleColor, navigation, ...props } = this.props;

    const noShadow = ['Search', 'Profile'].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    const navbarStyles = [
      styles.navbar,
      bgColor && { backgroundColor: bgColor }
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={false}
          title={title}
          style={navbarStyles}
          transparent={transparent}
          rightStyle={{ alignItems: 'center' }}
          left={
            <Icon 
              name={back ? 'chevron-left' : "menu"} family="entypo" 
              size={20} onPress={this.handleLeftPress} 
              color={iconColor || (white ? Theme.COLORS.WHITE : Theme.COLORS.ICON)}
              style={{ marginTop: 2 }}
            />
              
          }
          leftStyle={{ paddingVertical: 12, flex: 0.2 }}
          titleStyle={[
            styles.title,
            { color: Theme.COLORS[white ? 'WHITE' : 'HEADER'] },
            titleColor && { color: titleColor }
          ]}
          {...props}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Theme.COLORS.BORDER
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: Theme.COLORS.HEADER
  },
});

export default withNavigation(Header);