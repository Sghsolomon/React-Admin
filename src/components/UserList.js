import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton, TextInput} from 'react-admin';


const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="name"></TextField>
                <EmailField source="email"></EmailField>
                <EditButton basePath="/users"></EditButton>
                <DeleteButton basePath="/posts"></DeleteButton>
            </Datagrid>
        </List>
      );
}
 
export default UserList;