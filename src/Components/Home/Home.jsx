import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, getUser } from "../../mediaCRUD";
import './Home.css';
const Home = () => {
    const [post, setPost] = useState([]);
    const getData = async () => {
        const response = await getUser();
        setPost(response);
        // console.log(response)
    };
    useEffect(() => {
        getData();
    }, []);
    const removeUser = async (postId) => {
        await deleteUser(postId);
        const updatePost = post.filter(({ id }) => postId !== id);
        setPost(updatePost);
    }
    return (
        <div className="main" style={{
            backgroundColor: '#ECF0F1'
        }}>
            <div>
                <h2>Books Posts</h2>
                <div className="posts">

                    {post.map((user) => (
                        <div style={{
                            backgroundColor: 'white',
                            width: '250px',
                            height: '380px',
                            borderRadius: '10px',
                            marginBottom: '30px',
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            padding: '15px 20px 15px 20px'
                        }}>
                            <div key={user.id} >
                                <div className="header">
                                    <p>{user.username}</p>
                                    <p>{user.privacy}</p>
                                </div>
                                <div className="image">
                                    <img src={user.image} alt="user postedImage" />
                                </div>
                                <div className="card-text">
                                    <h4>{user.title}</h4>
                                    <p>{user.description}</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button>
                                    <Link to={`/post/${user.id}`} style={{
                                    textDecoration : 'none',
                                    color : 'white'
                                }}>View</Link>
                                </button>
                                <button>
                                    <Link to={`/edit?id=${user.id}`} style={{
                                    textDecoration : 'none',
                                    color : 'white'
                                }}>Edit</Link>
                                </button>
                                <button onClick={() => removeUser(user.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home