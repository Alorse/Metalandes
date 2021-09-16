import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import { Block, Text } from 'galio-framework';

import Theme from '../constants/Theme';
import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem } from '../components';
import { I18n } from "../constants/locales";

function CustomDrawerContent({ 
  drawerPosition, 
  navigation, 
  profile, 
  focused, 
  state, 
  ...rest 
}) {

  let count = 0;
  
  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Block flex={0.06} style={styles.header} center>
        <Image styles={styles.logo} source={Images.LogoSmall} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <Block flex style={{ 
              marginTop: 0, 
              marginVertical: 8, 
              paddingHorizontal: 8 
            }}>
              <Block style={{ 
                borderColor: "rgba(0,0,0,0.2)", 
                width: '100%', 

              }}/>
              <Text 
                color="#8898AA" 
                style={{ marginTop: 16, marginLeft: 8 }}
              >
                {I18n.info}
              </Text>
            </Block>
            <DrawerCustomItem
              item={I18n.pages.index}
              navigation={navigation}
              focused={state.index == count ? true : false}
            />
            <DrawerCustomItem
              item={I18n.pages.about}
              navigation={navigation}
              focused={state.index == (count+1) ? true : false}
            />
            <DrawerCustomItem
              item={I18n.pages.terms}
              navigation={navigation}
              focused={state.index == (count+2) ? true : false}
            />
        </ScrollView>
      </Block>
    </Block>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: Theme.SIZES.BASE,
    paddingTop: Theme.SIZES.BASE * 3,
    justifyContent: 'center'
  }
});

export default CustomDrawerContent;
