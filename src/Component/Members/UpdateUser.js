import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UpdateUser = (props) => {
  const [user, setUser] = useState({
    firstName: props.editUser.firstName,
    lastName: props.editUser.lastName,
    email: props.editUser.email,
    phone: props.editUser.phone,
    id: props.editUser.id,
  });

  const history = useHistory();

  const { firstName, lastName, email, phone } = user;

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    // const data = {
    //   ...user,
    //   _id: Math.random(),
    // };
    await axios.put(`http://localhost:3003/users/${user.id}`, user);
    props.onClick(false);
    history.push("Members");
    props.loadUsers();
  };

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result.data);
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <table className="table container">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Mail ID</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="input-group  mb-">
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    name="firstName"
                    required="Required"
                    placeholder="First Name"
                    onChange={(e) => handleOnChange(e)}
                    className="form-control bg-white border-left-0 border-md"
                  />
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    name="lastName"
                    required="Required"
                    placeholder="Last Name"
                    onChange={(e) => handleOnChange(e)}
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
              </td>
              <td>
                <div className="input-group  mb-">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => handleOnChange(e)}
                    required="Required"
                    placeholder="E-Mail ID"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
              </td>
              <td>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => handleOnChange(e)}
                  required="Required"
                  placeholder="Contact"
                  className="form-control bg-white border-left-0 border-md"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="container block ">
          <button
            // onClick={ handleSubmit}
            type="button"
            onClick={() => props.onClick(false)}
            className="btn btn-warning position-relative col-4 ms-5 "
          >
            Close
          </button>

          <button
            // onSubmit={onSubmit}
            type="submit"
            className="btn btn-success position-relative col-7 ms-1 "
          >
            Update User
          </button>
        </div>
      </form>
    </>
  );
};
export default UpdateUser;
