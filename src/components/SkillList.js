import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function SkillList({ skill }) {
    return (
        <TouchableOpacity style={styles.buttonSkill} key={skill}>
            <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',

        padding: 15,
        borderRadius: 30,
        marginVertical: 10,
        alignItems: 'center',
    },
    textSkill: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
})