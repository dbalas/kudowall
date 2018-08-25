import gql from 'graphql-tag';

export default gql`
  mutation CreateKudo($title: String, $content: String, $icon: String, $image: String, $headerBkgColor: String, $headerColor: String, $headerIconColor: String, $userId: String, $userName: String, $userImage: String) {
    createKudo(
      input: {
        title: $title,
        content: $content,
        icon: $icon,
        image: $image,
        headerBkgColor: $headerBkgColor,
        headerColor: $headerColor,
        headerIconColor: $headerIconColor,
        userId: $userId,
        userName: $userName,
        userImage: $userImage
      }
    ) {
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
  }
`;
