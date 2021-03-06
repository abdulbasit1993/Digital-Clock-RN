import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    color: '#999999',
    fontSize: 68,
  },
  dateText: {
    color: '#999999',
    fontSize: 40,
    textAlign: 'center',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: moment().format('LTS'),
      date: moment().format('LL'),
    };
  }

  render() {
    setTimeout(() => {
      this.setState({
        time: moment().format('LTS'),
        date: moment().format('LL'),
      });
    }, 1000);

    return (
      <View style={styles.container}>
        <Text style={styles.timeText}>{this.state.time}</Text>
        <Text style={styles.dateText}>{this.state.date}</Text>
      </View>
    );
  }
}

export default App;
