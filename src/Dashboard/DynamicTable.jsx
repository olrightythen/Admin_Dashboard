import { useState } from "react";
import { AiOutlineMenu, AiOutlineOrderedList } from "react-icons/ai";

const tableHeaders = [
  "Name",
  "Position",
  "Office",
  "Age",
  "Start date",
  "Salary",
];
const tableData = Array.from({ length: 57 }, (_, index) => ({
  name: `Name ${index + 1}`,
  position: "Position",
  office: "Office",
  age: Math.floor(Math.random() * 60) + 20,
  startDate: `2020/01/${String(index + 1).padStart(2, "0")}`,
  salary: `$${(Math.random() * 100000).toFixed(2)}`,
}));

const DynamicTable = () => {
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredData = tableData.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const startIndex = (page - 1) * entries;
  const endIndex = startIndex + entries;
  const paginatedData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / entries);

  return (
    <div className="py-4 bg-white w-full">
      <header className="flex items-center justify-between px-6 mb-2">
        <h2 className="text-2xl font-semibold">Easy Dynamic Tables</h2>
        <AiOutlineMenu className="w-6 h-6" />
      </header>
      <hr />
      <div className="flex items-center justify-between px-6 my-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="entries" className="text-sm">
            Show
          </label>
          <select
            id="entries"
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={entries}
            onChange={(e) => {
              setEntries(Number(e.target.value));
              setPage(1); // reset to first page when entries per page changes
            }}
          >
            {[10, 25, 50, 100].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span className="text-sm">entries</span>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="search" className="text-sm">
            Search:
          </label>
          <input
            id="search"
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1); // reset to first page when search query changes
            }}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          />
        </div>
      </div>
      <div className="overflow-x-auto px-6">
        <table className="min-w-full divide-y divide-x border-2 border-gray-100 divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {tableHeaders.map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}{" "}
                  <AiOutlineOrderedList className="inline-block w-4 h-4" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.office}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.startDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.salary}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={tableHeaders.length}
                  className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                >
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <footer className="flex items-center justify-between px-6 mt-4">
        <div className="text-sm">
          Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)}{" "}
          of {filteredData.length} entries (filtered from {tableData.length}{" "}
          total entries)
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="border border-gray-300 rounded px-4 py-2 text-sm"
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className="border border-gray-300 rounded px-4 py-2 text-sm"
            onClick={() =>
              setPage((prevPage) => Math.min(prevPage + 1, totalPages))
            }
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default DynamicTable;
