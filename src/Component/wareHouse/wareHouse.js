import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import warehouse from "../../assets/wall1.jpg";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "20px auto",
    borderRadius: " 20px",
    transition: " 1s all",
  },
});

export default function WareHouse(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={warehouse}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: "bolder" }}>City:</span> {props.city}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: "bolder" }}>Cluster:</span>{" "}
            {props.cluster}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: "bolder" }}>Space Availabity:</span>{" "}
            {props.space}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={() => history.push(`/${props.name}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
