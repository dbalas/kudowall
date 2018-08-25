import gql from 'graphql-tag';

export default gql`
    query ListKudos($limit: Int, $nextToken: String) {
      listKudos(limit: $limit, nextToken: $nextToken) {
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
          userId
          userName
          userImage
        }
        nextToken
      }
    }
`;
