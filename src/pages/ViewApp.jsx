import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiIdCard } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/general/BreadCrumb";
import Wrapper from "../components/general/Wrapper";
import { ActionButton } from "./Apps";
import License from "../assets/images/license.png";
import Insurance from "../assets/images/certificate.png";

const ViewApp = () => {
  const location = useLocation()?.pathname.split("/");

  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb
        icon={<BiIdCard />}
        title={`Fleet management /`}
        subtitle={location[location?.length - 1]}
        c={"capitalize"}
      />
      <Box className="flex gap-3">
        <Box className="w-1/3">
          <Wrapper
            my={"4"}
            p={"10"}
            borderRadius={"none"}
            className={"flex flex-col justify-center items-center rounded"}
          >
            {/* body */}
            <Box
              className="rounded-full overflow-hidden"
              h={40}
              w={40}
              bg={"gray.300"}
              mb={"3"}
            >
              <Image
                h={"full"}
                objectFit={"cover"}
                src="https://media.istockphoto.com/photos/attractive-young-african-woman-picture-id174810353?k=20&m=174810353&s=612x612&w=0&h=7lhfbyHQhlMnVGG6zUcbbrB_INOtNKuzD_9EfU027Gc="
              />
            </Box>
            <Text
              fontSize={"xl"}
              textTransform={"uppercase"}
              fontWeight={"semibold"}
            >
              {location[location?.length - 1]}
            </Text>

            <Text fontSize={"sm"} fontWeight={"light"}>
              Driver: Steve Driver
            </Text>
          </Wrapper>

          {/* Personal information*/}
          <Box>
            <Box className="flex justify-between py-2 px-5">
              <Text fontSize={"lg"} fontWeight={"medium"}>
                Personal information
              </Text>

              <ActionButton>
                <GrEdit />
              </ActionButton>
            </Box>
            <Wrapper
              my={"2"}
              p={"10"}
              borderRadius={"none"}
              className={"flex justify-center items-center gap-3"}
            >
              <Box className="text-right flex flex-col gap-4">
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Full name
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Category
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Location
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Email
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Phone number
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Onboarding date
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Last edit date
                </Text>
              </Box>

              <div className={"bg-zinc-200 h-72 w-0.5 rounded-full"} />

              <Box className="text-left flex flex-col gap-4">
                <Text fontSize={"lg"}>Pekmah Cruiz</Text>
                <Text fontSize={"lg"}>Driver</Text>
                <Text fontSize={"lg"}>Nairobi CBD, Nairobi</Text>
                <Text fontSize={"lg"}>pekmah@mail.com</Text>
                <Text fontSize={"lg"}>+254 781223344</Text>
                <Text fontSize={"lg"}>3/9/2022</Text>
                <Text fontSize={"lg"}>3/10/2022</Text>
              </Box>
            </Wrapper>
          </Box>

          {/* vehicle information */}
          <Box>
            <Box className="flex justify-between py-2 px-5">
              <Text fontSize={"lg"} fontWeight={"medium"}>
                Vehicle information
              </Text>

              <ActionButton>
                <GrEdit />
              </ActionButton>
            </Box>
            <Wrapper
              my={"2"}
              p={"10"}
              borderRadius={"none"}
              className={"flex justify-center items-center gap-3"}
            >
              <Box className="text-right flex flex-col gap-4">
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Reg no
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Color
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Type
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Model
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  License Expiry
                </Text>
              </Box>

              <div className={"bg-zinc-200 h-44 w-0.5 rounded-full"} />

              <Box className="text-left flex flex-col gap-4">
                <Text fontSize={"lg"}>KCB 121G</Text>
                <Text fontSize={"lg"}>Gray</Text>
                <Text fontSize={"lg"}>Cab</Text>
                <Text fontSize={"lg"}>Toyota Allion</Text>
                <Text fontSize={"lg"}>3/9/2022</Text>
              </Box>
            </Wrapper>
          </Box>
        </Box>

        <Box className="w-2/3">
          <Wrapper w={"full"}>
            <Box>
              {/* title */}
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                License
              </Text>

              <Box p={"4"}>
                <Image src={License} alt={"license"} h={"150px"} />
              </Box>

              <hr className="my-2" />

              <Text fontSize={"lg"} fontWeight={"semibold"}>
                Insurance Document
              </Text>

              <Box p={"2"}>
                <Image src={Insurance} alt={"license"} h={"600px"} />
              </Box>
            </Box>

            <Box className="flex gap-4 justify-end">
              <button className="bg-primary_yellow rounded-md items-center flex gap-2 px-16 py-3">
                <Text fontWeight={"semibold"}>Approve</Text>
              </button>

              <button className="text-primary_yellow border-[1.5px] border-primary_yellow rounded-md items-center flex gap-2 px-16 py-3">
                <Text fontWeight={"semibold"}>Reject</Text>
              </button>
            </Box>
          </Wrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewApp;