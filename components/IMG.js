import { StyleSheet, Image} from 'react-native';

export default function IMG() {
    return (        
    <Image source={require('./imgs/myPhoto.jpg')} style={styles.Image}/>
    );
}

const styles = StyleSheet.create({ 
    Image:{
        width: 145, 
        height: 145,
        borderRadius:100,
        marginTop:50, 
        marginBottom:26, 
        borderColor:'#ecb52d', 
        borderWidth:2
    },
});