import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {gql, useQuery} from "@apollo/client";
import { DataTable } from 'react-native-paper';

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

const AlleLand = () => {

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
            <View style={{paddingTop: 55}}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Land</DataTable.Title>
                    <DataTable.Title>Kontinent</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>Norge</DataTable.Cell>
                  <DataTable.Cell>Europa</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>{data.country.country}</DataTable.Cell>
                  <DataTable.Cell>{data.country.city}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                  page={1}
                  numberOfPages={3}
                  onPageChange={page => {
                    console.log(page);
                  }}
                  label="1-2 of 6"
                />
            </DataTable>
            </View>
            );
    }




};
export default AlleLand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});