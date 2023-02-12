import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Extra() {
    const [skills, setSkills] = useState([
        {
            txt: 'Bootstrap',
            id: 1
        },
        { 
            txt: 'Sass',
            id: 2
        },
        {
            txt: 'Gulp, Webpack',
            id: 3
        },
        {
            txt: 'Git, GitHub',
            id: 4
        },
        {
            txt: 'Photoshop',
            id: 5
        }  
    ]);

    return (
        <View>
            <Text style={styles.title}>Extra Skills</Text>
            
            {
             skills.map(skill =>{
              return(
                <View>
                    <Text style={styles.txt}>
                    <Icon name='rocket' size={16} color="#ecb52d" style={{marginRight:15}}/>
                    {skill.txt}
                    </Text>
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