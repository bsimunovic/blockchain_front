import { Button, Card, Input, InputNumber, Modal } from "antd";
import { DonationOverview } from "../components/DonationOverview";
import { useEffect, useState } from "react";
import { axiosInstance } from "../helpers";

export const ProfilePage = () => {
  const [donations, setDonations] = useState([]);
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [donationName, setDonationName] = useState("");
  const [donationDescription, setDonationDescription] = useState("");
  const openBalanceModal = () => {
    setIsBalanceModalOpen(true);
  };
  const openDonationModal = () => {
    setIsDonationModalOpen(true);
  };
  const addBalance = () => {
    const userId = localStorage.getItem("userId");
    const payload = { userId: userId, amount: amount };
    axiosInstance.post("/users/addBalance", payload).then((res) => {
      localStorage.setItem("balance", res.data);
      setIsBalanceModalOpen(false);
      window.location.reload();
    });
  };
  const createDonation = () => {
    const userId = localStorage.getItem("userId");
    const payload = { ownerId: userId, name: donationName, description: donationDescription };
    axiosInstance.post("/donations", payload).then((res) => {
      setIsDonationModalOpen(false);
      window.location.reload();
    });
  };
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axiosInstance.get(`/donations/user/${userId}`).then((res) => {
      setDonations(res.data);
    });
  }, []);
  return (
    <div className="parent">
      <Card style={{ width: "1200px" }} className="transaction-card">
        <Modal open={isBalanceModalOpen} onCancel={() => setIsBalanceModalOpen(false)} onOk={addBalance} okText={"Add"} closeIcon className="modal" cancelText={"Cancel"}>
          <InputNumber style={{ width: "100%" }} placeholder="Amount" onChange={setAmount} min={0} />
        </Modal>
        <Modal open={isDonationModalOpen} onCancel={() => setIsDonationModalOpen(false)} onOk={createDonation} okText={"Create"} closeIcon className="modal" cancelText={"Cancel"}>
          <Input placeholder="Name" onChange={(event) => setDonationName(event.target.value)} style={{ marginBottom: "20px" }} />
          <Input placeholder="Description" onChange={(event) => setDonationDescription(event.target.value)} />
        </Modal>
        <div style={{ display: "flex" }}>
          <h1>My Profile</h1>
          <div style={{ marginLeft: "auto" }}>
            <Button onClick={openBalanceModal} style={{ marginRight: "10px" }}>
              Add balance
            </Button>
            <Button onClick={openDonationModal}>Create donation</Button>
          </div>
        </div>
        <p>
          <strong>Username:</strong> {localStorage.getItem("username")}
        </p>
        <p>
          <strong>Wallet Address:</strong> {localStorage.getItem("wallet")}
        </p>
        <p>
          <strong>Balance:</strong> {localStorage.getItem("balance")} ETH
        </p>
        <p>
          <strong>My donations:</strong>
        </p>
        {donations.map((donation) => (
          <DonationOverview key={donation.id} donation={donation} />
        ))}
      </Card>
    </div>
  );
};
