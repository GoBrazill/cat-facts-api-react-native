import { StyleSheet } from "react-native";

const fonts = {
  medium: 'Roboto_500Medium',
  bold: 'Roboto_700Bold'
}

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 16,
    backgroundColor: '#F0E2CE',
  },
  title: {
    fontSize: 48,
    fontFamily: fonts.bold,
    color: 'hsla(35, 53%, 20%, 1.00)'
  },
  fact: {
    fontFamily: fonts.medium,
    textAlign: 'center',
    width: '60vw',
    fontSize: 36,
    color: 'crimson',
  },
  button: {
    padding: 16,
    backgroundColor: 'crimson',
    borderRadius: 10
  },
  textButton: {
    fontFamily: fonts.medium,
    color: 'hsla(35, 53%, 90%, 1.00)'
  }
})