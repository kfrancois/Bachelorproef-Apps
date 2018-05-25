export default class Circle extends Component {
  render() {
    return <View style={styles.circle} />;
  }
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 50,
    padding: 50
  }
});
