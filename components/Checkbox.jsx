import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Checkbox = ({id , text, isCompleted, isToday, hour }) => {
    

  return isToday ? (
    <TouchableOpacity style={isCompleted ? styles.checked : styles.unChecked}>
        {isCompleted &&  <Ionicons name="checkmark" size={16} color="#FAFAFA" />}
    </TouchableOpacity>
    ) : (
        <View style={styles.isToday}/>
    )
}   

const styles = StyleSheet.create({
    checked: {
        width : 20,
        height : 20,
        borderRadius : 6,
        marginRight : 13,
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
        borderRadius: 6,
        marginRight : 13,
        borderColor : '#E8E8E8',
        backgroundColor : "#FFF",
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
    },
    isToday: {
        width : 10,
        height : 10,
        borderRadius : 10,
        marginHorizontal : 10,
        backgroundColor : "#262626",
        marginRight : 13,
        marginLeft : 15,
    }

})