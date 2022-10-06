import React from "react";
import Table from "../../general/Table";

import { IoSearchOutline } from "react-icons/io5";
import CInput from "../../general/Input";
import { Box, Button, HStack } from "@chakra-ui/react";

import { FiEye } from "react-icons/fi";
import { VscFilter } from "react-icons/vsc";
import { BiSort } from "react-icons/bi";

const Pending = ({ handleView }) => {
  return (
    <>
      {/* search and table actions */}
      <HStack py={"6"} justifyContent={"space-between"}>
        {/* /search input */}
        <CInput icon={<IoSearchOutline className="text-xl" />} />
        {/* actions */}
        <HStack gap={"2"}>
          <TableAction
            icon={<VscFilter className="text-lg" />}
            text={"Filter"}
          />
          <TableAction icon={<BiSort className="text-lg" />} text={"Sort"} />
        </HStack>
      </HStack>

      {/* body */}
      <Box>
        <Table headers={[...Object.keys(tableData[0]), "Actions"]}>
          {tableData?.map((data, key) => {
            const isEven = key % 2;

            return (
              <tr
                className={`h-20 capitalize ${
                  isEven ? "bg-[#F9F9F9]" : "white"
                }`}
              >
                <td className=" text-center py-3 px-4">{data?.fullname}</td>
                <td className=" text-center py-3 px-4">{data?.email}</td>
                <td className="text-center py-3 px-4">{data?.phone}</td>
                <td className="text-center py-3 px-4">{data?.vehicle_cat}</td>
                {/* actions table */}
                <td className={`text-center text-white py-3 px-4 w-32 `}>
                  <Box className="flex gap-4 justify-center">
                    <ActionButton
                      handleClick={() => handleView(data?.fullname)}
                    >
                      <FiEye />
                    </ActionButton>
                  </Box>
                </td>
              </tr>
            );
          })}
        </Table>
      </Box>
    </>
  );
};

export default Pending;

const tableData = [
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Truck",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Truck",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Motorbike",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Motorbike",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
  },
];

export const ActionButton = ({ bg, children, handleClick }) => (
  <Button
    fontSize={"lg"}
    p={"0"}
    h={"30px"}
    onClick={handleClick}
    className={`${bg} rounded-md  text-dark_green border border-dark_green`}
  >
    {children}
  </Button>
);
const TableAction = ({ icon, text }) => (
  <button className="bg-zinc-200 px-3 py-1.5 gap-1 rounded-md text-sm capitalize flex  ">
    {icon}
    {text}
  </button>
);