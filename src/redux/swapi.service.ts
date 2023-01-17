// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const swapiApi = createApi({
  reducerPath: "swapiApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query<
      {
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
      },
      { page: number }
    >({
      query: ({ page }) =>
        `people/?${new URLSearchParams({
          page: page.toString(),
        }).toString()}`,
    }),
    getPlanet: builder.query<
      {
        name: string;
      },
      { planetId: number }
    >({
      query: ({ planetId }) => `planets/${planetId}/`,
    }),
  }),
});
