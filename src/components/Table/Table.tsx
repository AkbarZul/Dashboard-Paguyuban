import { ReactNode } from "react";

export interface Column<T> {
  header: string;
  accessor?: keyof T;
  render?: (row: T) => ReactNode;
  className?: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

function Table<T>({ columns, data }: TableProps<T>) {
  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-6 py-4 font-medium">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-slate-50 transition-colors"
              >
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-4">
                    {col.render
                      ? col.render(row)
                      : (row[col.accessor as keyof T] as ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile (Card style) */}
      <div className="md:hidden space-y-4">
        {data.map((row, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
          >
            {columns.map((col, idx) => (
              <div key={idx} className="flex justify-between text-sm py-1">
                <span className="text-slate-500">{col.header}</span>
                <span className="text-slate-800 font-medium text-right">
                  {col.render
                    ? col.render(row)
                    : (row[col.accessor as keyof T] as ReactNode)}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
