import React, { Component } from 'react';
import {Text,View,ScrollView} from 'react-native';
import CustomComponents from './CustomIcons'
import Layout from './Layout'

const defaultArray = ['options1', 'options2', 'options3','options4','options5','options6']
export default class passingPropsExample extends Component {
    constructor(props) {
        super(props)
    }
    state={
        isSelected:''
    }
    getState(value){
        this.setState({isSelected:value})
    }
    render(){
        return(
            <View style={{flex:1,paddingTop:100}}>
                <Text>Selected Option:{this.state.isSelected}</Text>
                <CustomComponents dataArray={defaultArray}
                                  selectedOption={2}
                                  getSelectedOption={this.getState.bind(this)}
                                  getCustomLayout={Layout}
                />
            </View>
        )
    }
}