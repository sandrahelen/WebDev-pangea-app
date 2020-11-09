import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, useQuery, gql} from '@apollo/client';
import { NetworkInfo } from "react-native-network-info";

import AlleLand from "./Components/AlleLand";
import MineLand from "./Components/MineLand";

let LOCAL_SYSTEM_IP_ADDRESS: string | null = "";
NetworkInfo.getIPAddress().then(ipAddress => LOCAL_SYSTEM_IP_ADDRESS = ipAddress);

const customFetch = (uri:string, options:any) => {
  return fetch(uri, options)
  .then(response => {
    if (response.status >= 500) {  // or handle 400 errors
      return Promise.reject(response.status);
    }
    return response;
  });
};

const client = new ApolloClient({
  link: createHttpLink({
    //uri: "http://localhost:4000/graphql",
    uri: "http://192.168.0.148:4000/graphql", //pc ip adresse
    //uri: 'http://${LOCAL_SYSTEM_IP_ADDRESS}:4000/graphql',
    fetch: customFetch,
  }),
  cache: new InMemoryCache()
});

export default function App() {

  return (
      <ApolloProvider client={client}>
        <AlleLand/>

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
/*
<Router sceneStyle={{paddingTop: 55}}>
      <Scene key="root">
      <Scene key="AlleLand" component={AlleLand} title="alle"/>
      <Scene key="MineLand" component={MineLand} title="mine"/>
      </Scene>
    </Router>
    <View style={styles.container}>
      <Text>Heisann!!</Text>
      <StatusBar style="auto" />
    </View>
 */
/*
<ApolloProvider client={client}>
        <Router sceneStyle={{paddingTop: 55}}>
          <Scene key="root">
          <Scene key="AlleLand" component={AlleLand} title="Alle land"/>
          </Scene>
        </Router>
      </ApolloProvider>
 */
/*
<View style={{paddingTop: 55}}>
        {error ? <Text>Oh no! {error}</Text> : console.log('no error')}
        {loading ? (<Text>Loading ...</Text>) : (
            <Text>{data.country.city}</Text>)}
        </View>
 */