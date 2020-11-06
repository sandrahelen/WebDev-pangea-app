import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import { DataTable } from 'react-native-paper';

const AlleLand = () => {

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
              <DataTable.Cell>Etiopia</DataTable.Cell>
              <DataTable.Cell>Afrika</DataTable.Cell>
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