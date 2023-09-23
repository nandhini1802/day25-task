import { apiURL } from './config';

// Read //

 export const getUser = async()=> {
    const response = await fetch(`${apiURL}/clone`);
    const users = await response.json();
    return users;
}





// Single User//
export const getSingleUser = async(id)=> {
    const response = await fetch(`${apiURL}/clone/${id}`);
    const user = await response.json();
    return user
}


// Create users//
export const createUser = async(data)=> {
    const response = await fetch(`${apiURL}/clone`, {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    const users = await response.json()
    return users;
}







// updateUser//
export const updateUser = async(data, id)=> {
    const response = await fetch(`${apiURL}/clone/${id}`, {
        method : 'PUT',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    const users = await response.json()
    return users;
}


// deleteUser//
export const deleteUser = async(id)=> {
    const response = await fetch(`${apiURL}/clone/${id}`, {
        method : 'DELETE'
    });
    const user = await response.json();
    return user
}