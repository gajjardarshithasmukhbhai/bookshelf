import {
  ConnectionOptionsReader,
  createConnection as typeormCreateConnection
} from "typeorm";

export const createConnection = async () => {
  let root = process.cwd();
  if (!root.includes("/apps/server")) {
    root += "/apps/server";
  }

  const optionsReader = new ConnectionOptionsReader({ root });
  const options = await optionsReader.get("default");

  return typeormCreateConnection(options);
};