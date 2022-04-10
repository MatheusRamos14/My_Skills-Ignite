import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { SkillList } from '../../components/SkillList';

import { styles } from './styles';

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [allSkills, setAllSkills] = useState([])
    const [greetings, setGreetings] = useState('')

    function handleAddNewSkill() {
        setAllSkills(prevSkills => [...prevSkills, newSkill])
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
                    onChangeText={setNewSkill}
                />
                
                <Button onPress={handleAddNewSkill}/>

                <Text style={[styles.title, { marginVertical: 30 }]}>
                    My Skills
                </Text>

                <FlatList
                    data={allSkills}
                    keyExtractor={item => item}
                    renderItem={({ item }) => <SkillList skill={item}/>}
                />

            </View>
        </SafeAreaView>
    );
}