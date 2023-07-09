import { Card } from "antd";
import { useNavigate } from "react-router-dom";

export const DonationOverview = ({ donation }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/donation", { state: { id: donation.id } });
  };
  return (
    <div className="parent">
      <Card className="transaction-card" style={{ width: "900px" }} onClick={onClick}>
        <h3>{donation.name}</h3>
        <p>{donation.description}</p>
        <p>
          <strong>Owner wallet: </strong>
          {donation.owner}
        </p>
      </Card>
    </div>
  );
};
