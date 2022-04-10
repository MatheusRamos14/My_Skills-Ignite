import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string,
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            <Text style={styles.buttonText}>{title}</Text>
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