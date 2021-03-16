import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native'
import {SearchBar} from 'react-native-elements';
import Header from './Header'
import db from './config'


export default class ReadScreen extends React.Component{

constructor(){
super ();
this.state ={
allStories:[],
dataSource:[],
search : ''
}
}

componentDidMount(){
    this.retrieveStories()
  }

  updateSearch = search => {
    this.setState({ search });
  };



retrieveStories=()=>{
try {
var allStories= []
var stories = db.collection("stories").get().then((querySnapshot)=> {
 querySnapshot.forEach((doc)=> {
 // doc.data() is never undefined for query doc snapshots
allStories.push(doc.data())
})
this.setState({allStories})
})
}
catch (error) {
 console.log(error);
 }
  };

SearchFilterFunction(text){
const newData = this.state.allStories.filter((item)=>{
const itemData = item.title ? item.title.toUpperCase() : ''. toUpperCase();
const textData = text.toUpperCase();
return itemData.indexOf(textData) > -1;
})
this.setState({
dataSource: newData, search: text,
})
}

render(){
return(
<View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#FFE5B4'}}>
<Header/>

<View style = {{width:1920, margin:55}}>
<SearchBar placeholder= "Search a Book" onChangeText = {text => this.SearchFilterFunction(text)} onClear = {text=> this.SearchFilterFunction('')} value = {this.state.search} />
</View>

<FlatList data = {this.state.search===""? this.state.allStories: this.state.dataSource}
 renderItem={({ item }) => (
 <View style={styles.itemContainer}>
<Text>  Title: {item.title}</Text>
<Text>  Author : {item.author}</Text>
</View>
  )}
 keyExtractor={(item, index) => index.toString()}/>


</View>
)
}
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1
    },
    item: {
      backgroundColor: '#98C847',
      padding:10,
      marginVertical: 8,
      marginHorizontal: 16,
    
    },
    title: {
      fontSize: 32,
    },
    itemContainer: {
      width: 1920,
      padding:5,
      borderWidth: 2,
      borderColor: '#000080',
      justifyContent:'center',
      alignSelf: 'center',
      textAlign:'center'
    }
  });