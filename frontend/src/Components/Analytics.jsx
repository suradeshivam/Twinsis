import OutlookGrid from "./OutlookGrid/OutlookGrid";
import TransactionChart from "./OutlookGrid/TransactionChart";
import ProfilePieChart from "./OutlookGrid/PieChart";
const Analysis = () => {
  return (
    <div
      className="flex flex-col shadow gap-6 p-2 m-2 bg-white"
      style={{
        border: "1px  gray",
        borderRadius: "10px",
        boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
      }}>
      <OutlookGrid />
      <div className="flex flex-col md:flex-row gap-4 w-full h-full">
        <TransactionChart />
        <ProfilePieChart />
      </div>
    </div>
  );
};

export default Analysis;
