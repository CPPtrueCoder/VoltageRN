import React from 'react'

import {View,Text, Button, TextInput,StyleSheet,} from "react-native"
import {THEME} from "../theme";
import {Params} from "../papams/params";
import {ScrollView} from "react-native";




export const SecondScreen =()=>{

return(
	<View style={styles.screen}>
	<View style={styles.container}>
		<Text style={THEME.UnderText}>ЭД:тип</Text>
		<TextInput style={styles.inputs}/>
		<Text style={THEME.UnderText}>№</Text>
		<TextInput style={styles.inputs}/>
	</View>
		<ScrollView>
		<Params/>
		<Params/>
		<Params/>
		<Params/>
		<Params/>
		<Params/>
		</ScrollView>
</View>
)

};



const styles = StyleSheet.create( {
	screen:{
		flex:1,
		
	},
	container:{
	flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems:'center'
	},
	buttons:{
		flexDirection:'row',
		justifyContent:'space-around',
		marginBottom:10
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
