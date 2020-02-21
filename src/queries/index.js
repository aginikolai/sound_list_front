import gql from 'graphql-tag';

export const GET_ALL_SONGS = gql`
  query {
    getAllSongsLists {
      name
    }
  }
`;