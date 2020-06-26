import React from 'react'
import {View,Button,StyleSheet} from 'react-native'
import {THEME} from "../theme";



export const NavBar =()=>{
	
	return (
		<View style={styles.navMenu}>
			<Button color="orange"   title="Connect"/>
			<Button color="orange"  title="Params"/>
			<Button color="orange"  title="Graphs"/>
			<Button color="orange"    title ="Alert"/>
			<Button color="orange"  title="Passport"/>
		</View>
	)
	
	
};

const styles = StyleSheet.create ({
navMenu:{
	flexDirection:'row',
	width:"100%",
	height:70,
	alignItems:'center',
	justifyContent:'space-around',
	backgroundColor:THEME.MAIN_COLOR
},
	button:{
	
	}

});

