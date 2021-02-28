import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import WareHouses from "../wareHouses/wareHouses";
import WareHouseDetails from "../warehouse_details/Details";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <header
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: 30,
              display: "flex",
              marginBottom: 20,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                padding: "10px 20px",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 10,
              }}
            >
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  fontSize: 20,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                home
              </NavLink>
            </div>
          </header>

          <Route path="/" exact component={WareHouses} />
          <Route path="/:id" exact component={WareHouseDetails} />
        </Container>
      </div>
    );
  }
}

export default Home;
