import React from "react";
import Table from "./table";
import { Link } from "react-router-dom";
const MerchantList=({  merchants, onSort, sortColumn,onToggleBid })=>  {
  const columns = [
    {
      path: "firstname",
      label: "Name",
      content:(merchant)=> 
       <Link to={{pathname:`/merchants/${merchant.id}`,state:{merchant:merchant}}} ><p>{merchant.firstname} {merchant.lastname}
       &nbsp;
        <img src={merchant.avatarUrl}  width="35" height="35"></img></p></Link>
    },
    { path: "email", label: "Email" },
    { path: "phone", label: "Phone Number" },
    { path: "hasPremium", label: "Premium",
    content: (merchant) => (
      merchant.hasPremium===true?"YES":"No"
    ), },
    {
      path: "bidMinTog", label: "Amount",
      content: (merchant) => (
        merchant.bidMinTog?merchant.bidMin:merchant.bidMax
      ),
    },
    {
      key:"toggle",
      content: (merchant) => (
        <button
        onClick={() =>onToggleBid(merchant)}
        className="btn btn-primary btn-sm"
      >
        {merchant.bidMinTog?'Show Max Bid':'Show Min Bid'}
      </button>
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
