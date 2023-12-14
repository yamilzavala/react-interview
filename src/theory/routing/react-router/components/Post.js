import React, {useEffect, useState} from 'react';

const Post = (props) => {
    const [postId, setPostId] = useState();

    useEffect(() => {
        setPostId(props.match.params.post_id)
    },[props.match.params.post_id])

    console.log(props)
    return (
        <div>
            postId: {postId}
        </div>
    );
};

export default Post;