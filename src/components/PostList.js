import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from "react-admin";

const PostList = (props) => {
    return ( 
        <div>
        <List {...props}>
            <Datagrid>
                <TextField source="id"></TextField>
                <TextField source="title"></TextField>
                <DateField source="publishedAt"></DateField>
                <EditButton basePath="/posts"></EditButton>
                <DeleteButton basePath="/posts"></DeleteButton>
            </Datagrid>
        </List>
        </div>
     );
}
 
export default PostList;