import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Result = ({route}) => {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text style={styles.text}>Üye Adı: {user.userName}</Text>
      <Text style={styles.text}>Üye Soyadı: {user.userSurname}</Text>
      <Text style={styles.text}>Üye Yaşı: {user.userAge}</Text>
      <Text style={styles.text}>Üye Mail: {user.userEmail}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    margin: 5,
  },
});
export default Result;
