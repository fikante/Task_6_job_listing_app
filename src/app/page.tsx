import React from "react";
import JobCard from "@/app/components/JobCard";
import jobData from "@/app/data/jobData.json"; // Adjust path if necessary

interface Job {
  id: number;
  title: string;
  description: string;
  company: string;
  image: string;
  about: {
    location: string;
    required_skills: string[];
    categories: string[];
  };
}

const jobPostings: Job[] = jobData.job_postings || [];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Opportunities
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Showing {jobPostings.length} results
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Sort by</span>
              <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-md flex items-center text-sm hover:bg-gray-50">
                Most relevant <span className="ml-1">▼</span>
              </button>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {jobPostings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
