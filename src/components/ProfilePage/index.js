import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import userimage from "../../assets/user.JPG"
import './index.css'
import {useEffect, useState} from "react";
import millify from "millify";

import {Card, Row, Col, Input} from 'antd'

function ProfilePage () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/user/getAll")
            .then(res => res.json())
            .then((result) => {
                    setUsers(result);
                }
            )
    }, []);
    console.log("USers:")
    console.log(users)



    return (
       <>
           <div className="user-page">
               <img className="user-image" src = {userimage}  alt={"Loading Image"}/>
               <div className='text-zone'>
                   <h1>Currently Listening:</h1>
                   <h2>Location: Oceanside,California</h2>
                   <h2>Favorite Music: Pop, RnB, Rap, Rock</h2>
                   <h2>Favorite Artist: Frank Ocean, SZA, Issiah Rashad, Drake</h2>

               </div>
           </div>
           <div>
               <h1>Friends:</h1>
               <Row gutter = {[32,32]} className="crypto-card-container">
                   {users?.map((user) => (
                       <Col xs = {24} sm = {12} lg = {6} className="crypto-card" key = {user.id}>
                               <Card
                                   title = {`${user.username}. ${user.firstName}`}
                                   // extra = {<img className="crypto-image" src = {user.iconUrl}/>}
                                   // hoverable
                               >
                                   <p>Spotify User Name: {millify(user.spotify)}</p>
                                   <p>First Name: {millify(user.firstName)}</p>
                                   <p>Last Name: {millify(user.lastName)}</p>
                               </Card>
                       </Col>
                   ))
                   }
               </Row>
           </div>

       </>
    );
}

export default ProfilePage