import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import userimage from "../../assets/user.JPG"
import userimage2 from "../../assets/user2.jpg"
import './index.css'
import {useEffect, useState} from "react";
import millify from "millify";

import {FacebookFilled, InstagramOutlined, TwitterOutlined,PlusCircleOutlined} from "@ant-design/icons"

import {Card, Row, Col, Input, Avatar} from 'antd'

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

           <div className="friend-cards-container">
               <Row gutter = {[32,32]}>
                   {users?.map((user) => (
                       <Col xs = {24} sm = {12} lg = {6} key = {user.id}>
                               <Card
                                   className="crypto-card"
                                   hoverable={true}

                                   // title = {`${user.username}. ${user.firstName}`}
                                   // extra = {<img className="crypto-image" src = {user.iconUrl}/>}
                                   // hoverable
                                   actions = {[
                                       <FacebookFilled style = {{color:"blue"}}/>,
                                       <InstagramOutlined style = {{color:"purple"}}/>,
                                       <PlusCircleOutlined style = {{color:"#1DB954"}}/>

                                   ]}
                                   title = "View Profile"
                                   extra={<Button type = "primary">View</Button>}

                                   cover = {
                                       <div
                                       style ={{
                                           height:150,
                                           width:"100%",
                                           background:"#646c79",
                                           color:"white",
                                           fontSize:30,
                                       }}
                                       >
                                           {`${user.username}`}
                                       </div>
                                   }
                               >
                                   <Card.Meta
                                   style={{
                                       display:"flex",
                                       flexDirection:"column",
                                       marginTop:-60
                                   }}
                                   avatar={
                                       <Avatar>
                                           size ={100}
                                           src = {userimage2}
                                       </Avatar>
                                   }
                                   title = {`${user.firstName}`+' '+`${user.lastName}`}
                                   description={`${user.bio}`}

                                   >
                                   </Card.Meta>


                                   {/*<p>Spotify User Name: {millify(user.spotify)}</p>*/}
                                   {/*<p>First Name: {millify(user.firstName)}</p>*/}
                                   {/*<p>Last Name: {millify(user.lastName)}</p>*/}
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