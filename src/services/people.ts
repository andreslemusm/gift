import { useQuery } from "@tanstack/react-query";

const usePeople = ({ page }: { page: number }) =>
  useQuery({
    queryKey: ["people", "list", page],
    queryFn: async ({ signal }) => {
      const response = await fetch(
        `https://swapi.dev/api/people/?${new URLSearchParams({
          page: page.toString(),
        }).toString()}`,
        { signal }
      );

      return response.json() as unknown as {
        count: number;
        next: string;
        previous: null;
        results: Array<{
          name: string;
          birth_year: string;
          gender: string;
          homeworld: string;
          url: string;
        }>;
      };
    },
  });

export { usePeople };
