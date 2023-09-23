import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../mediaCRUD";
import './post.css';
const Post = () => {
    const { id } = useParams();
    const [singleUser, setSingleUser] = useState({
        username: '',
        description: '',
        title: '',
        image: '',
        privacy: ''
    });
    const showSingleUser = async () => {
        const response = await getSingleUser(id);
        setSingleUser(response);
    }
    useEffect(() => {
        showSingleUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="post-main">
            <div className="post-card-text">
                <div>
                    <h5>User Name : </h5>
                    <p>{singleUser.username}</p>
                    <h5>Title : </h5>
                    <p>{singleUser.title}</p>
                    <h5>Description : </h5>
                    <p>{singleUser.description}</p>
                </div>
            </div>
            <div className="post-card-image">
                <div>
                    <h5>Posted Image :</h5>
                    <img src={singleUser.image} alt="userImage" className="singleUser-image" />
                </div>
            </div>
        </div>
    )
}
export default Post