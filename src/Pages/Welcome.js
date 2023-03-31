import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Button from '../Components/Button';

const Welcome = ({navigation}) => {
  const gotoSign = () => {
    navigation.navigate('SignScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>K Fitness</Text>
      <Button text="Üye Kaydı Oluştur" onPress={gotoSign} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});
export default Welcome;
