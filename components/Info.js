import { StyleSheet, View, Text} from 'react-native';
import React, { useState } from 'react';

export default function Info() {
    const [inf, setInf] = useState([
        {
            title: 'Age', 
            txt: 23
        }, 
        {
            title: 'Residence', 
            txt: 'EM'
        },
        {
            title: 'Freelancer', 
            txt: 'Available'
        },
        {
           title: 'Address', 
            txt: 'Minia, Egypt'
        }
    ]);
    return (
        <View style={styles.column}>
        {
        inf.map(i =>{
            return(
                <View style={styles.row}>
                    <Text style={styles.title}>{i.title}</Text>
                    <Text style={styles.txt}>{i.txt}</Text>
                </View>
            )
        })
        }
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:250,
    marginTop:20
  },
  column:{
    flexDirection: 'column'
  },
  title:{
    backgroundColor:'#ecb52d',
    padding: 8,
    color:'#ffe',
    fontSize:17,
    fontWeight:'bold'
  },
  txt:{
    padding:8,
    fontSize:17,
    fontWeight:'bold',
    color: '#ffe'
  }
});