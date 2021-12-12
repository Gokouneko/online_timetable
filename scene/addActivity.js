import React, { Component } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { NavigationPage, ListRow, Input, Select, Label } from 'teaset';

let { height, width } = Dimensions.get('window');

export const m1 = new Map();
export const m2 = new Map();
export const m3 = new Map();
export let count = 1;

export default class InputExample extends Component {


  constructor(props) {
    super(props);
    this.items = [
      'None',
      'At time of activity',
      '5 minutes before',
      '15 minutes before',
      '30 minutes before',
      '1 hour before',
      '2 hours before',
      '1 day before',
      '2 days before',
      '1 week before',
    ];
    this.state = {
      value: '',
    }
    Object.assign(this.state, {
      valueAlert: null,
    });

  }

  title = '';
  label = '';
  time = '';
  date = '';
  location = '';
  member = '';
  note = '';


  onTitleChanged = (newTitle) => {
    console.log(newTitle);
    this.title = newTitle;
  };
  onLabelChanged = (newlabel) => {
    console.log(newlabel);
    this.label = newlabel;
  };
  onTimeChanged = (newTime) => {
    console.log(newTime);
    this.time = newTime;
  };
  onDateChanged = (newDate) => {
    console.log(newDate);
    this.date = newDate;
  };
  onLocationChanged = (newLocation) => {
    console.log(newLocation);
    this.location = newLocation;
  };
  onMemberChanged = (newMember) => {
    console.log(newMember);
    this.member = newMember;
  };
  onNoteChanged = (newNote) => {
    console.log(newNote);
    this.note = newNote;
  };

  homeScene = () => {
    if (count == 1) {
      m1.set("title", this.title);
      m1.set("label", this.label);
      m1.set("time", this.time);
      m1.set("date", this.date);
      m1.set("location", this.location);
      m1.set("member", this.member);
      m1.set("note", this.note);
      count = 2;
    }
    else if (count == 2) {
      m2.set("title", this.title);
      m2.set("label", this.label);
      m2.set("time", this.time);
      m2.set("date", this.date);
      m2.set("location", this.location);
      m2.set("member", this.member);
      m2.set("note", this.note);
      count = 3;
    }
    else if (count == 3) {
      m3.set("title", this.title);
      m3.set("label", this.label);
      m3.set("time", this.time);
      m3.set("date", this.date);
      m3.set("location", this.location);
      m3.set("member", this.member);
      m3.set("note", this.note);
    }

    const { navigation } = this.props;
    navigation.goBack();
    navigation.state.params.onSelect({ selected: true });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow title='Title *' detail={
          <Input
            style={{ width: 200 }}
            size='md'
            placeholder=''
            onChangeText={this.onTitleChanged}
          />
        } topSeparator='full' />
        <ListRow title='Custom label *' detail={
          <Input
            style={{ width: 200 }}
            size='md'
            placeholder=''
            onChangeText={this.onLabelChanged}
          />
        } bottomSeparator='full' />
        <View style={{ height: 20 }} />
        <ListRow title='Time' detail={
          <Input
            style={{ width: 200 }}
            size='md'
            placeholder=''
            onChangeText={this.onTimeChanged}
          />
        } topSeparator='full' />
        <ListRow title='Date' detail={
          <Input
            style={{ width: 200 }}
            size='md'
            placeholder=''
            onChangeText={this.onDateChanged}
          />
        } />
        <ListRow title='Location' detail={
          <Input
            style={{ width: 200 }}
            size='md'
            placeholder=''
            onChangeText={this.onLocationChanged}
          />
        } />
        <ListRow title='Member' detail={
          <Input
            style={{ width: 200 }}
            size='md'
            placeholder=''
            onChangeText={this.onMemberChanged}
          />
        } />

        <ListRow title='Alert' detail={
          <Select
            style={{ width: 200 }}
            size='md'
            items={this.items}
            placeholder='None'
            pickerTitle='Select'
            onSelected={(item, index) => this.setState({ valueAlert: item })}
          />
        } bottomSeparator='full' />

        <View style={{ height: 20 }} />
        <ListRow title='Note' detail={
          <Input
            style={{ width: 200, height: 100, backgroundColor: '#rgba(238, 169, 91, 0.1)', borderColor: '#8a6d3b', color: '#8a6d3b', textAlign: 'right' }}
            placeholder=''
            onChangeText={this.onNoteChanged}
          />
        } topSeparator='full' bottomSeparator='full' />
        <TouchableOpacity
          onPress={this.homeScene}
          style={styles.button}>
          <Text
            style={styles.btText}>Confirm</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  actContainer: {
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  actList: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    height: 50,
    alignItems: 'center'
  },
  actList2: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  actTitle: {
    width: 50,
  },
  actTitle2: {
    marginTop: 10,
    marginLeft: 8,
  },
  actTitleText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#666'
  },
  actListContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    height: 50,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F08080',
    marginTop: 20,
  },
  btText: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    width: 200,
    height: 40,
    fontSize: 20,
    color: '#fff',
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#DCDCDC',
    marginBottom: 8,
  },
});