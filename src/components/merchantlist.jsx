import React from "react";
import Table from "./table";
import { Link } from "react-router-dom";
const MerchantList=({  merchants, onSort, sortColumn })=>  {
  const columns = [
    {
      path: "firstname",
      label: "Name",
      content:(merchant)=>`${merchant.firstname} ${merchant.lastname}`
    },
    { path: "email", label: "Email" },
    { path: "phone", label: "Phone Number" },
    { path: "hasPremium", label: "Premium",
    content: (merchant) => (
      merchant.hasPremium===true?"YES":"No"
    ), },
    {
      path: "", label: "Amount",
      content: (merchant) => (
        merchant.bidMinTog?merchant.bidMin:merchant.bidMax
      ),
    },
  ];

    return (
      <Table
        data={merchants}
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }

export default MerchantList;
