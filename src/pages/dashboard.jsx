import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome back, {user?.firstName}!</h1>
      <p className="mb-6">Here's what's happening with your job search journey:</p>

      {/* Add resume progress, saved jobs, stats, etc. here */}
    </div>
  );
};

export default Dashboard;
