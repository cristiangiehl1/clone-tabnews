import type { NextApiRequest, NextApiResponse } from "next";
import database from "@/infra/database";

export default async function status(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const updatedAt = new Date().toISOString();
  const databaseName = process.env.POSTGRES_DB;

  const dbVersionResult = await database.query({
    text: "SHOW server_version;",
  });
  const dbMaxConnResult = await database.query({
    text: "SHOW max_connections;",
  });

  // usando sanitization do node-postgres
  const totalConnResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const dbVersionValue = dbVersionResult?.rows[0].server_version;
  const dbMaxConnValue = dbMaxConnResult?.rows[0].max_connections;
  const totalConnValue = totalConnResult?.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: dbVersionValue,
        max_connections: parseInt(dbMaxConnValue),
        total_connections: totalConnValue,
      },
    },
  });
}
