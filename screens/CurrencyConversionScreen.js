import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Alert } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toCurrency: '',
      fromCurrency: '',
      enteredAmount: 0,
      rates: [],
      fromRate: 0,
      toRate: 0,
      convertedAmount: 0,
    };
  }

  convert = async () => {
    //alert('Convert')
    var url =
      'https://api.currencyfreaks.com/latest?apikey=8323863217df434a87bd0edabfd34cf9';
    console.log(url);
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        var fromCurrency = this.state.fromCurrency;
        var toCurrency = this.state.toCurrency;
        this.setState({
          rates: responseJson.rates,
          fromRate: this.state.rates[fromCurrency],
          toRate: this.state.rates[toCurrency],
        });
        console.log(fromCurrency);
        var convAmt = this.state.enteredAmount / this.state.fromRate;
        console.log(convAmt);
        var convertedAmount = convAmt * this.state.toRate;
        this.setState({ convertedAmount: convertedAmount });
        console.log(convertedAmount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'#9c8219'}
            centerComponent={{
              text: 'Currency Converter',
              style: { color: 'white', fontSize: 20 },
            }}
          />
          <TextInput
            placeholder="From Currency"
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ fromCurrency: text });
            }}
          />
          <TextInput
            placeholder="To Currency"
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ toCurrency: text });
            }}
          />
          <TextInput
            placeholder="Enter Amount"
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ enteredAmount: text });
            }}
          />
          <TouchableOpacity
            styles={styles.goButton}
            onPress={() => {
              this.convert();
            }}>
            <Text style={styles.buttonText}>CONVERT</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.displayText}>
              Converted Amount:{this.state.convertedAmount}
            </Text>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1,
  },
  buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold' },
  displayText: { textAlign: 'center', fontSize: 20 },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'gray',
  },
});
