import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import data from './pokemons.json'

class PokemonList extends Component {
  state={ pokemons: [] };

  componentWillMount() {
    this.setState({ pokemons: data});
  }

  render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.pokemons}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
      </View>
    );
  }

}

const styles =({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default PokemonList;