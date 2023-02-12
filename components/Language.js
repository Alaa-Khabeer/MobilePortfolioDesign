import { StyleSheet, View, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import React, { useState } from 'react';

export default function Lang() {
    const [langs, setLangs] = useState([
        {
            txt: 'Arabic',
            value: 0.9
        },
        { 
            txt: 'English',
            value: 0.8
        },
        {
            txt: 'French',
            value: 0.25
        } 
    ]);

    return (
        <View>
            <Text style={styles.title}>Languages</Text>
            
            {
             langs.map(lang =>{
              return(
                <View>
                    <Text style={styles.txt}>{lang.txt}</Text>
                    <ProgressBar progress={lang.value} color='#ecb52d' />
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