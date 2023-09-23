import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getSingleUser, updateUser } from "../../mediaCRUD";
import './Edit.css';
const Edit = () => {
    const [params] = useSearchParams();
    const [postData, setPostData] = useState({
        username: '',
        description: '',
        title: '',
        image: '',
        privacy: ''
    });
    const navigate = useNavigate()
    const handleSubmit = async (ele) => {
        ele.preventDefault();
        setPostData({
            username: '',
            description: '',
            title: '',
            image: '',
            privacy: ''
        });
        await updateUser(postData, params.get('id'));
        navigate(`/post/${params.get('id')}`)
    }
    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setPostData({
            ...postData, [name]: value
        });
    };
    const showSingleUser = async () => {
        const response = await getSingleUser(params.get('id'));
        setPostData(response);
    };
    useEffect(() => {
        showSingleUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="edit-main">
            <div>
                <h2>Edit Your Post</h2>
                <div className="center">
                    <form>

                        <div className="label">
                            <label htmlFor="username" >Change username</label>
                            <input type="text" name="username" id="username" value={postData.username} onChange={handleChange} required />
                        </div>
                        <div className="label">
                            <label htmlFor="title" >Change Title</label>
                            <input type="text" name="title" id="title" value={postData.title} onChange={handleChange} required />
                        </div>
                        <div className="label">
                            <label htmlFor="description" >Change description</label>
                            <textarea type="text" name="description" id="description" value={postData.description} onChange={handleChange} required />
                        </div>
                        <div className="label">
                            <label htmlFor="image" >Change Image URL</label>
                            <input type="text" name="image" id="image" value={postData.image} onChange={handleChange} required />
                        </div>
                        <div className="submit-btn">
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit