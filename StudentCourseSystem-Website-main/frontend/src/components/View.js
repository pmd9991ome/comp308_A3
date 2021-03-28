import CreateCourse from "./CreateCourse";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
//
function View(props) {
  // read the info from props, coming from the ancestor component
  const { screen, setScreen } = props;
  // return a stateful value and funcion to update it
  const [data, setData] = useState();
  //
  const [course, setCourse] = useState("");
  // called when student clicks on Logout button
  // to clear the cookie and set the screen state variable
  // back to its initial state.
  const deleteCookie = async () => {
    try {
      await axios.get("/signout");
      setScreen("auth");
    } catch (e) {
      console.log(e);
    }
  };
  // called when student clicks on Get Data button
  // end-point demonstrates another example for the use
  // of cookie specific response from the server.
  const verifyCookie = async () => {
    try {
      const res = await axios.get("/welcome");
      console.log(res.data);
      setData("Cookie varified " + res.data + ".");
    } catch (e) {
      console.log(e);
    }
  };
  //
  //
  const createCourse = () => {
    console.log("in createCourse");
    setCourse("y");
  };
  //
  return (
    <>
      <Container>
        <div className="text-center">
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
              width: "50vw",
              height: "50vh",
            }}
          >
            {course !== "y" ? (
              <>
                <h1>DASHBOARD</h1>
                <p>Welcome back {screen}.</p>
                <p>{data}</p>
                <Button
                  style={{
                    backgroundColor: "#3a6351",
                    border: "none",
                    color: "white",
                    padding: "15px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "15px",
                    fontWeight: "bold",
                    margin: "10px",
                  }}
                  variant="primary"
                  type="button"
                  onClick={verifyCookie}
                >
                  VERIFY COOKIE
                </Button>

                <Button
                  style={{
                    backgroundColor: "#e48257",
                    border: "none",
                    color: "white",
                    padding: "15px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "15px",
                    fontWeight: "bold",
                    margin: "10px",
                  }}
                  variant="primary"
                  type="button"
                  onClick={createCourse}
                >
                  ADD COURSE
                </Button>
                <Link to="/listcourses">
                  <Button
                    style={{
                      backgroundColor: "#393232",
                      border: "none",
                      color: "white",
                      padding: "15px 32px",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "15px",
                      fontWeight: "bold",
                      margin: "10px",
                    }}
                    variant="primary"
                    type="button"
                  >
                    MY COURSES
                  </Button>
                </Link>
                <Button
                  style={{
                    backgroundColor: "#ac0d0d",
                    border: "none",
                    color: "white",
                    padding: "15px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "15px",
                    fontWeight: "bold",
                    margin: "10px",
                  }}
                  variant="primary"
                  type="button"
                  onClick={deleteCookie}
                >
                  LOGOUT
                </Button>

                <footer
                  style={{
                    position: "fixed",
                    left: "0",
                    bottom: "0",
                    width: "100%",
                    backgroundColor: "#eeeeee",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <p style={{ margin: "20px" }}>
                    <Link style={{ textDecoration: "none" }} to="/list">
                      {" "}
                      VIEW ALL STUDENTS{" "}
                    </Link>{" "}
                    ||{" "}
                    <Link style={{ textDecoration: "none" }} to="/listcourses">
                      {" "}
                      VIEW ALL COURSES
                    </Link>
                  </p>
                </footer>
              </>
            ) : (
              <CreateCourse screen={screen} setScreen={setScreen} />
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

//
export default View;
