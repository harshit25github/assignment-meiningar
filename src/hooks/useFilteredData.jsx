import React, { useState } from "react";
import Data from "../Component/data/data";
function useFilteredData(props) {
  const [city, setCity] = useState("");
  const [cluster, setCluster] = useState("");
  console.log(city);
  console.log(cluster);
  return { data: Data, setCity, setCluster };
}

export default useFilteredData;
