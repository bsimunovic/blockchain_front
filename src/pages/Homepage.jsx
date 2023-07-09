import { DonationOverview } from "../components/DonationOverview";
import { axiosInstance } from "../helpers";
import React, { useEffect } from "react";
import jwt from "jwt-decode";
import { Card } from "antd";
export const Homepage = () => {
  const [donations, setDonations] = React.useState([]);
  useEffect(() => {
    axiosInstance.get("/donations").then((res) => {
      setDonations(res.data);
    });
  }, []);
  return (
    <div className="parent">
      <Card className="transaction-card" style={{ width: "1000px" }}>
        <h2>Donations</h2>
        {donations.map((donation) => (
          <DonationOverview key={donation.id} donation={donation} />
        ))}
      </Card>
    </div>
  );
};
