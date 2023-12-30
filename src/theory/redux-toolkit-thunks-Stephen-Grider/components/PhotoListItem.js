import React from 'react';
import ExpandablePanel from './ExpandablePanel';
import { useRemovePhotoMutation } from '../store';
import { GoTrash } from 'react-icons/go';
import Button from './Button';

const PhotoListItem = ({photo}) => {
    const [removePhoto, results] = useRemovePhotoMutation();

    const handleRemovePhoto = (photo) => {
        removePhoto(photo)
    }

    const header = <>
        <Button loading={results.isFetching}secondary onClick={() => handleRemovePhoto(photo)}> <GoTrash/> </Button> 
        {photo.id}        
    </>

    return (
        <>
            <ExpandablePanel header={header}>
                <img src={photo.url} alt='photo'/>
           </ExpandablePanel>
        </>
    );
};

export default PhotoListItem;