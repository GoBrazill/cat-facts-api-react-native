import { StyleSheet } from "react-native";


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
      fontWeight: 'bold',
      color: 'hsla(35, 53%, 20%, 1.00)'
    },
    fact: {
      textAlign: 'center',
      width: '60vw',
      fontSize: 36,
      fontWeight: '500',
      color: 'crimson',
    },
    button: {
      padding: 16,
      backgroundColor: 'crimson', 
      borderRadius: 10
    },
    textButton: {
      color: 'hsla(35, 53%, 90%, 1.00)'
    }
})