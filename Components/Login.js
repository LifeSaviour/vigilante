import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import firebase from '../Config/Firebase';

class App extends Component {
constructor(){
    super();
    this.state={
username:"",
password:""
    }
}


getusername=(e)=>{
this.setState({username:e.target.value})
}

getpassword=(e)=>{
    this.setState({password:e.target.value})
}

render(){
    return(
        <View>
            <Text>Please Login First</Text>
            <TextInput placeholder="Enter Username" onChangeText={(e)=>this.setState({username:e})}></TextInput>
            <TextInput placeholder="Enter Password" onChangeText={(e)=>this.setState({password:e})}></TextInput>
            <Text>{this.state.username}</Text>
            <Button title="Login"/>
        </View>
    )
}
}
export default App;