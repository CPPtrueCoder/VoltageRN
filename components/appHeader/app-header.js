import React from 'react'
import {Text,View ,StyleSheet} from 'react-native'
import {THEME} from "../theme";

export const AppHeader =()=>{
	return(
		<View style={styles.appContainer}>
		<Text style={styles.text}>
			Voltage Application
		</Text>
		
	</View>)
};


const styles = StyleSheet.create({
	
	appContainer:{
		flexDirection:'row',
		alignItems:"flex-end",
		justifyContent:'center',
		height:80,
		backgroundColor: "#800080"
	},
	text:{
		fontSize:THEME.TitleText.fontSize,
		fontWeight:'bold',
		color:'white',
		marginBottom:10
	}
	
	
});
