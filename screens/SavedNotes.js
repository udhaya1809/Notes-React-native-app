import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Saved() {
    return (
        <View style={styles.container}>
            <Text style={styles.common}>Saved notes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    common: {
        color: '#000'
    },
});