"use client";

import useSWR from "swr";

async function fetchAPI(key: string) {
  const res = await fetch(key);
  const resBody = await res.json();
  return resBody;
}

export default function Status() {
  return (
    <div>
      <h1>Status</h1>
      <UpdatedAt />
    </div>
  );
}

function UpdatedAt() {
  const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  return (
    <div>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && data && (
        <>
          <p>
            Last update: {new Date(data.updated_at).toLocaleString("pt-BR")}
          </p>
          <section>
            <h3>Database</h3>
            <p>Version: {data.dependencies.database.version}</p>
            <p>
              Total connections: {data.dependencies.database.total_connections}
            </p>
            <p>
              Max connections allowed:{" "}
              {data.dependencies.database.max_connections}
            </p>
          </section>
        </>
      )}
    </div>
  );
}
