import React from 'react';
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import Button from './Button';
import AlbumListItem from './AlbumListItem';
import style from './AlbumList.module.css'

const AlbumList = ({user}) => {

    const {data, error, isLoading} = useFetchAlbumsQuery(user);    
    
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user)
    }
  
    let content;
    if(isLoading) {
        content = <span>Loading...</span>
    } else if(error) {
        content = <span>Error...</span>
    } else {
        content = data.map((album,idx) => (
            <AlbumListItem key={idx} album={album} />
        ))
    }

    return (
        <div>
            <div className={style.header}>
                <h2>Albums by {user.name}</h2> 
                <Button loading={results.isFetching} primary onClick={handleAddAlbum}>+Add Album</Button>
            </div>
            <div>
                {content}  
            </div>
        </div>
    );
};

export default AlbumList;