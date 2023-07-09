import { Card } from "antd";

export const TransactionDetails = ({ transaction }) => {
  return (
    <div>
      <Card className="transaction-card" style={{ maxWidth: "900px" }}>
        <p>
          <strong>Sender: </strong>
          {transaction.sender}
        </p>
        <p>
          <strong>Receiver: </strong>
          {transaction.receiver}
        </p>
        <p>
          <strong>Amount: </strong>
          {transaction.amount}
        </p>
        <p>
          <strong>Date and time of transaction: </strong>
          {transaction.timestamp}
        </p>
      </Card>
    </div>
  );
};
