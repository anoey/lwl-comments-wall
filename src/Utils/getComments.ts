export async function getComments(limit = 20, skip = 0) {
  const res = await fetch(
    `https://comments-api.deno.dev/api?limit=${limit}&skip=${skip}`,
  );
  const comments = await res.json();

  return comments;
}
