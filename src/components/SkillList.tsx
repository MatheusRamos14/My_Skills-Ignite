import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface SkillListProps extends TouchableOpacityProps {
    skill: string,
}

export function SkillList({ skill, ...rest }: SkillListProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            {...rest}
        >
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