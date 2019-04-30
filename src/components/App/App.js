import React from 'react';
import './App.css';

function App() {
  return (
    <div className="invoice-list">
      <button>New Invoice</button>
      <div>
        <table>
          <thead className="invoice-table-header">
            <tr>
              <th colSpan = "1">
                Invoice #
              </th>
              <th colSpan = "1">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="invoice-table-row">
              <td>
                0001
              </td>
              <td>
                $0.00
              </td>
              <td>
              <button>Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default App;
