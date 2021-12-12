/**
 * Created by mymac on 2017/4/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { m1, m2, m3 } from './addActivity';

let { width, height } = Dimensions.get('window');



import SideMenu from 'react-native-side-menu'
import Menu from './LeftMenu'


export default class LeftSideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            selected: false,
        }

        this.SelectMenuItemCallBack = this.SelectMenuItemCallBack.bind(this);
    }


    //点击侧边栏的按钮，回调此函数，关闭menu
    SelectMenuItemCallBack() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    //点击打开侧边栏
    SelectToOpenLeftSideMenu() {
        this.setState({
            isOpen: true,
        })
    }

    timetable = () => {
        const { navigate } = this.props.navigation;  //获取navigation的navigate方法
        navigate('Timetable');  //跳转到注册过的Register界面
    }

    Chat = () => {
        const { navigate } = this.props.navigation;  //获取navigation的navigate方法
        navigate('Chat');  //跳转到注册过的Register界面
    }

    onSelect = data => {
        this.setState(data);
    }

    add = () => {
        const { navigate } = this.props.navigation;  //获取navigation的navigate方法
        navigate('Add', { onSelect: this.onSelect });  //跳转到注册过的Register界面
    }




    render() {

        //初始化menu，传递回调函数
        const menu = <Menu onSelectMenuItem={this.SelectMenuItemCallBack} navigation={this.props.navigation} />;
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => {
                    this.setState({
                        isOpen: isOpen,
                    })
                }}
                menuPosition={'left'}
                openMenuOffset={0.75 * width}
                edgeHitWidth={200}

            >

                <View
                    style={styles.top}>

                    <TouchableOpacity
                        onPress={() => this.SelectToOpenLeftSideMenu()}
                        style={styles.Fbutton} >
                        <Text
                            style={styles.btText}>F</Text>
                    </TouchableOpacity>

                    <View
                        style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            autoCapitalize='none'  //设置首字母不自动大写
                            underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                            placeholderTextColor={'#fff'}  //设置占位符颜色
                            placeholder={'query'}  //设置占位符
                        />
                    </View>


                    <TouchableOpacity
                        onPress={this.timetable}  //添加点击事件
                        style={styles.Tbutton}>
                        <Text
                            style={styles.btText}>T</Text>
                    </TouchableOpacity>


                </View>


                <View style={styles.container}>
                    <View style={styles.title}>
                        <View style={styles.titleView1}>
                            <Text
                                style={styles.btText3}> Activity list</Text>
                        </View>
                        <TouchableOpacity
                            onPress={this.add}
                            style={styles.titleView2}>
                            <Text
                                style={styles.btText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.activity}>
                        <View style={styles.row1}>

                            <View style={styles.time}>
                                <View style={styles.time1}>
                                    <Text
                                        style={styles.text1}>{m1.get("time")}</Text>
                                </View>
                                <View style={styles.time2}>
                                    <Text
                                        style={styles.text4}>{m1.get("date")}</Text>
                                </View>
                            </View>

                            <View style={styles.name}>
                                <Text
                                    style={styles.text2}>{m1.get("title")}</Text></View>
                            <View style={styles.label}>
                                <Text
                                    style={styles.text3}>{m1.get("label")}</Text></View>

                        </View>
                        <View style={styles.row2}>
                            <View style={styles.location}>
                                <Text
                                    style={styles.text6}>{m1.get("location")}</Text></View>
                            <View style={styles.member}>
                                <Text
                                    style={styles.text5}>{m1.get("member")}</Text></View>
                        </View>
                    </View>

                    <View style={styles.activity}>
                        <View style={styles.row1}>

                            <View style={styles.time}>
                                <View style={styles.time1}>
                                    <Text
                                        style={styles.text1}>{m2.get("time")}</Text>
                                </View>
                                <View style={styles.time2}>
                                    <Text
                                        style={styles.text4}>{m2.get("date")}</Text>
                                </View>
                            </View>

                            <View style={styles.name}>
                                <Text
                                    style={styles.text2}>{m2.get("title")}</Text></View>
                            <View style={styles.label}>
                                <Text
                                    style={styles.text3}>{m2.get("label")}</Text></View>

                        </View>
                        <View style={styles.row2}>
                            <View style={styles.location}>
                                <Text
                                    style={styles.text6}>{m2.get("location")}</Text></View>
                            <View style={styles.member}>
                                <Text
                                    style={styles.text5}>{m2.get("member")}</Text></View>
                        </View>
                    </View>

                    <View style={styles.activity}>
                        <View style={styles.row1}>

                            <View style={styles.time}>
                                <View style={styles.time1}>
                                    <Text
                                        style={styles.text1}>{m3.get("time")}</Text>
                                </View>
                                <View style={styles.time2}>
                                    <Text
                                        style={styles.text4}>{m3.get("date")}</Text>
                                </View>
                            </View>

                            <View style={styles.name}>
                                <Text
                                    style={styles.text2}>{m3.get("title")}</Text></View>
                            <View style={styles.label}>
                                <Text
                                    style={styles.text3}>{m3.get("label")}</Text></View>

                        </View>
                        <View style={styles.row2}>
                            <View style={styles.location}>
                                <Text
                                    style={styles.text6}>{m3.get("location")}</Text></View>
                            <View style={styles.member}>
                                <Text
                                    style={styles.text5}>{m3.get("member")}</Text></View>
                        </View>
                    </View>




                    
                </View>

            </SideMenu>

        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        top: 5,
        flexDirection: 'row',
        width: width,
        height: 20,
    },
    activity: {
        flexDirection: 'column',
        width: width - 5,
        height: 160,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        borderColor: '#708090',
        borderWidth: 2,
        marginTop: 10,

    },
    input: {
        width: width * 0.5,
        height: 40,
        fontSize: 20,
        color: '#fff',
    },
    inputBox: {
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.5,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#DCDCDC',
        marginBottom: 8,
        marginLeft: width * 0.05,
    },
    top: {
        flexDirection: 'row',
        flex: 1,
        height: 50,
        borderBottomWidth: 2,
        backgroundColor: "#FFFFFF",
    },
    Tbutton: {
        top: 10,
        marginLeft: width * 0.05,
        height: 50,
        width: width * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#6495ED',
    },
    Fbutton: {
        top: 10,
        left: width * 0.05,
        height: 50,
        width: width * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#7B68EE',
        marginRight: width * 0.05,
    },

    Addbutton: {
        top: 10,
        left: -140,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#000000',
    },


    btText: {
        color: '#fff',
        fontSize: 20,
    },

    btText2: {
        color: '#fff',
        fontSize: 50,
    },

    btText3: {
        color: '#000000',
        fontSize: 20,
    },
    row1: {
        height: 100,
        width: width - 5,
        flexDirection: 'row',
        borderRadius: 10,
    },
    row2: {
        height: 60,
        width: width - 5,
        flexDirection: 'row',
        borderRadius: 10,
    },
    time: {
        flexDirection: 'column',
        height: 100,
        width: (width - 5) * 0.4,
        justifyContent: 'center',
        borderRadius: 10,
    },
    time1: {
        height: 70,
        width: (width - 5) * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    name: {
        height: 100,
        width: (width - 5) * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    label: {
        height: 100,
        width: (width - 5) * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    time2: {
        height: 30,
        width: (width - 5) * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    location: {
        height: 60,
        width: (width - 5) * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    member: {
        height: 60,
        width: (width - 5) * 0.6,
        justifyContent: 'center',
        borderRadius: 10,
    },
    titleView1: {
        height: 20,
        width: width * 0.6,
        justifyContent: 'center',
    },
    titleView2: {
        left:width*0.2,
        height: 20,
        width: width * 0.2-4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3030',
        borderRadius: 4,
    },
    text1: {
        color: '#000',
        fontSize: 50,

    },
    text2: {
        color: '#000',
        fontSize: 23,

    },
    text3: {
        color: '#778899',
        fontSize: 15,

    },
    text4: {
        color: '#708090',
        fontSize: 20,

    },
    text5: {
        color: '#000000',
        fontSize: 20,

    },
    text6: {
        color: '#696969',
        fontSize: 20,

    },
});

AppRegistry.registerComponent('ThirdPartyToolTest', () => LeftSideMenu);
