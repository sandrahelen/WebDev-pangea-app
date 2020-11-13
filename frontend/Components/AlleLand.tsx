import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {gql, useQuery} from "@apollo/client";
import { DataTable } from 'react-native-paper';
import {Button, SearchBar} from "react-native-elements";
import {Ionicons} from "@expo/vector-icons";

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

    const [search, setSearch] = React.useState("");
    const [filter, setFilter] = React.useState("");
    const [sort, setSort] = useState(0);

    const { data, error, loading } = useQuery(GET_COUNTRIES,
        {variables: {
                filter:  filter || " ",
                search:  search || "",
                sort: sort,
                skip: page * itemsPerPage
                }},);

    function filterContinent(continent:string) {
        setFilter(continent);
    }

    function sortCountry() {
        let current:boolean = false;
        let iconName:string;

        if (sort === 0) {
            setSort(-1);

        }
        else {
            setSort(0);
        }
    }

    function iconCountry() {
        let iconName:string;
        iconName = sort ? 'ios-arrow-round-down' : 'ios-arrow-round-up';
        return iconName;
    }

    if (error) {
        console.error(error);
        return <View style={styles.container}><Text>Error</Text></View>;
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
                        inputStyle={{color: 'black'}}
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
                            buttonStyle={{ backgroundColor: 'white', padding: 8, margin: 5, marginRight: 25}}
                            onPress={() => filterContinent("South America")}
                        />
                    </ScrollView>
                </View>
                { loading ? <Text style={{textAlign: 'center', textAlignVertical: 'center', marginTop: '50%'}}>Loading...</Text> :
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title onPress={() => sortCountry()}>Country <Ionicons name={iconCountry()} size={15}/></DataTable.Title>
                            <DataTable.Title>Continent</DataTable.Title>
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
                    </DataTable>}
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
