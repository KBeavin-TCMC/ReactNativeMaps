import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function MapSaveButton(props) {
    return (
        <View style={styles.saveButton}>
            <Button title="S" onPress={() => console.log("Foo")} />
            {/* <Button title="R" onPress={() => retrieveData()} /> */}
        </View>
    );
}

// const saveDataAsync = async () => { // using async storage may com in useful later to set session token
//     try{
//         await AsyncStorage.setItem(
//             '@MySuperStore:key',
//             'I like to save it.'
//         );
        
//         console.log("Yay I did it!!!....");
//     } 
//     catch (error) {
//         console.log(error);
//         console.log("You Failed!!!....");
//     }
// };

// const retrieveData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('@MySuperStore:key');
//       if (value !== null) {
//         // We have data!!
//         console.log(value);
//       }
//     } catch (error) {
//       console.log(error);
//       console.log("You Failed!!!...")
//     }
// };

const styles = StyleSheet.create({
    saveButton: {
        //flex: 1,
    },
});

export default MapSaveButton;