import React from "react";
import { Header } from "../Header/Header.tsx";
import "./Home.scss";
import { useUserContext } from "../../store/UserContext.tsx";
import Logo from "../../assets/communityamerica_logo.webp";
import { useODPSegments } from "../hooks/useODPSegments.tsx";
import { useCustomerSegments } from "../hooks/useCustomerSegments.tsx";
import { useImageById } from "../hooks/useImageById.tsx";

export const Home: React.FC = () => {
  // access user using user context
  const { user } = useUserContext();

  const userName = user?.name;

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

  const userSegmentNames = customerSegments.map(
    (edge: { node: { name: string } }) => edge.node.name
  );

  // Fetch different image IDs depending upon presence of a particular segment
  const imageId = userSegmentNames.includes("test_segment") ? 1969 : 1936;

  const skipImageQuery = odpLoading || customerLoading || !imageId;

  // Always call the hook — use skip to control query execution
  const {
    image,
    loading: imageLoading,
    error: imageError,
  } = useImageById(imageId, skipImageQuery);

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

  if (imageLoading) return <p>Loading image...</p>;
  if (imageError) return <p>Error loading image: {imageError.message}</p>;

  return (
    <>
      <Header />
      <div className="welcome-message">CACU React-Opti App</div>
      <div className="logo-image">
        <img src={Logo} alt="" height="90px" width="200px" />
      </div>
      <div className="hello-message">Hi {userName}!</div>
      <div className="segment-message">
        Since you{" "}
        {userSegmentNames.includes("test_segment")
          ? "belong to "
          : "do not belong to "}{" "}
        test_segment, you are seeing the following image.
      </div>
      <div className="segment-image">
        <img
          src={"https://communityamerica.com" + image.Url}
          alt=""
          height="200px"
          width="200px"
        />
      </div>
    </>
  );
};
