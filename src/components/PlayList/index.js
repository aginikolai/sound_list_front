import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

import PlayList from "./PlayList";
import { GET_ALL_SONGS } from "../../queries";

const PlayListComponent = compose(
  graphql(GET_ALL_SONGS, {
    name: 'allSongs'
  }),
)(PlayList);

export default PlayListComponent;