import { useQuery } from "@apollo/client";
import { GET_ODP_SEGMENTS_QUERY } from "../../graphql/GetODPSegmentsQuery.graphql";

export const useODPSegments = () => {
  const { data, loading, error } = useQuery(GET_ODP_SEGMENTS_QUERY);

  // Fetch all segment names and return
  const odpSegments =
    data?.audiences?.edges.map(
      (edge: { node: { name: string } }) => edge.node.name
    ) || [];

  return { odpSegments, loading, error };
};
