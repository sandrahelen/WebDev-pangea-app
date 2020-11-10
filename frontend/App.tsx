import React from 'react';
import {StyleSheet} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import Constants from 'expo-constants';

import TabNav from "./Components/TabNav";
import {Header, SearchBar} from "react-native-elements";


const {manifest} = Constants
const ipv4Address = manifest.debuggerHost?.split(':')[0];
console.log('ip: ' + ipv4Address)

const customFetch = (uri:string, options:any) => {
  return fetch(uri, options)
  .then(response => {
    if (response.status >= 500) {  // or handle 400 errors
      return Promise.reject(response.status);
    }
    return response;
  });
};

const client =  new ApolloClient({
  link: createHttpLink({
    //uri: "http://localhost:4000/graphql",
    //uri: "http://192.168.0.148:4000/graphql", //pc ip adresse
    uri: `http://${ipv4Address}:4000/graphql`,
    fetch: customFetch,
  }),
  cache: new InMemoryCache()
});

export default function App() {

  return (
        <ApolloProvider client={client}>
          <Header placement={"center"}  centerComponent={{ text: "PANGEA"}}
                  containerStyle={{
                    backgroundColor: '#DFAE74',
                    justifyContent: 'space-around',
                  }}/>
          <TabNav/>
        </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
