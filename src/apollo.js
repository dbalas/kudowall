import Vue from 'vue';
import VueApollo from 'vue-apollo';
import AWSAppSyncClient from 'aws-appsync';

// Configuring Apollo
const client = new AWSAppSyncClient({
  url: process.env.VUE_APP_APPSYNC_GRAPHQL_ENDPOINT,
  region: process.env.VUE_APP_APPSYNC_REGION,
  auth: {
    type: process.env.VUE_APP_APPSYNC_AUTHENTICATION_TYPE,
    apiKey: process.env.VUE_APP_APPSYNC_API_KEY,
  },
}, {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

const appsyncProvider = new VueApollo({
  defaultClient: client,
});

Vue.use(VueApollo);

export default {
  provider: appsyncProvider,
};
