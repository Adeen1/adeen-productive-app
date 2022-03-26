import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const MegaContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 98.8vw;
  height: 100vh;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("https://wallpaperaccess.com/full/1437631.jpg");
  background-position: right;
  background-size: cover;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 65%;
  padding: 3%;
  border-radius: 10px;
  background-color: white;
  margin-top: 40px;
  padding-bottom: 40px;
`;
const Form = styled.div``;
const Title = styled.h1`
  font-weight: 900;
  font-size: 2rem;
`;
const Input = styled.input`
  flex: 1;
  /* min-width: 40%; */
  margin: 6% 4% 0px 0px;
  font-weight: 900;
  font-size: 19px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 20px;
`;
const Button = styled.button`
  font-weight: 800;
  border-radius: 5px;
  border: 2px solid black;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  width: 100px;
  height: 50px;
  font-size: 20px;
  background-color: black;
  color: white;
  margin-top: 10px;
  &:hover {
    background-color: teal;
    color: white;
    transform: scale(1.1);
  }
`;
const Warning = styled.p`
  color: red;
  margin-bottom: -20px;
`;
const LoginLink = styled.p`
  font-size: 16px;
`;
const Bold = styled.span`
  color: blue;
  font-size: 21px;
  text-decoration: underline;
  cursor: pointer;
`;
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [userstate, setUserState] = useState(false);

  const [passstate, setPassState] = useState(false);
  const [server, setServer] = useState(false);
  const [serverData, setServerData] = useState("");
  const handleSubmit = async (e) => {
    console.log("is is submitting");

    e.preventDefault();

    if (username === "") {
      setUserState(true);
      if (password !== "") {
        setPassState(false);
      }
    }
    if (password === "") {
      setPassState(true);
      if (username !== "") {
        setUserState(false);
      }
    } else {
      setUserState(false);
      setPassState(false);

      var request = await axios.post(
        "   https://dry-stream-49562.herokuapp.com/signup",
        {
          username,
          password,
        }
      );

      if (request.status === 201) {
        setServerData(request.data);
        setServer(true);
        console.log(request.data);
        setUsername("");
        setpassword("");
      } else {
        setServerData(request.data);
        setServer(true);
        console.log(request.data);
        setUsername("");
        setpassword("");
        setTimeout(() => {
          window.location.replace("http://localhost:3000/Login");
        }, 500);
      }
      setTimeout(() => {
        setServer(false);
      }, 1000);
    }
  };
  return (
    <MegaContainer>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>
            <b> CREATE AN ACCOUNT </b>
          </Title>
          <Form>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                {server && <Warning>*{serverData}</Warning>}
                {userstate && <Warning>*Enter username</Warning>}

                <Input
                  placeholder="UserName"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="col-md-12 col-lg-6">
                {passstate && <Warning>*Enter Password</Warning>}

                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <br />
            <Button type="submit" onClick={(e) => handleSubmit(e)}>
              CREATE
            </Button>
            <LoginLink>
              <Link to="/Login">
                {" "}
                <Bold> Login </Bold>
              </Link>
              if you have been registered
            </LoginLink>
          </Form>
        </Wrapper>
      </Container>
    </MegaContainer>
  );
};

export default SignUp;
