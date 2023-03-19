import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function UserData() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user);

  console.log("no se ejecuto el useEffect en user tweets");
  useEffect(() => {
    console.log("se ejecuto useEffect en user data");
    const getData = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `http://localhost:8000/users/${user.id}`,
      });
      setData(response.data);
      console.log(response.data);
    };
    getData();
  }, []);
  return (
    <div>
      <div className="col-10 col-md-10 col-lg-6 offset-2">
        <div className="portada"></div>
        <div id="profile-items-alignment" className="d-flex justify-content-between">
          <img src={data.profileImg} id="imgOnUserProfile" alt="" />
          <div id="follow-button-alignmet">
            <form method="post">
              <button type="submit" className="rounded-pill mb-3 mt-2 me-2" id="unfollow-btn">
                Unfollow
              </button>
            </form>

            <form action="<%= user._id %>/follow" method="post">
              <button type="submit" className="text-light rounded-pill mb-3 mt-2 me-2" id="follow-button">
                Follow
              </button>
            </form>
          </div>
        </div>
      </div>

      <h2>
        {data.firstname} {data.lastname}{" "}
      </h2>
      <h5>{data.username} </h5>
      <p></p>
      <div className="d-flex justify-content-end column-gap-3">
        <h5>
          <span className="fw-bold opacity-100"></span>
          <Link to="/users/follow" className="text-decoration-none text-dark">
            Following
          </Link>
        </h5>
        <br />
        <h5>
          <span className="fw-bold opacity-100"></span>
          <Link to="/users/follow" className="text-decoration-none text-dark">
            Followers
          </Link>
        </h5>
      </div>
      <div>
        <h5 className="ms-2 mt-4" id="tweets-label"></h5>
      </div>
      <div>
        <div>
          <div class="d-flex border border-light p-2">
            <div>
              <img src="<%= user.profileImg%>" class="profile-img" alt="user profile pic" />
            </div>
            <div class="ms-2">
              <div class="name">{/*  {user.firstname} {user.lastname} */}</div>

              <div class="username">{/*    @{user.username} {tweet.createdAt} */}</div>

              {/* <p id="content"> {tweet.content}</p> */}
              <div class="d-flex justify-content-between">
                <form action="/user/<%= user._id %>/<%= tweet._id %>/like" method="post">
                  <button type="submit" class="h_container">
                    <i id="heart" class="far fa-heart heart"></i>
                  </button>
                  {/* <span class="heart">{tweet.likes.length} </span> */}
                </form>
                {/* <% if (logedUser.username === user.username) {%> */}
                {/* <form action="/tweet/<%= tweet._id %>?_method=DELETE" method="post"> */}
                <button type="submit" class="h_container">
                  <i class="fa fa-trash-o heart"></i>
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserData;
