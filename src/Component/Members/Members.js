import React, { useEffect, useState } from "react";
import axios from "axios";
import AddUser from "./AddUser";
const Members = () => {
  const [addUserForm, setaAdUserForm] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const handleAddUser = (active) => {
    console.log(active);
    setaAdUserForm(active);
  };

  const handleDelet = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <>
      {addUserForm && <AddUser loadUsers={loadUsers} onClick={handleAddUser} />}

      <div
        className="container  py-1 mt-5 backgrounds mb-5"
        style={{
          boxShadow: "-1px 8px 24px 6px rgba(0,0,0,0.36)",
          WebkitBoxShadow: "-1px 8px 24px 6px rgba(0,0,0,0.36)",
          MozBoxShadow: "-1px 8px 24px 6px rgba(0,0,0,0.36)",
          background: "white",
        }}
      >
        <div
          className="row rows-cols-4 border-bottom py-2 "
          style={{ fontFamily: "arial" }}
        >
          <div className="col">
            <b> User Name </b>
          </div>
          <div className="col ">
            <b> E-Mail Id</b>
          </div>
          <div className="col ">
            <b> Phone No.</b>
          </div>
          <div className="col ">
            <button
              onClick={() => handleAddUser(true)}
              to="/AddUser"
              type="button"
              className="btn btn-primary btn-sm position-relative"
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
            >
              Add New User
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                +
              </span>
            </button>
          </div>
        </div>
        {user.map((user, index) => {
          return (
            <div className="row row-cols-4 border-bottom py-1 hover">
              <div className="col">
                {user.firstName} {user.lastName}
              </div>
              <div className="col ">{user.email}</div>
              <div className="col ">{user.phone}</div>
              <div className="col">
                <button className="btn btn-sm btn-light me-1">Edit</button>
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => handleDelet(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}

        {/* return <Members key={index} user={contents} />; */}
      </div>
    </>
  );
};
export default Members;
