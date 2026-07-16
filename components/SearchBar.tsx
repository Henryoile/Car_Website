"use client";

import { useState } from "react"

import { SearchManufacturer } from "./"
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("")
  const handlesSearch = () => {
    // search logic goes here
  }

  return (
    <form className="searchbar" onSubmit={handlesSearch}>
        <div className="searchbar__item">
          <SearchManufacturer 
            manufacturer={manufacturer} setManufacturer={setManufacturer}
          />  
        </div>
    </form>
  )
}

export default SearchBar