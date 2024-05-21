import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class TaskList extends Component {
    render(){
        return(
            <View style = {styles.container}>
                 <Text>Lista de Tarefas </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1 // Usado para conduzir (Adaptar o tamanho) nosso layout
    }
})