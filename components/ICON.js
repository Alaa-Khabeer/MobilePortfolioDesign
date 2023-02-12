import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View,Pressable, Linking } from 'react-native';
import React, { useState } from 'react';

export default function IconList() {
    const [icons, setIcons] = useState([
        {
            name: 'facebook',
            link: 'https://web.facebook.com/alaa.khabeer.3'
        },
        { 
            name: 'twitter',
            link: 'https://twitter.com/AlaaAde23115394'
        }, 
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/alaa-khabeer/'
        },
        { 
            name: 'instagram',
            link: 'https://www.instagram.com/alaa.a.khabeer/'
        },
        { 
            name: 'whatsapp',
            link: 'https://web.whatsapp.com/'
        }
    ]);

    return (
        <View style={styles.IconContainer}>
        {
        icons.map(ico =>{
             return(
                <Pressable style={styles.btn} onPress={()=>{Linking.openURL(ico.link)}}>
                    <Icon name={ico.name} size={16} color="#ffe"/>
                </Pressable>
                 )
            })
        }
        </View>
    )
}

const styles = StyleSheet.create({ 
    btn:{ 
        backgroundColor:"#ecb52d", 
        borderRadius:100,
        borderColor:'#ecb52d',
        borderWidth:1,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    IconContainer:{
        flexDirection:'row', 
        marginTop:20,
        width:240,
        justifyContent: 'space-between'
    }
  });