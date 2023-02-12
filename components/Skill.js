import { StyleSheet, View, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import React, { useState } from 'react';

export default function Skill() {
    const [skills, setSkills] = useState([
        {
            txt: 'HTML',
            value: 0.95
        },
        { 
            txt: 'CSS',
            value: 0.85
        },
        {
            txt: 'JS',
            value: 0.8
        },
        {
            txt: 'ReactJS',
            value: 0.75
        },
        {
            txt: 'Angular',
            value: 0.7
        }  
    ]);

    return (
        <View>
            <Text style={styles.title}>Skills</Text>
            
            {
             skills.map(skill =>{
              return(
                <View>
                    <Text style={styles.txt}>{skill.txt}</Text>
                    <ProgressBar progress={skill.value} color='#ecb52d' />
                </View>
            )
            })
            }

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight:'bold',
        fontSize: 20,
        textAlign:'left',
        width:236,
        marginTop: 15,
        color:'#ecb52d'
    }, 
    txt:{
        fontWeight: 'bold',
        marginTop:15,
        marginBottom:10,
        color:'#ffe'
    }
});