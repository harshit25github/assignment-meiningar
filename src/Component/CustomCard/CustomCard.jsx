import React, { useState } from "react";
import style from "./style.module.css";
import { Avatar, Button, Grid, Typography, Checkbox } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function CustomCard({
  elevation = 0,
  data,
  disableZoom,
  showAllDetails = false,
}) {
  const history = useHistory();
  const [isHover, setIsHover] = useState(false);
  const style_arr = [
    style.card_container_elevation_0,
    style.card_container_elevation_1,
    style.card_container_elevation_2,
    style.card_container_elevation_3,
    style.card_container_elevation_4,
    style.card_container_elevation_5,
    style.card_container_elevation_6,
  ];
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={style_arr[elevation + (isHover ? 1 : 0)]}
        style={{
          transform:
            !isHover && !disableZoom ? "translateY(0px)" : "translateY(-10px)",
          border: "2px solid rgba(255,0,0,0.1)",
        }}
      >
        <Avatar
          src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          style={{
            height: !isHover && !disableZoom ? 200 : 220,
            width: "100%",
            transition: "1s all",
          }}
          variant="rounded"
        />
        <Grid container spacing={3} style={{ minHeight: 200, padding: 10 }}>
          <Grid item xs={12} container justify="center">
            <Grid item>
              <Typography variant="h5" style={{ color: "white" }}>
                {data.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container justify="flex-start">
            <Typography style={{ color: "white" }}>
              <span style={{ color: "grey" }}>City : </span>
              {data.city}
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="flex-start">
            <Typography style={{ color: "white" }}>
              <span style={{ color: "grey" }}>Cluster : </span>
              {data.cluster}
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="flex-start">
            <Typography style={{ color: "white" }}>
              <span style={{ color: "grey" }}>Space Availabele : </span>
              {data.space_available}
            </Typography>
          </Grid>

          {showAllDetails && [
            <Grid item xs={12} container justify="flex-start">
              <Typography style={{ color: "white" }}>
                <span style={{ color: "grey" }}>Space Availabele : </span>
                {data.type}
              </Typography>
            </Grid>,
            <Grid item xs={12} container justify="flex-start" key={data.code}>
              <Typography style={{ color: "white" }}>
                <span style={{ color: "grey" }}>Is registered : </span>
                <Checkbox checked={data.is_registered} />
              </Typography>
            </Grid>,
            <Grid item xs={12} container justify="flex-start">
              <Typography style={{ color: "white" }}>
                <span style={{ color: "grey" }}>Is live : </span>
                <Checkbox checked={data.is_live} />
              </Typography>
            </Grid>,

            // type: "Leasable Space",
            // cluster: "cluster-a-1",
            // is_registered: true,
            // is_live: false,
          ]}
        </Grid>
        {!showAllDetails && (
          <Grid item xs={12}>
            <Button
              style={{ color: "red", background: "rgba(255,255,255,0.05)" }}
              variant="contained"
              fullWidth
              onClick={() => history.push(`/${data.name}`)}
            >
              More Details
            </Button>
          </Grid>
        )}
      </div>
    </Grid>
  );
}

export default CustomCard;
