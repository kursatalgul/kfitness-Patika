import React, {useState} from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Input from '../Input/Input';
import Button from '../Components/Button';

const Sign = ({navigation}) => {
  const [userName, setuserName] = useState(null);
  const [userSurname, setuserSurname] = useState(null);
  const [userEmail, setuserEmail] = useState(null);
  const [userAge, setuserAge] = useState(null);

  const handleSubmit = () => {
    if (!userSurname || !userEmail || !userAge || !userName) {
      Alert.alert('K Fitness', 'Boş Bırakılamaz');
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userEmail,
    };
    navigation.navigate('Members', {user});
  };

  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder="Üye Adı Giriniz."
        onChangeText={setuserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üye Soyadı Giriniz."
        onChangeText={setuserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üye Yaşı Giriniz."
        onChangeText={setuserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üye E-posta Giriniz."
        onChangeText={setuserEmail}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default Sign;
