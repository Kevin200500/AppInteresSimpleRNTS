/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React,  {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [total,setTotal] = useState('');
  const [capitalValue,setCapitalValue] = useState('');
  const [periodosValue,setPeriodosValue] = useState('');
  const [tasaInteres,setTasaInteres]= useState('');
  const [tasaInteresValue,setTasaInteresValue]= useState('');
  const [Capitalizacion,setCapitilzacion]= useState('');
  const calcularCapital = ()=>{
      var valorCapital = parseFloat(capitalValue);
      var tasaInteres = parseFloat(tasaInteresValue);
      var periodos = parseFloat(periodosValue);
      var capMensual = (valorCapital * tasaInteres) /100;
      setTasaInteres(capMensual.toString());
      var capTotal = capMensual * periodos;
      setCapitilzacion(capTotal.toString());
      var valorTotal = valorCapital + capTotal;
      setTotal(valorTotal.toString());
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>{"\n"}</Text>
        <TextInput        
        onChangeText={newCapital=> setCapitalValue(newCapital)}
        placeholder="Ingrese la Capital"
        />        
        <TextInput
        onChangeText={newInteres=> setTasaInteresValue(newInteres)}
        placeholder="Porcentaje Tasa de Interes"
        />
        <TextInput        
        onChangeText={newPeriodos => setPeriodosValue(newPeriodos)}
        placeholder="Periodos"
        />
        <Text>{"\n"}</Text>
        <Button 
        onPress={calcularCapital}
        title="Calcular"/>
        <Text>{"\n"}</Text>
        <Text>Capital Inicial: {capitalValue}</Text>
        <Text>Capitalización Mensual: {tasaInteres}</Text>
        <Text>La Capitalización total de: {Capitalizacion}</Text>
        <Text>Total a Pagar: {total}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
