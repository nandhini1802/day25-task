import React from "react";

const About = () => {
    return (
        <div style={{
            padding: '85px 20px 20px 20px',
            backgroundColor: '#ECF0F1',
            minHeight: '90vh'
        }}>
            <h3>About us</h3>
            <h2>What is CRUD?</h2>
            <p>CRUD refers to the four basic operations a software application should be able to perform  Create, Read, Update, and Delete.</p>

            <p>In such apps, users must be able to create data, have access to the data in the UI by reading the data, update or edit the data, and delete the data.</p>

            <p>In full-fledged applications, CRUD apps consist of 3 parts: an API (or server), a database, and a user interface (UI).</p>

            <p>The API contains the code and methods, the database stores and helps the user retrieve the information, while the user interface helps users interact with the app.</p>

            <p>You can make a CRUD app with any of the programming languages out there. And the app doesn’t have to be full stack – you can make a CRUD app with client-side JavaScript.</p>

            <p>In fact, the app with which I will be showing you how create, read, update and delete operations work is made with client-side JavaScript.</p>

            <p>Each letter in the CRUD acronym has a corresponding HTTP request method.</p>
        </div>
    )
}
export default About;