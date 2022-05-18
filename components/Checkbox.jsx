import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Checkbox = ({isCompleted}) => {
    

  return (
    <TouchableOpacity style={isCompleted ? styles.checked : styles.unChecked}>
        {isCompleted &&  <Ionicons name="checkmark" size={16} color="#FAFAFA" />}
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    checked: {
        width : 20,
        height : 20,
        marginRight : 13,
        borderRaduis : 6,
        backgroundColor : "#262626",
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : 15,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.3,
        shadowRadius : 5,
        elevation : 5,
    },
    unChecked: {
        width : 20,
        height : 20,
        marginRight : 13,
        borderRaduis : 6,
        backgroundColor : "#262626",
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : 15,
        shadowColor : '#000',
        shadowOffset : {
            width : 4,
            height : 2,
        },
        shadowOpacity : 0.3,
        shadowRadius : 5,
        elevation : 5,
    }
})