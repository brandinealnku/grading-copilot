const BASE_URL = process.env.CANVAS_BASE_URL || "https://nku.instructure.com";

function headers() {
  const token = process.env.CANVAS_ACCESS_TOKEN;
  if (!token) throw new Error("CANVAS_ACCESS_TOKEN is not configured.");
  return { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
}

export async function canvasFetch(path, options = {}) {
  const response = await fetch(`${BASE_URL}/api/v1${path}`, { ...options, headers: { ...headers(), ...(options.headers || {}) }, cache: "no-store" });
  if (!response.ok) throw new Error(`Canvas request failed: ${response.status}`);
  return response.json();
}

export function writesEnabled() { return process.env.CANVAS_WRITE_ENABLED === "true"; }
