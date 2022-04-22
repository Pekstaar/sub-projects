import { Divider, Spin } from "antd";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/admin/AdminLayout";
import { MonthlyForm } from "../../../components/admin/contributions/MonthlyForm";
import { CustomTable } from "../../../components/CustomTable";
import { error, success } from "../../../components/Notifications";
import { db } from "../../../utils/firebase";

const AnnualBudget = () => {
  const [loading, setLoading] = useState({
    isLoading: false,
    loadingMessage: "loading...",
  });

  const [annualContributions, setAnnualContributions] = useState([]);

  const [newContribution, setNewContribution] = useState({});

  const resetState = () => {
    setNewContribution({});
  };

  const stopLoading = () => {
    setLoading({
      isLoading: false,
      loadingMessage: "",
    });
  };

  const startLoading = (message) => {
    setLoading({
      isLoading: true,
      loadingMessage: message,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(newContribution);

    startLoading("Creating Contribution. . .");

    try {
      await addDoc(collection(db, "contributions"), {
        ...newContribution,
        category: "annual",
      });

      setNewContribution("");

      stopLoading();

      resetState();

      success("Success!", "Contribution Created Successfully!");
    } catch (err) {
      setLoading({
        ...loading,
        isLoading: false,
        loadingMessage: "",
      });

      error("Error:", err.message);
    }
  };

  useEffect(() => {
    startLoading("Loading Contributions . . .");

    const qMonthly = query(
      collection(db, "contributions"),
      where("category", "==", "annual")
    );

    const fetchMonthly = onSnapshot(qMonthly, (docs) => {
      let conts = [];
      docs.forEach((d) => {
        conts.push({ ...d.data(), key: d.id });
      });
      // setTableData(list);
      setAnnualContributions(conts);

      stopLoading();
    });

    return () => fetchMonthly();
  }, []);

  const annualColumns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];

  //   const tableData = setTableData();

  return (
    <AdminLayout current="1" breadcrumbs={["Admin", "contributions", `annual`]}>
      <Spin
        spinning={loading.isLoading}
        size="large"
        tip={loading.loadingMessage}
      >
        <Divider>
          <span className="text-lg">Create Contribution</span>
        </Divider>

        <div>
          <p className="text-gray-500">
            Fill in the form below to create a new contribution
          </p>
        </div>
        {/* create new contribution form */}

        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 my-4">
            <MonthlyForm
              state={newContribution}
              setState={setNewContribution}
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 px-4 text-white h-8 mb-0"
          >
            Create
          </button>
        </form>

        {/* view previously created contributions */}

        <div className="flex gap-2 mt-4 ">
          <div className="lg:w-10/12">
            <span className="font-bold underline uppercase">
              Monthly Contributions Table
            </span>

            <CustomTable
              cols={annualColumns}
              rows={annualContributions}
              style
            />
          </div>
        </div>
      </Spin>
    </AdminLayout>
  );
};

export default AnnualBudget;
