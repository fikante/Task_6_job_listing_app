import JobCard from "./components/JobCard";
import jobsData from "../app/data/jobs.json"; // Adjust the path if your jobs.json is elsewhere
import Image from "next/image"; // Import Image for the header logo if you add one

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section based on Figma */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Job List</h1>
        {/* You can add more header elements like the logo from image_a39b05.png */}
      </header>

      {/* Opportunities Section based on image_a39840.png */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Opportunities
          </h2>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-3 py-1">
              <option>Most relevant</option>
              {/* Add other sorting options */}
            </select>
          </div>
        </div>
        <p className="text-gray-500 mb-4">
          Showing {jobsData.job_postings.length} results
        </p>
      </section>

      {/* Job Listings Section */}
      <main className="grid grid-cols-1 gap-6">
        {jobsData.job_postings.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
