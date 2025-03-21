import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [n4, setN4] = useState('');
  const [resultado, setResultado] = useState(0);
  const [historico, setHistorico] = useState([]);

  // Estados para os alerts
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const media = () => {
    if (parseFloat(n1) > 10 || parseFloat(n2) > 10 || parseFloat(n3) > 10 || parseFloat(n4) > 10) {
      setAlertTitle("Erro");
      setAlertMessage("Os valores devem estar entre 0 e 10.");
      setShowAlert(true);
      return;
    }

    let r = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;
    setResultado(r);

    let status;
    if (r >= 7) {
      status = "Aprovado";
      setAlertTitle("Parabéns!");
      setAlertMessage("Você está APROVADO!");
    } else if (r <= 5) {
      status = "Reprovado";
      setAlertTitle("Que pena!");
      setAlertMessage("Você está REPROVADO!");
    } else {
      status = "Recuperação";
      setAlertTitle("Atenção!");
      setAlertMessage("Você está de RECUPERAÇÃO!");
    }

    setHistorico([...historico, { nota: r.toFixed(2), status }]);
    setShowAlert(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.titulo}><Text style={{ fontWeight: 'bold' }}>Média de 4 valores</Text></Text>
        </View>

        <TextInput style={styles.input} placeholder='Digite o primeiro número' onChangeText={setN1} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder='Digite o segundo número' onChangeText={setN2} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder='Digite o terceiro número' onChangeText={setN3} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder='Digite o quarto número' onChangeText={setN4} keyboardType="numeric" />

        <View style={styles.botao}>
          <Button title='Calcular' onPress={media} />
        </View>

        <Text style={styles.resultado}>Resultado: {resultado}</Text>

        {/* Seção de Histórico */}
        <View style={styles.historico}>
          <Text style={styles.tituloHistorico}>Histórico de Notas:</Text>
          {historico.map((item, index) => (
            <Text key={index} style={styles.itemHistorico}>
              {index + 1}. {item.nota} - {item.status}
            </Text>
          ))}
        </View>
      </ScrollView>

 
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={alertTitle}
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#007AFF"
        onConfirmPressed={() => setShowAlert(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    width: 250,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  botao: {
    marginTop: 20,
    width: 150,
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#007AFF',
  },
  historico: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  tituloHistorico: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemHistorico: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

