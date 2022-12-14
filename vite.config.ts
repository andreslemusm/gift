/* eslint-disable import/no-default-export
  --
  Default export is required by vite
*/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
