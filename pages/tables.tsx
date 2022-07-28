import { API, graphqlOperation } from "aws-amplify";
import { ReactElement, useEffect, useState } from "react";
import {
  CreateTableInput,
  ListTablesQuery,
  ModelIDInput,
  ModelIDKeyConditionInput,
  Table,
} from "../src/API";
import { createTable } from "../src/graphql/mutations";
import { listTables } from "../src/graphql/queries";
import { useRouter } from "next/dist/client/router";
import LeftMenu from "../components/Layout/LeftMenu";
import TableUi from "../components/TableUi";

const Tables = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const router = useRouter();

  const createNewTable = async () => {
    const newTable: CreateTableInput = {
      full: false,
      number: tables.length + 1,
      tenantId: "2",
    };
    console.log("table", newTable);

    const created: any = await API.graphql({
      query: createTable,
      variables: { input: newTable },
      authMode: "API_KEY",
      authToken: "da2-hsyo6k652veqdc7zkjxctqpdqi",
    });

    setTables(tables.concat(created.data.createTable));
  };

  const getTables = async () => {
    const tenantId: ModelIDInput = {
      eq: "2",
    };

    const item: any = await API.graphql<ListTablesQuery>(
      graphqlOperation(listTables, {
        filter: {
          tenantId,
        },
      })
    );
    setTables(item.data.listTables.items);
  };

  useEffect(() => {
    getTables();
  }, []);

  return (
    <div className="">
      {/* tables */}
      <div className="grid grid-cols-8 p-4 gap-10">
        <div
          className={`w-20 h-20 bg-gray-400 shadow-md rounded-md cursor-pointer border-2 border-dashed`}
          onClick={createNewTable}
        >
          <p
            className={`flex items-center justify-center h-full text-gray-500 font-medium text-2xl`}
          >
            +
          </p>
        </div>

        {tables.map((table) => (
          <div key={table.id} onClick={() => router.push("/menu")}>
            <TableUi full={table.full} number={table.number} />
          </div>
        ))}
      </div>
    </div>
  );
};

Tables.getLayout = function getLayout(page: ReactElement) {
  return <LeftMenu>{page}</LeftMenu>;
};

export default Tables;
