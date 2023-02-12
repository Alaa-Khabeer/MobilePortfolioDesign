import { StyleSheet, View} from 'react-native';
export default function Hr() {
    return (
        <View style={styles.hairline} />
    );
}

const styles = StyleSheet.create({
    hairline: {
        backgroundColor: '#ffe',
        height: 4,
        width: 260,
        marginTop:40
    }, 
});