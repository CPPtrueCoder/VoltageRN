import React from 'react'

import {Text,View,ActivityIndicator,TextInput,StyleSheet} from 'react-native'
import {THEME} from "../theme";


export const Params =()=>{
	return(
	<View style={styles.container}>
		<Text style={THEME.UnderText}>Температура 1</Text>
		<ActivityIndicator size='large' color='red'/>
		<TextInput style={styles.inputs}/>
		<Text style={THEME.UnderText}>C</Text>
	</View>)
	
	
};
const styles=StyleSheet.create({
	container:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems:'center'
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

