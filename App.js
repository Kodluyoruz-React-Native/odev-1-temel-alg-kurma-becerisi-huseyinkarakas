import React from 'react';
import {View, Text} from 'react-native';

class Odev extends React.Component {
  
  render() {

    const boyut = 15;
    const satirlar = [];

    for (let i = 0; i < boyut; i++){
      satirlar[i] = '';

      for (let j = 0; j < boyut - i; j++) {
        satirlar[i] += ' ';
      }

      for (let j = 0; j < 2*i +1; j++) {
        satirlar[i] += '*';

      }

      for (let j = 0; j < 2*boyut - 2*i; j++) {
        satirlar[i] += ' ';
      }

      for (let j = 0; j < 2*i +1; j++) {
        satirlar[i] += '*';

      }

    }

    satirlar.forEach(s=> (console.log(s)));

    for (let i = boyut -2 ; i >= 0; i--) {
      console.log(satirlar[i]);
    }

    return <Text>Hüseyin KARAKAŞ</Text>
  }

}

export default Odev;