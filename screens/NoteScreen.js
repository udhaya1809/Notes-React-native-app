import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function Notes() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <TextInput
            multiline
            placeholder= 'Tap Here'
            style={styles.input}
            >
            </TextInput>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        paddingHorizontal: 20,
    },
});