import * as React from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'

export default class App extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity style={Styles.to}>
                    <Text>This is awesome</Text>
                </TouchableOpacity>
                <Text>There also exists some form of cdn for react!</Text>
                <Text>JS is so vast</Text>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    to: {
        backgroundColor: "cyan",
        color: "black"
    }
})