import React, { Component } from 'react';
import { ListView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {
  // state = { library: [] };

  // componentWillMount() {
  //   this.setState({ library: this.props })
  // }
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
  // render() {
  //   return (
  //     <FlatList
  //       data={this.state.library}
  //       renderItem={({ item }) =>
  //         <ListItem library={item.id} />
  //       }
  //     />
  //   )
  // }
}

const mapStateToProps = state => {
  console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);