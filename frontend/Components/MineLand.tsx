import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import {gql, useQuery} from "@apollo/client";

const GET_COUNTRY = gql`
    query country ($country: String) {
        country (country: $country){
            country
            continent
            city
            dish
        }
    }
`;

const MineLand = (navigation:any) => {

    return (
        <View style={styles.container}>
             <Text>Information about country</Text>
        </View>
        );
};

export default MineLand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});