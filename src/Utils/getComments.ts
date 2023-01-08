export async function getComments() {
  const res = await fetch("https://comments-api.deno.dev/api");
  const comments = await res.json();

  return comments;
}