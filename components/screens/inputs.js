import React from 'react'


import {TextInput,StyleSheet,View} from 'react-native'
import {THEME} from "../theme";


export   const Inputs = () =>{
	return(<View style={styles.container}>
		<TextInput style={styles.inputs}/>
		<TextInput style={styles.inputs}/>
		<TextInput style={styles.inputs}/>
		<TextInput style={styles.inputs}/>
		
	</View>)
	
	
	
} ;

const styles = StyleSheet.create({
	container :{
	flexDirection:'row',
		justifyContent:'space-around'
	},
	inputs:{
		marginBottom: 20,
		padding: 10,
		borderBottomColor: THEME.MAIN_COLOR,
		borderBottomWidth: 2,
		marginRight:10,
		width:"20%"
	}
});
