import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
const MegaContainer = styled.div`
  width: 98.8vw;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
const Container = styled.div`
  height: 95vh;
  width: 100%;
  background-image: url("https://wallpapercave.com/wp/wp4802547.jpg");
  background-position: right;
  background-size: cover;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  /* width: 70%; */
  padding: 20px;
  background-color: #000000b2;
  color: white;
  border-radius: 10px;
`;
const Form = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  font-weight: 900;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  /* margin: 20px 10px 0px 0px; */
  font-weight: 900;
  font-size: 19px;
  padding: 10px;
`;

const Button = styled.button`
  font-weight: 800;
  border-radius: 5px;
  border: 2px solid black;
  margin-top: 5px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  width: 100px;
  height: 50px;
  font-size: 20px;
  background-color: #ffffff;
  color: #000000;
  &:hover {
    background-color: teal;
    color: white;
    transform: scale(1.1);
  }
`;
const Links = styled.a`
  cursor: pointer;
  font-size: 15 px;
  text-decoration: underline;
  color: white;
`;
const LinkContainer = styled.div`
  margin-top: 20px;
`;
const Warning = styled.p`
  color: red;
  font-size: 22px;
`;
const Login = () => {
  //   state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userstate, setUserState] = useState(false);
  const [server, setServer] = useState(false);
  const [serverData, setServerData] = useState("");

  //   functions
  const handleSubmit = async () => {
    if (username === "" || password === "") {
      setUserState(true);
    } else {
      setUserState(false);
      var user = await axios.post(
        "   https://dry-stream-49562.herokuapp.com/login",
        {
          username,
          password,
        }
      );
      console.log(user.data);
      setServerData(user.data);
      setServer(true);
      if (user.status === 200) {
        window.localStorage.setItem("username", username);
        setUsername("");
        setPassword("");
        setTimeout(() => {
          window.location.replace("http://localhost:3000/");
        }, 500);
      }
      setTimeout(() => {
        setServer(false);
      }, 1200);
    }
  };

  return (
    <MegaContainer>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>
            <b> LOG IN </b>
          </Title>
          {server && <Warning>*{serverData}</Warning>}
          {userstate && <Warning>*Fill both feilds</Warning>}
          <Form className="row">
            <div className="col-lg-6 col-md-12">
              <Input
                placeholder="UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-lg-6 col-md-12 ">
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </Form>
          <Button onClick={() => handleSubmit()}>LOG IN</Button>
          <LinkContainer>
            <Link to="/SignUp">
              <Links>CREATE NEW ACCOUNT</Links>
            </Link>
          </LinkContainer>
        </Wrapper>
      </Container>
    </MegaContainer>
  );
};

export default Login;
