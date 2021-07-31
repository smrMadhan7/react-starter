import React,{useState} from 'react';
import Box from '@material-ui/core/Box';
import  Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
 import {Select,MenuItem} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
function UserTable (rows:any)  {
    ;
    const[UserData,setUserData] = useState({
        UserName:"",
        Email:"",
        CompanyName: "",
    })
    const  handleOnchange= (event:any)=>{}
    const data = [
        {
            "Name": "Alex",
            "UserName": "David Alex",
            "UserRole": "Admin",
            "UserStatus": "Active",
            "PhoneNumber": "+1(342)-234-8763",
        },
        {
            "Name": "John",
            "UserName": "Britojohn",
            "UserRole": "Employee",
            "UserStatus": "Inactive",
            "PhoneNumber": "+1(342)-234-2048",
        },
        {
            "Name": "Brito",
            "UserName": "JohnBrito",
            "UserRole": "Employee",
            "UserStatus": "active",
            "PhoneNumber": "+1(342)-234-4762",
        },
    ]
//   
    return (
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Useranme</TableCell>
              <TableCell align="right">Company Name</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">Phone no</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(rows => (
              <TableRow key={rows.Name} style={{
                cursor:"pointer"
              }}>
                <TableCell align="right">{rows.UserName}</TableCell>
                <TableCell align="right">{rows.UserRole}</TableCell>
                <TableCell align="right">{rows.UserStatus}</TableCell>
                <TableCell align="right">{rows.PhoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
 export {UserTable};