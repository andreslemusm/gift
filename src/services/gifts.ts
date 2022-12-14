import { useQuery } from "@tanstack/react-query";

const useGifts = ({ query }: { query: string }) =>
  useQuery({
    queryKey: ["gifts", query],
    queryFn: async ({ signal }) => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?${new URLSearchParams({
          q: query,
          api_key: "jTAuqirruj85Vtd9DISWXopoSqNOHRUG",
        }).toString()}`,
        { signal }
      );

      return response.json() as unknown as {
        data: Array<{
          id: string;
          images: { original: { url: string } };
        }>;
      };
    },
  });

export { useGifts };
