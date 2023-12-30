import React from 'react';
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import PhotoListItem from './PhotoListItem';
import Button from './Button';

const PhotoList = ({album}) => {
    const {data, error, isFetching } = useFetchPhotosQuery(album);

    const [addPhoto, results] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album)
    }

    let content;
    if(error) {
        return <span>Error...</span>
    } else if(isFetching) {
        return <span>Loading...</span>
    } else {
        content = data.map((photo, idx) => (
            <PhotoListItem key={idx} photo={photo}/>
        ))
    }

    return (
        <div>
            <div>
                <h2>Photo in {album.id}</h2> 
                <Button loading={results.isFetching} primary onClick={handleAddPhoto}>+Add Photo</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    );
};

export default PhotoList;