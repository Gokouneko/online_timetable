/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

let { width, height } = Dimensions.get('window');

export default class LeftMenu extends Component {
    constructor(props) {
        super(props);

        this.selectSideMenu = this.selectSideMenu.bind(this);
    }


    //函数回调
    selectSideMenu() {
        this.props.onSelectMenuItem();
    }

    Chat = () => {
        const { navigate } = this.props.navigation;  //获取navigation的navigate方法
        navigate('Chat');  //跳转到注册过的Register界面
    }
    render() {
        

        return (
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.label1}>
                    <Text
                        style={styles.btText2}>Online</Text>
                </View>
                <TouchableOpacity
                    onPress={this.Chat.bind(this)} //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>student1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.Chat.bind(this)} //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>student2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.Chat.bind(this)} //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>student3</Text>
                </TouchableOpacity>


                <View style={styles.label2}>
                    <Text
                        style={styles.btText3}>Offline</Text>
                </View>
                <TouchableOpacity
                    onPress={this.Chat.bind(this)} //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>student4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.Chat.bind(this)} //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>student5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.Chat.bind(this)} //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>student6</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.Chat.bind(this)} //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>student7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.Chat.bind(this)} //添加点击事件
                    style={styles.button}>
                    <Text
                        style={styles.btText}>student8</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    button: {
        top: 10,
        height: 50,
        width: 0.75 * width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderBottomWidth: 1,
    },
    label1: {
        top: 10,
        height: 50,
        width: 0.75 * width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderBottomWidth: 1,
    },
    
    label2: {
        top: 10,
        height: 50,
        width: 0.75 * width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        marginTop: 50, 
    },
    btText: {
        color: '#000000',
        fontSize: 20,
    },
    btText2: {
        color: '#00FF7F',
        fontSize: 20,
        fontWeight: 'bold',
    },
    btText3: {
        color: '#BEBEBE',
        fontSize: 20,
        fontWeight: 'bold',
    }

});

AppRegistry.registerComponent('ThirdPartyToolTest', () => LeftMenu);