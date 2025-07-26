"use client";

import React from "react";

interface Job {
  id: number;
  title: string;
  description: string;
  company: string;
  image: string;
  responsibilities: string[];
  ideal_candidate: { age: string; gender: string; traits: string[] };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
}

interface JobDetailsClientProps {
  job: Job;
}

export default function JobDetailsClient({ job }: JobDetailsClientProps) {
  return (
    <div className="min-h-screen bg-gray-800">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal Candidate Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Ideal Candidate we want
                </h2>
                <ul className="space-y-4">
                  {job.ideal_candidate.traits.map((trait, index) => (
                    <li key={index} className="text-gray-700">
                      <span className="font-semibold">
                        {trait.split(":")[0]}:
                      </span>
                      {trait.split(":").slice(1).join(":")}
                    </li>
                  ))}
                </ul>
              </div>

              {/* When & Where Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  When & Where
                </h2>
                <div className="flex items-center text-gray-700">
                  <span className="text-gray-500 mr-2">📍</span>
                  <span>{job.when_where}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* About Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">About</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-gray-500 mr-2">📅</span>
                    <span>
                      <strong>Posted On:</strong> {job.about.posted_on}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-gray-500 mr-2">⏰</span>
                    <span>
                      <strong>Deadline:</strong> {job.about.deadline}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-gray-500 mr-2">📍</span>
                    <span>
                      <strong>Location:</strong> {job.about.location}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-gray-500 mr-2">📅</span>
                    <span>
                      <strong>Start Date:</strong> {job.about.start_date}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-gray-500 mr-2">📅</span>
                    <span>
                      <strong>End Date:</strong> {job.about.end_date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Categories Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.about.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Required Skills Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.about.required_skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
