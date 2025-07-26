import React from "react";
import jobData from "@/app/data/jobData.json";
import JobDetailsClient from "./JobDetailsClient";

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

export async function generateStaticParams() {
  return jobData.job_postings.map((job) => ({ id: job.id.toString() }));
}

export default function JobDetails({ params }: { params: { id: string } }) {
  const job = jobData.job_postings.find((j) => j.id === parseInt(params.id));
  if (!job) return <div>Job not found</div>;

  return <JobDetailsClient job={job} />;
}
