import { StyleSheet, Pressable } from 'react-native';
//import RNFetchBlob from 'rn-fetch-blob';

export default function Download() {
  /* function historyDownload() {
        if (Platform.OS === 'ios') {
          downloadHistory();
        } else {
          try {
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title:'storage title',
                message:'storage_permission',
              },
            ).then(granted => {
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Storage Permission Granted.');
                this.downloadHistory();
              } else {
               Alert.alert('storage_permission');
              }
            });
          } catch (err) {
            console.log('error', err);
          }
        }
      }
        function downloadHistory() {
        const { config, fs } = RNFetchBlob;
        let CVDir = fs.dirs.CVDir;
        let date = new Date();
        let options = {
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path:
              CVDir +
              './imgs/Alaa_casualCV.pdf' +
              Math.floor(date.getTime() + date.getSeconds() / 2),
            description: 'CV Download',
          },
        };
        config(options)
          .fetch('GET', url)
          .then((res) => {
            console.log('res -> ', JSON.stringify(res));
            alert('Report Downloaded Successfully.');
          });
      }
*/
return(
/*    <Pressable style={styles.btn} 
    onPress={() => {historyDownload()}}>
    DownLoad CV
    </Pressable>*/

    <Pressable style={styles.btn}>DownLoad CV</Pressable>
)
}

const styles = StyleSheet.create({ 
    btn:{ 
        backgroundColor:"#ecb52d", 
        borderRadius:4,
        borderColor:'#ecb52d',
        borderWidth:1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        color:'#ffe',
        marginTop: 30
    }
})