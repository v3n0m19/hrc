import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const tableData = [
  {
    id: 1,
    orderID: "946851639",
    salesOrg: "3537",
    distributionChannel: "United States of America",
    companyCode: "3220",
    creationDate: "01-01-2022",
    amount: 954.61,
    currency: "EUR",
    customerNumber: "12311807",
    amountUSD: "$1028.389767",
  },
  {
    id: 2,
    orderID: "961786146",
    salesOrg: "4354",
    distributionChannel: "Nepal",
    companyCode: "3670",
    creationDate: "20-04-2022",
    amount: 49.8,
    currency: "USD",
    customerNumber: "1230024618",
    amountUSD: "$49.80",
  },
  {
    id: 3,
    orderID: "786054799",
    salesOrg: "2942",
    distributionChannel: "Tuvalu",
    companyCode: "3220",
    creationDate: "27-01-2022",
    amount: 1036.51,
    currency: "EUR",
    customerNumber: "12311807",
    amountUSD: "$1116.619643",
  },
  {
    id: 4,
    orderID: "846323486",
    salesOrg: "3670",
    distributionChannel: "Nicaragua",
    companyCode: "3670",
    creationDate: "10-01-2022",
    amount: 2399.4,
    currency: "USD",
    customerNumber: "1230014209",
    amountUSD: "$2399.40",
  },
  {
    id: 5,
    orderID: "807981284",
    salesOrg: "3973",
    distributionChannel: "Mongolia",
    companyCode: "3660",
    creationDate: "10-01-2022",
    amount: 10977.12,
    currency: "USD",
    customerNumber: "1230014342",
    amountUSD: "$10977.12",
  },
  {
    id: 6,
    orderID: "864325690",
    salesOrg: "3383",
    distributionChannel: "New Caledonia",
    companyCode: "3590",
    creationDate: "21-05-2022",
    amount: 446.4,
    currency: "CAD",
    customerNumber: "1230002613",
    amountUSD: "$334.921409",
  },
];

const App = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleRowSelection = (id) => {
    if (id === "selectAll") {
      const newSelectedRows = selectAll ? [] : tableData.map((row) => row.id);
      setSelectedRows(newSelectedRows);
      setSelectAll(!selectAll);
    } else {
      if (selectedRows.includes(id)) {
        setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
      } else {
        setSelectedRows([...selectedRows, id]);
      }
    }
  };

  return (
    <div className="App">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <td>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={() => handleRowSelection("selectAll")}
                />
              </td>

              <th>SI No</th>
              <th>CUSTOMER ORDER ID</th>
              <th>SALES ORG</th>
              <th>DISTRIBUTION CHANNEL</th>
              <th>ORDER CREATION DATE</th>
              <th>ORDER AMOUNT</th>
              <th>ORDER CURRENCY</th>
              <th>CUSTOMER NUMBER</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelection(row.id)}
                  />
                </td>
                <td>{row.id}</td>
                <td>{row.orderID}</td>
                <td>{row.salesOrg}</td>
                <td>{row.distributionChannel}</td>
                <td>{row.creationDate}</td>
                <td>{row.amount}</td>
                <td>{row.currency}</td>
                <td>{row.customerNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
