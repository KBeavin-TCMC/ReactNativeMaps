import React from 'react';
import { View, Text, Button } from 'react-native';
import config from '../config';

const HomeScreen = ({ navigation }) => {
    return (
        <View>

            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />
            <Button
                title="Go to the Map"
                onPress={() =>
                    navigation.navigate('Map')
                }
            />
            <Button
                title="Go to the Map2"
                onPress={() =>
                    navigation.navigate('Map2')
                }
            />
            <Text>{config.REACT_APP_API_KEY}</Text>
            <Text>{config.MAP_KEY}</Text>
        </View>
    );
};

export default HomeScreen;