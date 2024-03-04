import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")

const filteredList = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))


useEffect(()=>{
  fetch("http://localhost:6001/plants")
  .then((resp) => resp.json())
  .then((data) => setPlants(data))
}, [])
console.log(plants)

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList filteredList={filteredList} plants={plants} />
    </main>
  );
}

export default PlantPage;
