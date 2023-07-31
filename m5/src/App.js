import { useState } from "react";
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
  },
  {
    id: 2,
    orderID: "995549949",
    salesOrg: "3559",
    distributionChannel: "Bhutan",
    companyCode: "3030",
    creationDate: "01-01-2022",
    amount: 2610.0,
    currency: "HKD",
    customerNumber: "1210509823",
  },
  {
    id: 3,
    orderID: "869122376",
    salesOrg: "3043",
    distributionChannel: "Mexico",
    companyCode: "3030",
    creationDate: "01-01-2022",
    amount: 5848.5,
    currency: "HKD",
    customerNumber: "1210431200",
  },
  {
    id: 4,
    orderID: "907014963",
    salesOrg: "3391",
    distributionChannel: "Congo",
    companyCode: "3030",
    creationDate: "01-01-2022",
    amount: 6045.17,
    currency: "HKD",
    customerNumber: "1210408844",
  },
  {
    id: 5,
    orderID: "804194459",
    salesOrg: "2215",
    distributionChannel: "Wallis and Futuna",
    companyCode: "3030",
    creationDate: "01-01-2022",
    amount: 8736.0,
    currency: "HKD",
    customerNumber: "1210430743",
  },
  {
    id: 6,
    orderID: "901342633",
    salesOrg: "3098",
    distributionChannel: "Armenia",
    companyCode: "3030",
    creationDate: "01-01-2022",
    amount: 4229.89,
    currency: "HKD",
    customerNumber: "1210345599",
  },
  {
    id: 7,
    orderID: "980177992",
    salesOrg: "2771",
    distributionChannel: "Belarus",
    companyCode: "3030",
    creationDate: "01-01-2022",
    amount: 9630.16,
    currency: "HKD",
    customerNumber: "1210408843",
  },
  {
    id: 8,
    orderID: "966470307",
    salesOrg: "3849",
    distributionChannel: "Antarctica",
    companyCode: "3030",
    creationDate: "01-01-2022",
    amount: 7592.51,
    currency: "HKD",
    customerNumber: "1210407236",
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
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={() => handleRowSelection("selectAll")}
                />
              </th>
              <th>SI No</th>
              <th>CUSTOMER ORDER ID</th>
              <th>SALES ORG</th>
              <th>DISTRIBUTION CHANNEL</th>
              <th>COMPANY CODE</th> 
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
                <td>{row.companyCode}</td>
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
