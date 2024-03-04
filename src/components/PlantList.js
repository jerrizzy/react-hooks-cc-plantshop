import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, filteredList }) {


  return (
    <ul className="cards">
      {filteredList.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
    </ul>
  );
}

export default PlantList;
