import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DescriptionPage = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState();

  useEffect(() => {
    // Fetch podcast details
    const fetchPodcast = async () => {
      try {
        const res = await axios.get(`http://localhost:1000/api/v1/get-podcast/${id}`, {
          withCredentials: true,
        });
        setPodcast(res.data.data);
      } catch (error) {
        console.error("Failed to fetch podcast:", error);
      }
    };

    fetchPodcast();
  }, [id]);

  return (
    <div className="px-4 lg:px-12 py-4 h-auto flex flex-col md:flex-row items-start justify-between gap-4">
      {podcast && (
        <>
          <div className="w-2/6 flex items-center justify-center md:justify-start md:items-start">
            <img
              src={`http://localhost:1000/${podcast.frontImage}`}
              alt="/"
              className="rounded w-full h-[50vh] object-cover"
            />
          </div>
          <div className="w-4/6">
            <div className="text-4xl font-semibold">{podcast.title}</div>
            <h4 className="mt-4">{podcast.description}</h4>
            <div className="mt-2 w-fit bg-orange-100 text-orange-700 border border-orange-700 rounded-full px-4 py-2 text-center">
              {podcast.category.categoryName}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DescriptionPage;
