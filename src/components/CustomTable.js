import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import React, { useContext } from "react";
import { Context } from "../utils/MainContext";

export const CustomTable = ({
  cols,
  rows,
  isClickable = false,
  summary,
  key,
  span = 2,
}) => {
  const navigate = useNavigate();
  const { setCurrentView } = useContext(Context);

  const columns = cols;

  const data = rows;
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={key}
      scroll={{ x: "100%" }}
      summary={(pData) => {
        if (summary && summary.show) {
          return (
            <Table.Summary fixed>
              <Table.Summary.Row className="bg-slate-500 text-white">
                <Table.Summary.Cell index={0} colSpan={span}>
                  <span className="font-medium uppercase">{summary.title}</span>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} colSpan={span}>
                  <span
                    className="font-medium uppercase"
                    style={{ fontSize: "17px" }}
                  >
                    {summary.amount}
                  </span>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          );
        } else if (summary && summary.cellTotal) {
          return (
            <Table.Summary fixed>
              <Table.Summary.Row className="font-bold bg-slate-50 ">
                <Table.Summary.Cell index={0} colSpan={1}>
                  <span className="font-medium uppercase">{summary.title}</span>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} colSpan={1}>
                  <span className="font-medium uppercase">
                    {pData.length > 0 &&
                      pData
                        .map((item) => item && item.amount)
                        .reduce(
                          (prev, next) => parseInt(prev) + parseInt(next)
                        )}
                  </span>
                </Table.Summary.Cell>{" "}
                <Table.Summary.Cell index={1} colSpan={1}>
                  <span className="font-medium uppercase">
                    {pData.length > 0 &&
                      pData
                        .map((item) => item && item.budget)
                        .reduce(
                          (prev, next) => parseInt(prev) + parseInt(next)
                        )}
                  </span>
                </Table.Summary.Cell>{" "}
                <Table.Summary.Cell index={1} colSpan={1}>
                  <span className="font-medium uppercase">
                    {pData.length > 0 &&
                    pData
                      .map((item) => item.balance)
                      .reduce((prev, next) => parseInt(prev) + parseInt(next)) >
                      0 ? (
                      <div className="bg-green-200 m-0 w-24 text-green-500 font-medium text-center p-1">
                        {pData.length > 0 &&
                          pData
                            .map((item) => item.balance)
                            .reduce(
                              (prev, next) => parseInt(prev) + parseInt(next)
                            )}
                      </div>
                    ) : pData.length > 0 &&
                      pData
                        .map((item) => item.balance)
                        .reduce(
                          (prev, next) => parseInt(prev) + parseInt(next)
                        ) < 0 ? (
                      <div className="bg-red-200 m-0 w-24 text-center text-red-500 font-medium p-1">
                        {pData.length > 0 &&
                          pData
                            .map((item) => item.balance)
                            .reduce(
                              (prev, next) => parseInt(prev) + parseInt(next)
                            )}
                      </div>
                    ) : (
                      <div className="bg-blue-200 text-blue-600 m-0 w-24 text-center font-medium p-1">
                        {pData.length > 0 &&
                          pData
                            .map((item) => item.balance)
                            .reduce(
                              (prev, next) => parseInt(prev) + parseInt(next)
                            )}
                      </div>
                    )}
                  </span>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          );
        }
      }}
      onRow={(record) => {
        if (isClickable) {
          return {
            onClick: () => {
              navigate(`${record.key}`);
              setCurrentView(record);
            }, // click row
          };
        }
      }}
    />
  );
};
