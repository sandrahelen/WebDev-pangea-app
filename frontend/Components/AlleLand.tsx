import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {gql, useQuery} from "@apollo/client";
import { DataTable } from 'react-native-paper';
import {Button, SearchBar} from "react-native-elements";

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

const AlleLand = () => {

    const [page, setPage] = React.useState(0);
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;

    const [search, setSearch] = React.useState("");
    const [filter, setFilter] = React.useState("");

    const { data, error, loading } = useQuery(GET_COUNTRIES,
        {variables: {
                filter:  filter || " ",
                search:  search || " ",
                sort: 1,
                skip: page * itemsPerPage
                }},);

    function filterContinent(continent:string) {
        setFilter(continent);
    }

    if (error) {
        console.error(error);
        return <View style={styles.container}><Text>Error</Text></View>;
    }
    else if (loading) {
        return (
            <View>
                <View style={{backgroundColor: '#e1e8ee'}}>
                    <SearchBar
                        round
                        lightTheme
                        searchIcon={{ size: 20 }}
                        onChangeText={(text:string) => setSearch(text)}
                        placeholder="Search"
                        value={search}
                    />
                    <ScrollView horizontal={true} style={{ paddingBottom: 7, paddingLeft: 10}}>
                        <Button
                            title="All Countries"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent(" ")}
                        />
                        <Button
                            title="Africa"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent("Africa")}
                        />
                        <Button
                            title="Asia"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent("Asia")}
                        />
                        <Button
                            title="Europe"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent("Europe")}
                        />
                        <Button
                            title="Oceania"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent("Oceania")}
                        />
                        <Button
                            title="North America"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent("North America")}
                        />
                        <Button
                            title="South America"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5, marginRight: 20}}
                            onPress={() => filterContinent("South America")}
                        />
                    </ScrollView>
                </View>
                <View style={styles.container}><Text>Loading ..</Text></View>
            </View>
        );
    }

    else{
        return (
            <ScrollView>
                <View style={{backgroundColor: '#e1e8ee'}}>
                    <SearchBar
                        round
                        lightTheme
                        searchIcon={{ size: 20 }}
                        onChangeText={(text:string) => setSearch(text)}
                        placeholder="Search"
                        value={search}
                    />
                    <ScrollView horizontal={true} style={{ paddingBottom: 7, paddingLeft: 10}}>
                        <Button
                            title="All Countries"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent(" ")}
                        />
                        <Button
                            title="Africa"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent("Africa")}
                        />
                        <Button
                            title="Asia"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent("Asia")}
                        />
                        <Button
                            title="Europe"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent("Europe")}
                        />
                        <Button
                            title="Oceania"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent("Oceania")}
                        />
                        <Button
                            title="North America"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5}}
                            onPress={() => filterContinent("North America")}
                        />
                        <Button
                            title="South America"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5, marginRight: 20}}
                            onPress={() => filterContinent("South America")}
                        />
                    </ScrollView>
                </View>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Land</DataTable.Title>
                        <DataTable.Title>Kontinent</DataTable.Title>
                    </DataTable.Header>

                    {data.countries.map((countryData: { country: React.ReactNode; continent: React.ReactNode; }) => (
                    <DataTable.Row>
                      <DataTable.Cell key={countryData.toString()}>{countryData.country}</DataTable.Cell>
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