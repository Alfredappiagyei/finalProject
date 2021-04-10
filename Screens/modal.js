import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function ModalSlide() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
   
    <View style={styles.centeredView}>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: { 
    backgroundColor: 'purple',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.80,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});