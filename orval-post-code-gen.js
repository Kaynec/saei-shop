import { readFileSync, writeFileSync } from "fs";

const file = readFileSync("./api/index.ts", "utf8");

const newFile = file
  .replace(
    "userInput.email !== undefined",
    "userInput.email !== undefined && userInput.email !== null"
  )
  .replace(
    "userInput.birthdate !== undefined",
    "userInput.birthdate !== undefined && userInput.birthdate !== null"
  )
  .replace(
    "userInput.profile_image !== undefined",
    "userInput.profile_image !== undefined && userInput.profile_image !== null"
  );

writeFileSync("./api/index.ts", newFile);
