import { StyleSheet, Text } from 'react-native';
import IconList from './ICON';
import IMG from './IMG';

export default function Head() {
    return (
      <>
        <IMG/>
        <Text style={{fontWeight: 'bold', fontSize:25, color:'#ecb52d'}}>Alaa Khabeer</Text>
        <Text style={{fontSize:17, color:'#ffe'}}>Front-End Developer</Text>
        <IconList/>
      </>
    );
}

const styles = StyleSheet.create({ 
    
  });
  