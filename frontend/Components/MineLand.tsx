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

const MineLand = () => {

    const { data, error, loading } = useQuery(GET_COUNTRY,
        {variables: { country: "Norway"}},);

    if (error) {
        console.error(error);
        return <View style={styles.container}><Text>Error</Text></View>;
    }
    else if (loading) {
        return <View style={styles.container}><Text>Loading ..</Text></View>;
    }

    else{
       return (
        <View style={styles.container}>
             <Text>{data.country.city}</Text>
        </View>
        );
    }



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