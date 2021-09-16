import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import Theme from "../constants/Theme";
import { I18n } from "../constants/locales";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { item, focused } = this.props;

    switch (item.id) {
      case I18n.pages.index.id:
        return (
          <Icon
            name="shop"
            family="Extra"
            size={14}
            color={focused ? "white" : Theme.COLORS.PRIMARY}
          />
        );
      case I18n.pages.profile.id:
        return (
          <Icon
            name="palette"
            family="Extra"
            size={14}
            color={focused ? "white" : Theme.COLORS.INPUT_SUCCESS}
          />
        );
      case I18n.pages.register.id:
        return (
          <Icon
            name="spaceship"
            family="Extra"
            size={14}
            color={focused ? "white" : Theme.COLORS.ERROR}
          />
        );
      case I18n.pages.login.id:
        return (
          <Icon
            name="palette"
            family="Extra"
            size={14}
            color={focused ? "white" : Theme.COLORS.INPUT_SUCCESS}
          />
        );
      case I18n.pages.terms.id:
        return (
          <Icon
            name="map-big"
            family="Extra"
            size={14}
            color={focused ? "white" : Theme.COLORS.INFO}
          />
        );
      case I18n.pages.about.id:
        return (<Icon
          name="diamond"
          family="Extra"
          size={14}
          color={focused ? "white" : "rgba(0,0,0,0.5)"}
        />);
      case "Log out":
        return <Icon />;
      default:
        return null;
    }
  };

  render() {
    const { focused, item, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() => navigation.navigate(item.id)}
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {item.title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  activeStyle: {
    backgroundColor: Theme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
