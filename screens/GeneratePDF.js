import React from "react";
import {
  ScrollView,
  StyleSheet
} from "react-native";
import { I18n } from "../constants/locales";
import { Block, Text, theme } from "galio-framework";

function GeneratePDFScreen() {
  return (
    <Block flex center>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text bold size={16} style={styles.title}>
        { I18n.info }
      </Text>

      </ScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
  }
});

export default GeneratePDFScreen;
