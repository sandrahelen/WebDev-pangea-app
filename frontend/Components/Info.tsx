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

const Info = ({route}) => {

    const country = route.params.countryInfo

    const { data, error, loading } = useQuery(GET_COUNTRY,
        {variables: { country:  country,}},);

    if (error) {
        console.error(error);
        return <View style={styles.container}><Text>Error</Text></View>;
    }
    else if (loading) {
        return <View style={styles.container}><Text>Loading ..</Text></View>;
    }
    else {
        return (
        <View style={styles.container}>
            <Text>Country: {data.country.country}</Text>
            <Text>City: {data.country.city}</Text>
            <Text>Continent: {data.country.continent}</Text>
            <Text>National dish: {data.country.dish}</Text>
        </View>
        );
    }

};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//{JSON.stringify(countryInfo)}