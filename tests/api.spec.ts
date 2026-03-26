import { test, expect } from "@playwright/test";

test("GET /health returns ok", async ({ request }) => {
  const res = await request.get("http://localhost:8000/health");
  expect(res.status()).toBe(200);
  expect(await res.json()).toEqual({ status: "ok" });
});
