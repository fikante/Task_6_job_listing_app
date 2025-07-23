import Image from "next/image";

interface JobCardProps {
  job: {
    title: string;
    company: string;
    description: string;
    image: string; 
    about: {
      location: string;
      categories: string[];
    };
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const categoriesToDisplay = job.about.categories || [];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex">
      <div className="mr-4">
        <Image
          src={job.image}
          alt={`${job.company} logo`}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {job.title}
        </h2>
        <p className="text-gray-600 mb-2">
          {job.company} &bull; {job.about.location}
        </p>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          {job.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {categoriesToDisplay.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
