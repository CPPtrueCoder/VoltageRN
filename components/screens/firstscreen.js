import React,{useState} from 'react'

import {StyleSheet,View,Button, ScrollView,Text,Picker} from 'react-native'
import {THEME} from "../theme";
import TextInput from "react-native-web/dist/exports/TextInput";
import {Inputs} from "./inputs";



export const FirstScreen = ()=>{
	const [selectedValue, setSelectedValue] = useState("Type1");
	return(
		
		<View style={styles.screen}>
	<View>
	<Text  style={THEME.TitleText}>Connection</Text>
	</View>
			<Text style={THEME.UnderText}>Выбор типа электродвигателя</Text>
			<Picker
				selectedValue={selectedValue}
				style={{ height: 50, width: 250 }}
				onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
			>
				<Picker.Item label="Type1" value="Type1" />
				<Picker.Item label="Type2" value="Type2" />
			</Picker>
			<ScrollView>
			<Inputs/>
			<Inputs/>
			<Inputs/>
			<Inputs/>
			<Inputs/>
			<Inputs/>
			<Inputs/>
			<Inputs/>
			</ScrollView>
			<View style={styles.buttons}>
				<Button color="orange"   title="Connect"/>
				<Button color="orange"  title="Record"/>
			</View>
	</View>
	
)

};

const styles = StyleSheet.create( {
	screen:{
		flex:1,
		textAlign:'center'
	},
	buttons:{
		flexDirection:'row',
		justifyContent:'space-around',
		marginBottom:10
	}
});
