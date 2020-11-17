import fetch from 'isomorphic-unfetch'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'


const createHttpLink = () => {
    const httpLink = new HttpLink({
        uri: 'https://dashboard.hasura.app/v1/graphql',
        credentials: 'same-origin',
        fetch,
    })
    return httpLink;
}


export default function createApolloClient(initialState = {}) {
    const ssrMode = typeof window === 'undefined'
    let link = createHttpLink() 
    return new ApolloClient({
        ssrMode,
        link,
        cache: new InMemoryCache().restore(initialState),
    })
}