import React, { Component } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import data from './pokemons.json'
import Images from './Images'

class PokemonList extends Component {
  state={ pokemons: [] };

  componentWillMount() {
    this.setState({ pokemons: data});
  }

  render() {
    const img = Images;
    console.log("images are: ",img)

    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.pokemons}
          
          renderItem={({item}) => 
            <View>
              <Image
                  source={{ uri: 'asset:/1.png'}}
                style={{width: 50, height: 50, flex: 1}}
              />
              <Image
                  source={require('../images/4.png')}
                style={{width: 50, height: 50, flex: 1}}
              />
              {/* <Image
                  source={img[item.id]}
                style={{width: 50, height: 50, flex: 1}}
              /> */}
              <Text style={styles.item}>{item.name}</Text>
            </View>
            }
            keyExtractor={item => item.id}
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