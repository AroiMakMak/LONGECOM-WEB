import React, { useEffect, useState } from "react";
import { getOrders } from "../../api/user";
import useEcomStore from "../../store/ecom-store";
import { dateFormatEn,dateFormatTh } from "../../utils/date";
import { numberFormat } from "../../utils/number";




const HIstoryCard = () => {
  const token = useEcomStore((state) => state.token);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    handleGetOrders(token);
  }, []);

  const handleGetOrders = (token) => {
    getOrders(token)
      .then((res) => {
        // console.log(res);
        setOrders(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getStatuscolor = (status) => {
    switch (status) {
      case "Not Process":
        return "bg-gray-200";
      case "Processing":
        return "bg-blue-200";
      case "Completed":
        return "bg-green-200";
      case "Cancel":
        return "bg-red-200";
    }
  };

  return (
    <div className=" space-y-2">
      <h1 className=" text-2xl font-bold">ประวัติการสั่งซื้อ</h1>
      {/* คลุม */}
      <div className=" space-y-2">
        {orders?.map((item, index) => {
          return (
            <div key={index} className=" bg-gray-100 p-4 rounded-md shadow-md">
              {/* Header */}
              <div className=" flex justify-between mb-2">
                <div>
                  <p className=" text-sm">Order date</p>
                  <p className=" font-bold">{dateFormatEn(item.updatedAt)}</p>
                </div>
                <div>
                  <span className={`${getStatuscolor(item.orderStatus)} px-2 rounded-full`} >
                    {item.orderStatus}
                  </span>
                </div>
              </div>

              {/* Table Loop Product*/}
              <div>
                <table className=" border w-full">
                    <thead>
                        <tr className=" bg-gray-200">
                            <th>สินค้า</th>
                            <th>ราคา</th>
                            <th>จำนวน</th>
                            <th>รวม</th>
                        </tr>
                    </thead>
                  <tbody>
                    {item.products?.map((product, index) => {
                      {/* console.log(product); */}
                      return (
                        
                        <tr key={index}>
                          <td>{product.product.title}</td>
                          <td>{numberFormat(product.product.price)}</td>
                          <td>{product.count}</td>
                          <td>{numberFormat(product.count * product.product.price)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/* Total */}
              <div>
                <div className=" text-right">
                  <p>ราคาสุทธิ</p>
                  <p>{numberFormat(item.cartTotal)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HIstoryCard;
