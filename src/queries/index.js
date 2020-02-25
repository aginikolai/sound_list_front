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

export const GET_PAY_LIST = gql`
  query($playList: String!) {
    getPlayList(playList: $playList) {
      _id
      name
      playList
      link
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