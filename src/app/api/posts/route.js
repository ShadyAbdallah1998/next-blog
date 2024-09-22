import getPosts from "@/app/lib/getPosts";

export async function GET(request) {
  const posts = await getPosts();
  return new Response(JSON.stringify(posts), {
    status: 200,
  });
}
