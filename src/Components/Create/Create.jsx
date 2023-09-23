import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from '../../mediaCRUD';
import './Create.css';
const Create = () => {
    const [postData, setPostData] = useState({
        username: '',
        description: '',
        title: '',
        image: '',
        privacy: ''
    });
    const navigate = useNavigate();
    const handleSubmit = async (ele) => {
        ele.preventDefault();
        console.log('postData : ', postData);
        await createUser(postData)
        setPostData({
            username: '',
            description: '',
            title: '',
            image: '',
            privacy: ''
        });
        navigate('/');
    }
    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setPostData({
            ...postData, [name]: value
        })
    };
    return (
        <div className="create-main">
            <div>
                <h2>Add New post</h2>
                <div className="center">
                    <form>

                        <div className="label">
                            <label htmlFor="username" >USER NAME  </label>
                            <input type="text" name="username" id="username" value={postData.username} onChange={handleChange} required />
                        </div>
                        <div className="label">
                            <label htmlFor="title" >TITLE</label>
                            <input type="text" name="title" id="title" value={postData.title} onChange={handleChange} required />
                        </div>
                        <div className="label">
                            <label htmlFor="description" >DESCRIPTION</label>
                            <textarea type="text" name="description" id="description" value={postData.description} onChange={handleChange} required />
                        </div>
                        <div className="label"> 
                            <label htmlFor="image" >IMAGE URL </label>
                            <input type="text" name="image" id="image" value={postData.image} onChange={handleChange} required />
                        </div>
                        {/* <div className="label">
                            <label htmlFor="privacy" >PRIVACY </label>
                            <select name="privacy" id="privacy" value={postData.privacy} onChange={handleChange} required>
                                <option value="private">private</option>
                                <option value="public">public</option>
                            </select>
                        </div> */}
                        <div className="submit-btn">
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create