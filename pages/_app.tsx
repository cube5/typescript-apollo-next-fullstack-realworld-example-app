import NextApp, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";

interface IProps {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

class App extends NextApp<IProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(App);
