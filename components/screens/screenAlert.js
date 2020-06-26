import React, {useState} from 'react'
import {Picker, StyleSheet, Text, TextInput, View} from "react-native";
import {THEME} from "../theme";
import {Button} from "react-native";
import {ItemAlert} from "../alerts";

export const AlertScreen = ()=>{
	const [selectedValue, setSelectedValue] = useState("26.06.2020");
	return(
		<View style={styles.screen}>
		<View style={styles.container}>
			<Text style={THEME.UnderText}>ЭД:тип</Text>
			<TextInput style={styles.inputs}/>
			<Text style={THEME.UnderText}>№</Text>
			<TextInput style={styles.inputs}/>
		</View>
			<ItemAlert/>
			<ItemAlert/>
			<ItemAlert/>
			<ItemAlert/>
			<ItemAlert/>
			<View style={styles.container}>
				<View>
					<Text>Выбрать дату</Text>
					<Picker
						selectedValue={selectedValue}
						style={{ height: 50, width: 250 }}
						onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
					>
						<Picker.Item label="26.06.2020" value="26.06.2020"  />
						<Picker.Item label="27.07.2020" value="27.07.2020"  />
					</Picker>
				</View>
				<Button  title='Загрузить'/>
			</View>
			
		</View>
	)
	
};
const styles = StyleSheet.create( {
	screen:{
		flex:1,
		justifyContent:'space-between'
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
	},
	data:{
		marginBottom: 20,
		padding: 10,
		borderBottomColor: THEME.MAIN_COLOR,
		borderBottomWidth: 2,
		marginRight:10,
		width:"80%"
	}
});
