"use client";

import React from "react";
import Link from "next/link";

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

interface JobCardProps {
  job: Job | undefined;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  if (!job) return <div>Job data unavailable</div>;

  // Get first 3 skills for tags
  const displaySkills = job.about.required_skills.slice(0, 3);

  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start cursor-pointer hover:shadow-md transition-shadow">
        {/* Avatar */}
        <div className="flex-shrink-0 mr-4">
          <img
            src={job.image}
            alt={`${job.title} avatar`}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h2>
          <p className="text-sm text-gray-600 mb-3">
            {job.company} • {job.about.location}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            {job.description.substring(0, 200)}...
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
              In Person
            </span>
            <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">
              {job.about.categories[0] || "Education"}
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
              F
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
