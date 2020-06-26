import React from 'react'
import {View, TextInput, Text, StyleSheet} from 'react-native'

import {Indicator} from "./indicator";
import {THEME} from "./theme";

export const ItemAlert = () => {
	return (
		<View style={styles.container}>
			<Text>1</Text>
			<TextInput style={styles.inputs}/>
			<TextInput style={styles.inputs}/>
			<Indicator/>
			<TextInput style={styles.inputs}/>
			<Text>C</Text>
		</View>
	)
	
};

const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		alignItems:'center',
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
