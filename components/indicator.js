import React from "react";
import {ActivityIndicator, StyleSheet, Text, TextInput, View} from "react-native";
import {THEME} from "./theme";

export const Indicator = () => {
	return (<ActivityIndicator size="large" color={THEME.MAIN_COLOR}/>)
};

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		justifyContent: "center"
	},
	horizontal: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10
	},
	inputs: {
		marginBottom: 20,
		padding: 10,
		borderBottomColor: THEME.MAIN_COLOR,
		borderBottomWidth: 2,
		marginRight: 10,
		width: "20%"
	}
});
