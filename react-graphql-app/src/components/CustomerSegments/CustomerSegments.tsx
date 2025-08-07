import React from "react";
import { useUserContext } from "../../store/UserContext";
import { useODPSegments } from "../hooks/useODPSegments";
import { Header } from "../Header/Header";
import { useCustomerSegments } from "../hooks/useCustomerSegments";

export const CustomerSegments: React.FC = () => {
  const { user } = useUserContext();

  const userName = user?.name; // Safely get userName, it might be undefined initially

  // First query: Fetch all ODP segments
  // This hook is always called, but the query itself is not skipped initially.
  const {
    odpSegments,
    loading: odpLoading,
    error: odpError,
  } = useODPSegments();

  // Second query: Fetch customer-specific segments
  const {
    customerSegments,
    loading: customerLoading,
    error: customerError,
  } = useCustomerSegments(userName, !odpLoading ? odpSegments : []);

  // Handle loading states
  if (odpLoading || customerLoading) {
    return <p>Loading...</p>;
  }

  // Handle errors
  if (odpError) {
    return <p>Error loading ODP segments: {odpError.message}</p>;
  }

  if (customerError)
    return <p>Error loading customer segments: {customerError.message}</p>;

  if (customerSegments.length === 0) {
    return <p>No customer segments to display.</p>;
  }

  return (
    <div className="customer-segments">
      <Header />
      <h1>Your Segments</h1>
      <ol>
        {customerSegments.map((edge: { node: { name: string } }) => (
          <li key={edge.node.name}>{edge.node.name}</li> // Use index as key, or a unique ID if available
        ))}
      </ol>
    </div>
  );
};
