import { Grid, Container, Avatar } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import CustomCard from "../../Component/CustomCard/CustomCard";
import { mapped_data } from "../../Component/data/data";
const DetailsPage = () => {
  const { id } = useParams();
  const data = mapped_data[id];
  return (
    <Container style={{ marginTop: 10 }}>
      <Grid container justify="center">
        <Grid item xs={12} container justify="center">
          <CustomCard
            data={data}
            elevation={1}
            disableZoom={true}
            showAllDetails
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailsPage;
