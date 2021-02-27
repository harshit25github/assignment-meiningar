import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { newData } from "./menu";

const dataFilter = newData;
let filteredData = newData;

export default function ClusterMenu(props) {
  console.log(newData);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget, event.data);
  };

  const handleClose = (val = "") => {
    setAnchorEl(null);
    props.onClusterSelected(val);
    const filteredData = dataFilter.filter((data) => {
      console.log(val);
      return data.cluster.toLowerCase() === val?.toLowerCase?.();
    });
    console.log(filteredData);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "white", border: "2px solid white", marginTop: "10px" }}
      >
        {props.cluster || "Cluster"}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        PaperProps={{
          style: {
            backgroundColor: "rgba(0,0,0,1)",
            color: "white",
            minWidth: 200,
          },
        }}
        onClose={() => handleClose2("")}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose("")}>All</MenuItem>
        <MenuItem onClick={() => handleClose("cluster-a-32")}>
          cluster-a-32
        </MenuItem>
        <MenuItem onClick={() => handleClose("cluster-a-1")}>
          cluster-a-1
        </MenuItem>
        <MenuItem onClick={() => handleClose("cluster-a-21")}>
          cluster-a-21
        </MenuItem>
        <MenuItem onClick={() => handleClose("cluster-a-2")}>
          cluster-a-2
        </MenuItem>
        <MenuItem onClick={() => handleClose("cluster-v-2")}>
          cluster-v-2
        </MenuItem>
      </Menu>
    </div>
  );
}

export const newData2 = filteredData;
