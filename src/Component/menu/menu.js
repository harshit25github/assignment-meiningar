import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import data from "../data/data";

const dataFilter = data;
let filteredData = data;

export default function CityMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget, event.data);
  };

  const handleClose = (val = "") => {
    setAnchorEl(null);
    props.onCitySelected(val);
  };

  return (
    <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        fullWidth
        onClick={handleClick}
        style={{ color: "white", border: "2px solid white", marginTop: "10px" }}
      >
        {props.city || "cities"}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        PaperProps={{
          style: {
            backgroundColor: "rgba(0,0,0,1)",
            color: "white",
            minWidth: 200,
          },
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose("")}>All</MenuItem>
        <MenuItem onClick={() => handleClose("indore")}>Indore</MenuItem>
        <MenuItem onClick={() => handleClose("delhi")}>Delhi</MenuItem>
        <MenuItem onClick={() => handleClose("chennai")}>Chennai</MenuItem>
        <MenuItem onClick={() => handleClose("mumbai")}>Mumbai</MenuItem>
        <MenuItem onClick={() => handleClose("bangalore")}>Bangalore</MenuItem>
        <MenuItem onClick={() => handleClose("guwahati")}>Guwahati</MenuItem>
      </Menu>
    </div>
  );
}

export const newData = filteredData;

// export default filteredData;
// export default function Cluster() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     // console.log(event.currentTarget, event.data);
//   };

//   const handleClose = (val) => {
//     setAnchorEl(null);
//     const filteredData = dataFilter.filter((data) => {
//       //   console.log(data.city);

//       return data.city.toLowerCase() === val.toLowerCase();
//     });
//     console.log(filteredData);
//   };

//   return (
//     <div>
//       <Button
//         aria-controls="fade-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//         style={{ color: "white" }}
//       >
//         Open with fade transition
//       </Button>
//       <Menu
//         id="fade-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//       >
//         <MenuItem onClick={() => handleClose("indore")}>Indore</MenuItem>
//         <MenuItem onClick={() => handleClose("delhi")}>Delhi</MenuItem>
//         <MenuItem onClick={() => handleClose("chennai")}>Chennai</MenuItem>
//         <MenuItem onClick={() => handleClose("mumbai")}>Mumbai</MenuItem>
//         <MenuItem onClick={() => handleClose("bangalore")}>Bangalore</MenuItem>
//         <MenuItem onClick={() => handleClose("guwahati")}>Guwahati</MenuItem>
//       </Menu>
//     </div>
//   );
// }
