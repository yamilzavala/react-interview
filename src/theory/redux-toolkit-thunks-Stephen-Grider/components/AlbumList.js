import React from 'react';
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import Button from './Button';
import AlbumListItem from './AlbumListItem';
import ExpandablePanel from './ExpandablePanel';

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
        content = data.map((album,idx) => {
            const header = <div>{album.title}</div>

            return <ExpandablePanel header={header}>
                Photos!!
            </ExpandablePanel>
            // <AlbumListItem key={idx} album={album} />
        })
    }

    return (
        <>
            <div>
                <h2>Albums by {user.name}</h2> 
                <Button loading={isLoading} primary onClick={handleAddAlbum}>+Add Album</Button>
            </div>
            <div>
                {content}  
            </div>
        </>
    );
};

export default AlbumList;