import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {gql, useQuery} from "@apollo/client";
import { DataTable } from 'react-native-paper';
import {SearchBar} from "react-native-elements";

import Info from "./MineLand";

const GET_COUNTRIES = gql`
    query countries ($filter: String!, $search: String!, $sort: Int, $skip: Int) {
        countries (filter: $filter, search: $search, sort: $sort, skip: $skip){
            country
            continent
            city
            dish
        }
    }
`;

const itemsPerPage = 10;

function handleClick(country:any) {
        if (country !== null || undefined) {
            localStorage.setItem('country', country.toString());
            console.log(localStorage.getItem('country'))
        }
    }

const AlleLand = ({navigation}) => {

    const [page, setPage] = React.useState(0);
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;

    const { data, error, loading } = useQuery(GET_COUNTRIES,
        {variables: { filter:  " ",
                search:  " ",
                sort: 1,
                skip: page * itemsPerPage
                }},);

    if (error) {
        console.error(error);
        return <View style={styles.container}><Text>Error</Text></View>;
    }
    else if (loading) {
        return <View style={styles.container}><Text>Loading ..</Text></View>;
    }

    else{
        return (
            <ScrollView>
                <SearchBar
                    round
                    searchIcon={{ size: 20 }}
                    //onChangeText={(text:string) => searchFilterFunction(text)}
                    //onClear={(text:string) => searchFilterFunction('')}
                    placeholder="Search"
                    //value={search}
                />
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Land</DataTable.Title>
                    <DataTable.Title>Kontinent</DataTable.Title>
                </DataTable.Header>

                {data.countries.map((countryData: { country: React.ReactNode; continent: React.ReactNode; }) => (
                <DataTable.Row onPress={() =>  navigation.navigate('Info', {countryInfo: countryData.country})} key={JSON.stringify(countryData.country)}>
                  <DataTable.Cell  >{countryData.country}</DataTable.Cell>
                  <DataTable.Cell>{countryData.continent}</DataTable.Cell>
                </DataTable.Row>
                ))}

                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(243 / itemsPerPage)}
                    onPageChange={page => setPage(page)}
                    label={`${from + 1}-${to} of ${243}`}
                />
            </DataTable>
            </ScrollView>
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
