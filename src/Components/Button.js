import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ButtonStyle';

const Button =  ({onPress, text}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
    )
};

export default Button;