import gql from 'graphql-tag';

export default gql`
  subscription kudoSubscription {
    onCreateKudo {
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
  }
`;
