import { DonationDetails } from "../components/DonationDetails";
import { axiosInstance } from "../helpers";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const DonationDetailsPage = () => {
  const id = useLocation().state.id;
  const [donation, setDonation] = useState(null);
  useEffect(() => {
    axiosInstance.get(`/donations/${id}`).then((res) => {
      setDonation(res.data);
    });
  }, [id]);
  if (donation === null) return <div>loading...</div>;
  return (
    <div className="parent">
      <DonationDetails donation={donation} />
    </div>
  );
};
