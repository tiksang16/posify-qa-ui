import { FullConfig } from "@playwright/test";

import dotenv from "dotenv";

async function globalSetup(config: FullConfig) {
  if (process.env.test_env.includes("posify")) {
    dotenv.config({
      path: `./env/.env.${process.env.test_env}`,
      override: true,
    });
  }
}
export default globalSetup;