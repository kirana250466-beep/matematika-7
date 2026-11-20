export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({ ok: true, app: "kuis-matematika-kelas-7" });
    }

    return env.ASSETS.fetch(request);
  },
};
