import React from 'react';
import {Text, View, StyleSheet, TextInput, KeyboardAvoidingView, ToastAndroid} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from './Header'
import db from './config'


export default class WriteScreen extends React.Component{

constructor(props){
super(props);
this.state={
  title: '',
  author: '',
  writeText: '',
}
}

submitStory = () => {
  db.collection ("stories").add({
    title: this.state.title,
    author: this.state.author,
    writeText: this.state. writeText,
  })
  this.setState({
    title: '',
    author: '',
   writeText: ''
  })
  /*Shows an alert for only a duration of time.
  ToastAndroid.show('Your story has been submitted. Please refresh your page to see your story on the read screen!', ToastAndroid.SHORT)*/
  }
    
render(){
return(
<View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#FFE5B4'}}>

<Header/>


<KeyboardAvoidingView style = {styles.container} /*This is a prop*/behavior= "padding" enabled/>

<TextInput style={styles.inputBox} placeholder="Title of Your Story"   onChangeText= {(text)=>{ this.setState({title: text})}} value={this.state.title} />
<TextInput style={styles.inputBox2} placeholder="Author" onChangeText= {(text)=>{ this.setState({author: text})}} value={this.state.author}/>
<TextInput style={styles.inputBox3}  placeholder="Write Your Story" onChangeText= {(text)=>{ this.setState({writeText: text})}} value={this.state.writeText} multiline={true}/>

<TouchableOpacity onPress = {this.submitStory}>
<Text style = {styles.subMit}>Submit!</Text>
</TouchableOpacity>
</View>
)
}
}






const styles = StyleSheet.create({
inText:{
fontSize:30,
color: 'blue',
fontWeight: 'bold',
},
inputBox:{
width: 800,
height: 40,
borderWidth: 1.5,
fontSize: 20,
marginBottom:50,
margin:80

  },

inputBox2:{
width: 800,
height: 40,
borderWidth: 1.5,
fontSize: 20,
marginBottom:50,
 },

inputBox3:{
width: 800,
height: 300,
borderWidth: 1.5,
fontSize: 20,
marginBottom:50,
marginTop:20
},

subMit:{
textAlign: 'center',
color: 'white',
fontWeight: 'bold',
justifyContent: 'center',
alignSelf: 'center',
backgroundColor: '#000080',
width: 100,
height: 40,
fontSize:20
}
})