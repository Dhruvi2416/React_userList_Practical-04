import React, { useState } from "react";
import "./App.css";

export default function App() {
  const obj0 = {
    name: "Jana Strassmann",
    email: "batz.mortimer@yahoo.com",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBggaQPUlVZTafvGODsbxEsjt_3cKLFyjwA&usqp=CAU",
    status: "Active",
    access: "Owner",
  };
  const obj1 = {
    name: "Jube Bowman",
    email: "ullrich.owen@kristin.biz",
    img: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Inactive",
    access: "Manager",
  };
  const obj2 = {
    name: "Kwak Seong-Min",
    email: "kale_lehner@yahoo.com",
    img: "https://i.pinimg.com/736x/60/7a/c7/607ac7108708bddbc549c37fdef374b0.jpg",
    status: "Inactive",
    access: "Read",
  };

  const obj3 = {
    name: "Lean Hunt",
    email: "ullrich.owen@kristin.biz",
    img: "https://qph.cf2.quoracdn.net/main-qimg-2e154de9928d39231ab4526d12d1c1b5-lq",
    status: "Inactive",
    access: "Manager",
  };

  const obj4 = {
    name: "Nitithorn Prinya",
    email: "ullrich.owen@kristin.biz",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpxBJojY1to2PR13mo43pxbnct4a3QVP0aw&usqp=CAU",
    status: "Inactive",
    access: "Manager",
  };

  const obj5 = {
    name: "Nombeko Mabandia",
    email: "kale_lehner@yahoo.com",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGE7lf5hYNb4EppbrOCvrln7Bxufm-AaDGA&usqp=CAU",
    status: "Inactive",
    access: "Read",
  };

  const obj6 = {
    name: "Nwoye Akachi",
    email: "ullrich.owen@kristin.biz",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Fs7gKDmwToX__Y7vHf_nbJmLK3BA6rdBIg&usqp=CAU",
    status: "Inactive",
    access: "Manager",
  };

  const obj7 = {
    name: "Paulina Gayoso",
    email: "kale_lehner@yahoo.com",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkohfRidZKKq9kBPDAksr6gK6Ym-AbI3QHkw&usqp=CAU",
    status: "Inactive",
    access: "Read",
  };

  const obj8 = {
    name: "Phawta Tuntayakul",
    email: "ullrich.owen@kristin.biz",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRryGMrAhw81ROGThYiDtE-bxTbY6VZKubPcg&usqp=CAU",
    status: "Inactive",
    access: "Manager",
  };

  const obj9 = {
    name: "Siri Jakobsson",
    email: "ullrich.owen@kristin.biz",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrgbjkevk_l2OzmJ1uDbqe9Uj7ZuTbmhIhcv1hiQvXnmN4D1jRsoeCW5JveExgiXjWkM&usqp=CAU",
    status: "Inactive",
    access: "Manager",
  };
  const arr = [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];

  const [display, setDisplay] = useState(-1);

  function hoverd() {
 
    setDisplay(display + 1);
  }

  return (
    <>
      <div className="container-fluid row">
        <div className="left_part col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-8">
          <table className="table no-border">
            <thead>
              <tr>
                <th scope="col-lg-2" className="heading">
                  <h5>Name</h5>
                </th>
                <th scope="col-lg-8" className="heading">
                  <h5>Status</h5>
                </th>
                <th scope="col-lg-2" className="heading">
                  <h5>Access</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {arr.map((list, i) => {
                return (
                  <tr className="item_loop " key={i}>
                    <td>
                      <div
                        className="name_list d-flex"
                        onMouseEnter={() => setDisplay(i)}
                        onMouseLeave={() => setDisplay(-1)}
                      >
                        <div className="profile_pic">
                          <img src={list.img}></img>
                        </div>
                        <div className="info">
                          <h6>{list.name}</h6>
                          <p>{list.email}</p>
                        </div>
                      </div>
                    </td>
                   
                    {list.access == "Owner" ? (
                      <>
                        <td>
                          <div className="owner_status">
                            <h6>Active</h6>
                          </div>
                        </td>
                        <td>
                          <div className="owner_access">
                            <h6>Owner</h6>
                          </div>
                        </td>
                        <td>
                          <div className="owner_lock">
                            <i class="fas fa-lock fa-xl"></i>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>
                          {/* dropdown menu to show status */}

                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {list.status}
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <a className="dropdown-item" href="#">
                                  Active
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          <div className="access_list ">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {list.access}
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Read
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td>
                          <i className="fa fa-trash-o fa-xl"></i>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="right col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 col-xxl-4">


          {display == -1 ? null : (
            <div className="box">
              <div className="center_content d-flex">
                <div className="image_right">
                  <img src={arr[display].img}></img>
                </div>
                <p>{arr[display].name}</p>
                <p>{arr[display].email}</p>
                <h4>Your Plan: Standard </h4>
                <button>Active User</button>
              </div>

              <h5>Plan Uses</h5>
              <div>
                <input type="range" id="range" />
              </div>

              <div className="numbers d-flex">
                <div className="clicks_reviewed">
                  <h3>2,450</h3>
                  <p>clicks reviewed</p>
                </div>
                <div className="border_between"></div>

                <div className="monthly_click">
                  <h3>5000</h3>
                  <p>Monthly clicks</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
