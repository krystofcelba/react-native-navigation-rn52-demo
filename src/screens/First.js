import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

class First extends React.PureComponent {
  showModal = () => {};

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ backgroundColor: '#F44336', padding: 10, width: 100 }}
          onPress={() => {
            throw Error('Error!');
          }}
        >
          <Text>Error!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#039BE5',
            padding: 10,
            width: 100,
          }}
          onPress={() => {
            this.props.navigator.showModal({
              screen: 'example.Second',
              title: 'Modal',
            });
          }}
        >
          <Text>Show modal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#039BE5',
            padding: 10,
            width: 100,
          }}
          onPress={() => {
            this.props.navigator.push({
              screen: 'example.Second',
              title: 'Push',
            });
          }}
        >
          <Text>Push screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default First;
