import React, { ReactElement, useState } from "react";
import LeftMenu from "../components/Layout/LeftMenu";
import TableUi from "../components/TableUi";

const Pay = () => {
  const [orderId, setOrderId] = useState("");

  const [tableId, setTableId] = useState("");

  return (
    <div className="w-full flex">
      <div className="grid grid-cols-8 p-4 gap-y-10 w-3/4">
        <div
          className={`w-20 h-20 bg-gray-400 shadow-md rounded-md cursor-pointer border-2 border-dashed`}
        >
          <p
            className={`flex items-center justify-center h-full text-gray-500 font-medium text-2xl`}
          >
            +
          </p>
        </div>

        <div onClick={() => setTableId("1")}>
          <TableUi full={true} number={1} />
        </div>
        <TableUi full={false} number={2} />
        {/* {tables.map((table) => (
        <div key={table.id} onClick={() => router.push("/menu")}>
          <TableUi full={table.full} number={table.number} />
        </div>
      ))} */}
      </div>

      {tableId !== "" && (
        <div className="p-2 w-1/4 bg-primary-300 my-1 rounded-l-xl">
          {/* top Part */}
          <div>
            <h2 className="font-bold text-xl">Ordenes</h2>

            <div
              className={`${
                orderId === "123" ? "bg-gray-400 text-gray-800" : "bg-white"
              } w-full p-2 rounded-md text-center font-bold my-2 shadow-md `}
              onClick={() => setOrderId("123")}
            >
              Ricardo
            </div>

            <div
              className={`${
                orderId === "124" ? "bg-gray-400 text-gray-800" : "bg-white"
              } w-full p-2 rounded-md text-center font-bold my-2 shadow-md `}
              onClick={() => setOrderId("124")}
            >
              Rachell
            </div>
          </div>

          {/* order part */}

          {/* pay part */}
          <div>
            <button className="bg-white">Prepagar</button>
            <button className="bg-white">Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
};

Pay.getLayout = function getLayout(page: ReactElement) {
  return <LeftMenu>{page}</LeftMenu>;
};

export default Pay;
