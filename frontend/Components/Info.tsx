import React from "react";
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

    try {
        let country = route.params.countryInfo;
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
            <View style={styles.inline}>
                <Text style={styles.bold}>Country: </Text>
                <Text>{data.country.country}</Text>
            </View>
            <View style={styles.inline}>
                <Text style={styles.bold}>City: </Text>
                <Text>{data.country.city}</Text>
            </View>
            <View style={styles.inline}>
                <Text style={styles.bold}>Continent: </Text>
                <Text>{data.country.continent}</Text>
            </View>
            <View style={styles.inline}>
                <Text style={styles.bold}>National dish: </Text>
                <Text>{data.country.dish}</Text>
            </View>
        </View>
        );
    }

    }
   catch (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.bold}>This page will show you more information about your selected country. Please select a country from the Home page</Text>
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
        padding: '10%',
    },
    inline: {
        flexDirection:'row',
    },
    bold: {
        fontWeight: 'bold'
    }
});
