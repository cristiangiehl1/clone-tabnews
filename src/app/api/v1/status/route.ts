import { NextResponse } from "next/server";
import database from "@/infra/database";
import { InternalServerError } from "@/infra/errors";

export async function GET() {
  try {
    const updatedAt = new Date().toISOString();
    const databaseName = process.env.POSTGRES_DB;

    const dbVersionResult = await database.query({
      text: "SHOW server_version;",
    });

    const dbMaxConnResult = await database.query({
      text: "SHOW max_connections;",
    });

    const totalConnResult = await database.query({
      text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
      values: [databaseName],
    });

    const dbVersionValue = dbVersionResult?.rows[0]?.server_version;
    const dbMaxConnValue = parseInt(
      dbMaxConnResult?.rows[0]?.max_connections ?? "0",
    );
    const totalConnValue = totalConnResult?.rows[0]?.count ?? 0;

    return NextResponse.json({
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: dbVersionValue,
          max_connections: dbMaxConnValue,
          total_connections: totalConnValue,
        },
      },
    });
  } catch (error) {
    const publicErrorObject = new InternalServerError({ cause: error });

    console.log("\n Erro dentro do catch do controller: ");
    console.error(publicErrorObject);

    return NextResponse.json(publicErrorObject);
  }
}
