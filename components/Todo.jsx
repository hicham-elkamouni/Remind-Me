import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Checkbox} from './Checkbox'

export const Todo = ({id, text, isCompleted, isToday, hour}) => {
    
    
    return (
        <View style={styles.container}>
            <Checkbox id={id} isCompleted={isCompleted} text={text} isToday={isToday} hour={hour}/>
            <View>
                <Text style={styles.text}>{text}</Text>
                <Text style={styles.time}>{hour}</Text>
            </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        marginBottom : 20,
        flexDirection : 'row',
        alignItems : 'center',
    },
    text : {
        fontSize : 15,
        fontWeight : '500',
        color : '#737373',
    },
    time : {
        fontSize : 15,
        color : '#a3a3a3',
    },
    
});
