import React from 'react';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import { GoTrash } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store';
import PhotoList from './PhotoList';

const AlbumListItem = ({album}) => {

    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = (album) => {
        removeAlbum(album)
    }

    const header = <>
        <Button loading={results.isFetching}secondary onClick={() => handleRemoveAlbum(album)}> <GoTrash/> </Button> 
        {album.title}
    </>

    return (
        <>          
           <ExpandablePanel header={header}>
              <PhotoList album={album}/>
           </ExpandablePanel>
        </>
    )
};

export default AlbumListItem;