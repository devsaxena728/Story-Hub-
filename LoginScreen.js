import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'

export default class LoginScreen extends React.Component {
constructor(){
super();
this.state = {email: "", password:""}
}

showAlert(errorCode) {
switch (errorCode){
case 'auth/too-many-requests': Alert.alert('Please try again later.')
this.setState({
email:"",
password:""
})
case 'auth/wrong-password': Alert.alert ('Incorrect email/password')
this.setState({
password:"",
email:""
})
case 'auth/user-not-found' : Alert.alert("User does not exist")
this.setState({
password:"",
email:""
})
}
}

render(){
return(
<View style = {styles.container}>
<View>
<View>
<Text style = {styles.text1}>StoryHub: Bedtime Stories</Text>
</View>

<View>
<Image
source={require("./assets/bed.jpg")}
style={{width:500, height: 500,marginLeft:720}}/>
</View>

<TextInput style = {styles.textBox} placeholder = "Enter Email(abc@example.com)" onChangeText={(emailText)=>{
this.setState({
email:emailText
})
}} value={this.state.email}/>

<TextInput style = {styles.textBox} placeholder = "Enter Password" onChangeText={(passwordText)=>{
this.setState({
password:passwordText
})
}} value={this.state.password} secureTextEntry = {true}/>
</View>

<View>
<TouchableOpacity style = {styles.button} onPress = {async()=>{
var email = await this.state.email;
var password = await this.state.password
firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
this.props.navigation.navigate('WriteStory') }).catch((error)=>{
var errorCode = error.code;
var errorMessage = error.message;
return this.showAlert(error)
})
}}>
<Text style = {styles.buttonText}>Login!</Text>
</TouchableOpacity>
</View>
</View>
)
}

}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#FFE5B4',
marginLeft:-55
},
      
text1:{
fontWeight:"normal",
fontSize:43,
padding:10,
alignContent:'center',
color:'black',
textAlign:'center'
},
     
textBox : {
width:"70%",
height: 40,
borderWidth:2,
borderColor:'black',
padding:10,
marginBottom:30,
borderRadius:10,
marginLeft:320
},

button:{
borderWidth:2,
width:900,
marginLeft:550,
borderRadius:9,
height:40
},

buttonText:{
fontFamily: 'Times New Roman',
marginLeft:400,
fontSize:20,
}
})

