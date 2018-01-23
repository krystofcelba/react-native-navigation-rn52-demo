import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

class Second extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ backgroundColor: '#F44336', padding: 10 }}
          onPress={() => {
            throw Error('Error!');
          }}
        >
          <Text>Error!</Text>
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
    backgroundColor: '#D4E157',
  },
});

export default Second;
