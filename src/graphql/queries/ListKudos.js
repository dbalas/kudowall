import gql from 'graphql-tag';

export default gql`
    query ListKudos($limit: Int, $nextToken: String, $orderBy: String) {
      listKudos(limit: $limit, nextToken: $nextToken, orderBy: $orderBy) {
        items {
          id
          createdAt
          title
          content
          icon
          image
          headerBkgColor
          headerColor
          headerIconColor
        }
        nextToken
      }
    }
`;
