import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useConstant } from "../utils/use-constant";
import {
  QueryClient,
  QueryClientProvider as RQProvider,
} from "@tanstack/react-query";

const QueryClientProvider = ({
  children,
}: React.PropsWithChildren): React.ReactElement => {
  const queryClient = useConstant(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            retry: (failureCount) => {
              if (import.meta.env.VITEST) {
                return false;
              }

              /*
               * if (isErrorAttr(error) && error.response?.data.status === 404) {
               *   return false;
               * }
               */

              if (failureCount < 2) {
                return true;
              }

              return false;
            },
          },
        },
      })
  );

  return (
    <RQProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </RQProvider>
  );
};

export { QueryClientProvider };
