import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

import AlleLand from "./Components/AlleLand";
import MineLand from "./Components/MineLand";

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
    uri: "http://localhost:4000/graphql",
    fetch: customFetch,
  }),
  cache: new InMemoryCache()
});

export default function App() {
  return (
      <ApolloProvider client={client}>
        <Router sceneStyle={{paddingTop: 55}}>
          <Scene key="root">
          <Scene key="AlleLand" component={AlleLand} title="Alle land"/>
          </Scene>
        </Router>
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
