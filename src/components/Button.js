import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#AE70F7',
        borderRadius: 8,
        alignItems: 'center',

        marginTop: 20,
        padding: 15,
    },
    buttonText: {
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold',
    },
})