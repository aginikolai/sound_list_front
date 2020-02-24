import gql from 'graphql-tag';

export const GET_ALL_SONGS = gql`
  query {
    getAllSongsLists {
      name
    }
  }
`;

export const GET_ALL_LISTS = gql`
  query {
    getAllLists {
      name
    }
  }
`;

// Mutations

export const NEW_PLAYLIST = gql`
  mutation($name: String!) {
    addList(name: $name) {
      name
    }
  }
`;