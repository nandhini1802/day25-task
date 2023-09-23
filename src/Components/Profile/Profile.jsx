import React from "react";
import './Profile.css';

const Profile = ()=> {
    return (
        <div className="profile-main">
            <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user" className="profile-image"/>
            <h3 style={{
                paddingTop : '50px'
            }}>USER</h3>
        </div>
    )
}

export default Profile