import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ADVISORS_QUERY } from "../../graphql/GetAdvisorsQuery.graphql.ts";
import "./Advisors.css";

export const Advisors: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ADVISORS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  console.log(data);

  // Optional: Add a check for data existence and structure if you prefer
  if (!data || !data.AdvisorPage || !data.AdvisorPage.items) {
    return <p>No advisors data available.</p>;
  }

  return (
    <div>
      <h1>Advisors</h1>
      {data.AdvisorPage.items.map(
        (
          advisor: any // Using 'any' as a workaround without an interface. With codegen and interface this will change
        ) => (
          <article className="advisors-card" key={advisor._id}>
            <div className="card-image">
              {advisor?.Picture?.Url != null ? (
                <img
                  src={
                    "https://www.communityamerica.com" +
                    `${advisor?.Picture?.Url}`
                  }
                  alt="Description of the advisor"
                />
              ) : (
                ""
              )}
            </div>
            <div className="card-content">
              <h2>
                {advisor.FirstName} {advisor.LastName}
              </h2>
              <p>Certifications: {advisor.Certifications}</p>
              <p>Email: {advisor.ContactEmail}</p>
              {advisor.PrimaryLocation && advisor.PrimaryLocation.Expanded && (
                <p>
                  Location: {advisor.PrimaryLocation.Expanded.LocationName},{" "}
                  {advisor.PrimaryLocation.Expanded.City}
                </p>
              )}
              <a href={advisor.Url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </article>
        )
      )}
    </div>
  );
};
