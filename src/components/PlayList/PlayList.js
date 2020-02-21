import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_ALL_SONGS } from "../../queries";

const PlayList = () => {
  const { loading, error, data } = useQuery(GET_ALL_SONGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);
  return (
    <p>PlayList</p>
  )
};

export default PlayList;