import { Button, Card, InputNumber, Modal } from "antd";
import { TransactionDetails } from "./TransactionDetails";
import { useState } from "react";
import { axiosInstance } from "../helpers";

export const DonationDetails = ({ donation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleDonate = () => {
    let balance = localStorage.getItem("balance");
    if (balance < amount) {
      alert("Not enough balance");
      return;
    } else {
      balance -= amount;
      localStorage.setItem("balance", balance);
      const payload = { donationId: donation.id, amount: amount, senderId: localStorage.getItem("userId") };
      axiosInstance.post("/transactions", payload).then((res) => {
        setIsModalOpen(false);
        window.location.reload();
      });
    }
  };
  return (
    <div className="parent">
      <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} onOk={handleDonate} okText={"Donate"} closeIcon width={"500px"} cancelText={"Cancel"}>
        <InputNumber style={{ width: "100%" }} placeholder="Amount" onChange={setAmount} min={0} />
      </Modal>
      <Card style={{ width: "900px" }}>
        <div style={{ display: "flex" }}>
          <h3>{donation.name}</h3>
          <Button style={{ marginLeft: "auto" }} onClick={openModal}>
            Donate
          </Button>
        </div>
        <p>{donation.description}</p>
        <p>{donation.owner}</p>
        {donation.transactions.map((transaction) => {
          return <TransactionDetails transaction={transaction} />;
        })}
      </Card>
    </div>
  );
};
