import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
import { I18n } from "../constants/locales";
//galio
import { Block, Text, theme } from "galio-framework";

const { width } = Dimensions.get("screen");

function AboutUsScreen() {
  return (
    <Block flex center>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {renderCards()}

      </ScrollView>
    </Block>
  );
}

function renderCards() {
  return (
    <Block flex style={styles.group}>
      <Text bold size={16} style={styles.title}>
        { I18n.info }
      </Text>
      <Block flex>
        <Text size={16} style={styles.content} color={theme.COLORS.MUTED}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Text size={16} style={styles.content} color={theme.COLORS.MUTED}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Text>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
  },
  content: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    textAlign: 'justify'
  },
  group: {
    paddingTop: theme.SIZES.BASE
  }
});

export default AboutUsScreen;
