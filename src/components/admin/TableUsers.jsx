import React, { useEffect, useState } from "react";
import { getListAllUser } from "../../api/admin";
import useEcomStore from "../../store/ecom-store";
import { changeStatusUser, changeRoleUser } from "../../api/admin";
import {  toast} from "react-toastify";


const TableUsers = () => {
  const token = useEcomStore((state) => state.token);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleGetUsers(token);
  }, []);

  const handleGetUsers = (token) => {
    getListAllUser(token)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChangeuserRole = (userId, userRole) => {
    // console.log(userId,userStatus)
    const value = {
      id: userId,
      role: userRole,
    };
    changeRoleUser(token, value)
      .then((res) => {
        // console.log(res);
        handleGetUsers(token);
        toast.success('Update Role Success')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChangeuserStatus = (userId, userStatus) => {
    console.log(userId, userStatus);
    const value = {
      id: userId,
      enabled: !userStatus,
    };
    changeStatusUser(token, value)
      .then((res) => {
        console.log(res);
        handleGetUsers(token);
        toast.success('Update Role Success')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-md">
      <table className=" w-full">
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>Email</th>
            {/* <th>วันที่แก้ไขล่าสุด</th> */}
            <th>สิทธิ์</th>
            <th>สถานะ</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.email}</td>
              {/* <td>{item.updatedAt}</td> */}
              <td>
                <select 
                onChange={(e)=>handleChangeuserRole(item.id,e.target.value)}
                value={item.role}>
                  <option>user</option>
                  <option>admin</option>
                </select>
              </td>

              <td>{item.enabled ? "Active" : "Inactive"}</td>
              <td>
                <button
                  className=" bg-yellow-500 text-white p-1 rounded-md shadow-md"
                  onClick={() => handleChangeuserStatus(item.id, item.enabled)}
                >
                  {item.enabled ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
