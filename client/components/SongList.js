import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';



const SongList = (props) => {
  console.log(props);


  
  if (!props.data.loading) {
    console.log(props.data.songs[0].title);
    return (
      <div>
        <ul>
          {props.data.songs.map(song => <li key={song.id} className="collection-item">{song.title}</li>)}
        </ul>
        <Link 
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
          
      </div>
      
    )
  }
  return <ul className="collection">Loading...</ul>
  

  
}


const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);

