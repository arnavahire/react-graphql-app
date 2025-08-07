import { useQuery } from "@apollo/client";
import { GET_CUSTOMER_SEGMENTS_QUERY } from "../../graphql/GetCustomerSegmentsQuery.graphql";

export const useCustomerSegments = (
  userName: string | undefined,
  odpSegments: string[]
) => {
  // This hook is also always called.
  // The 'skip' option ensures the query is only executed when userName and odpSegments are available.
  const { data, loading, error } = useQuery(GET_CUSTOMER_SEGMENTS_QUERY, {
    variables: {
      userName,
      userSegments: odpSegments,
    },
    skip: !userName || odpSegments.length === 0,
  });

  const customerSegments = data?.customer?.audiences?.edges || [];

  return { customerSegments, loading, error };
};
