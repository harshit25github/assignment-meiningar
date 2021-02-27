import React, { Component } from "react";
// import WareHouse from "../../Component/wareHouse/wareHouse";
// import data, { mapped_data } from "../../Component/data/data";
import {
  Grid,
  Checkbox,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Container,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import "./wareHouses.css";
import FadeMenu from "../../Component/menu/menu";
import FadeMenuCluster from "../../Component/menu/menuCluster";
import { newData2 } from "../../Component/menu/menuCluster";
import CustomCard from "../../Component/CustomCard/CustomCard";
class WareHouses extends Component {
  state = {
    data: newData2,
    cluster: "",
    city: "",
    sub: "",
  };

  render() {
    console.log(this.state.data);

    const { sub, cluster, city, data } = this.state;
    // const warehouses1 = data.filter();
    const wareHouses = this.state.data
      .filter((data) => this.shouldFilterByCity(city, data.city))
      .filter((data) => this.shouldFilterByCluster(cluster, data.cluster))
      .filter((data) => {
        return data.name.toLowerCase().indexOf(sub.toLowerCase()) !== -1;
      })
      .map((data) => {
        return <CustomCard data={data} elevation={2} />;
      });
    const whiteStyle = { color: "white" };
    return (
      <div className="body">
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
            }}
          >
            <FormControl>
              <InputLabel
                htmlFor="input-with-icon-adornment"
                style={{ color: "white", marginBottom: "10px" }}
              >
                Search by Name
              </InputLabel>
              <Input
                style={(whiteStyle, { backgroundColor: "#606060" })}
                id="input-with-icon-adornment"
                placeholder="search"
                value={sub}
                st
                onChange={(e) => {
                  this.setState({ sub: e.target.value });
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchOutlined style={whiteStyle} />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FadeMenu
              onCitySelected={(city) => this.setState({ city: city })}
              city={city}
            />
            {/* {cities} */}
            <FadeMenuCluster
              cluster={cluster}
              onClusterSelected={(cluster) =>
                this.setState({ cluster: cluster })
              }
            />
          </div>
          <Grid container spacing={3}>
            {wareHouses}
          </Grid>
        </Container>
      </div>
    );
  }
  /* only return either true or false*/
  shouldFilterByCity(query = "", currentCity) {
    if (!query) {
      return true;
    }
    return query === currentCity?.toLowerCase?.();
  }
  /* only return either true or false*/
  shouldFilterByCluster(query = "", currentCluster) {
    if (!query) {
      return true;
    }
    return query === currentCluster;
  }
}

export default WareHouses;

// return (
//   <Grid item xs={12} sm={6} md={4}>
//     <WareHouse
//       key={data.code}
//       name={data.name}
//       city={data.city}
//       space={data.space_available}
//       cluster={data.cluster}
//     />
//   </Grid>
// );
