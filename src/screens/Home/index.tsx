import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { SkillList } from '../../components/SkillList';

import { styles } from './styles';

interface SkillData {
    id: string,
    name: string
}

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [allSkills, setAllSkills] = useState<SkillData[]>([])
    const [greetings, setGreetings] = useState('')

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setAllSkills(prevSkills => [...prevSkills, data])
        setNewSkill('')
    }

    function handleRemoveSkill(itemId: string) {
        setAllSkills(oldSkills => oldSkills.filter(skill => skill.id !== itemId))
    }

    useEffect(() => {
        const hours = new Date().getHours();

        if (hours < 12)
            setGreetings('Good morning!')
        else if (hours >= 12 && hours < 18)
            setGreetings('Good afternoon!')
        else
            setGreetings('Good night!')
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, Matheus!</Text>

                <Text style={styles.greetings}>{greetings}</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui sua skill"
                    placeholderTextColor="#555"
                    value={newSkill}
                    onChangeText={setNewSkill}
                />

                <Button
                    title="Add"
                    onPress={handleAddNewSkill}
                    activeOpacity={.7}
                />

                <Text style={[styles.title, { marginVertical: 30 }]}>
                    My Skills
                </Text>

                <FlatList
                    data={allSkills}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <SkillList
                            skill={item.name}
                            onPress={() => handleRemoveSkill(item.id)}
                        />
                    )}
                />

            </View>
        </SafeAreaView>
    );
}