import React, { useEffect, useState } from "react";
import "./App.css";
import Profile_table from "./profile_data.jsx";

export default function App() {
  // first empty array and then will set with the data given in api
  const [arr, setArr] = useState([]);
  // card display first -1 that is nothingand then will set according to it's index to display particular user

  const [currentpage, setCurrentPage] = useState(1);
  const [totalpage, setTotalPage] = useState(0);

  function handlePageChange(i) {
    setCurrentPage(i);
    //fetching api and diplaying page according to the button clicked by user
    fetch(`https://reqres.in/api/users?page=${i}`)
      .then((response) => response.json())
      .then((json) => {
        setTotalPage(json.total_pages);

        if (i == 1) {
          json.data[0].access = "Owner";
          json.data[0].status = "Active";
          setArr(json.data);
        } else {
          setArr(json.data);
        }
      });
  }
  // Will render at first time when componenet mounts
  useEffect(() => handlePageChange(1), []);

  return (
    <>
      <div className="container-fluid row">
        <Profile_table
          arr={arr}
          currentpage={currentpage}
          totalpage={totalpage}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}
