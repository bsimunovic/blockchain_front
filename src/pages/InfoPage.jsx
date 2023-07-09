import { Button } from "antd";

export const InfoPage = () => {
  return (
    <div className="banner">
      <h1>Welcome to Blockchain Charity</h1>
      <h2>
        We are a groundbreaking charity harnessing the power of blockchain technology to create a positive and transparent impact on the world. Our mission is to revolutionize the way charitable organizations operate and ensure that every donation
        reaches its intended beneficiaries, making a tangible difference in their lives.<br></br>
        <br></br> With the decentralized and immutable nature of blockchain, we have built a platform that provides unmatched transparency, accountability, and efficiency. By leveraging this transformative technology, we eliminate the traditional
        barriers and intermediaries, allowing your contributions to directly impact the lives of those in need.<br></br> <br></br>Join us in creating a brighter future. Explore our projects, get involved, and become a part of our global community of
        compassionate individuals dedicated to making a difference. Together, we can empower communities, promote social justice, and foster sustainable change, all while embracing the innovative potential of blockchain technology.
      </h2>
      <Button type="primary" href="/donations">
        {" "}
        Donate
      </Button>
    </div>
  );
};
