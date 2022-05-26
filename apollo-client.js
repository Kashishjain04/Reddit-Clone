import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://sharjah.stepzen.net/api/tailored-opossum/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
  }
})

export default client
