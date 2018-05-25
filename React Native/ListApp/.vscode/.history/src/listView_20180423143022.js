import { React, Component } from "react";
import { View, ListView } from "react-native";
import items from './items'

export default class ListView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListView 
            dataSource={}
            renderRow={

            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
  }
});
