import React from 'react';
import {Edit, SimpleForm, TextInput} from "react-admin";

const UserEdit = (props) => {
    return (<Edit title="Edit  User" {...props}>
    <SimpleForm>
     <TextInput disabled source="id"></TextInput>
     <TextInput source="name"></TextInput>
     <TextInput  source="email"></TextInput>
    </SimpleForm>
</Edit> );
}
 
export default UserEdit;


