import Card from "@/app/components/Card";
import NavButtons from "@/app/components/Card/NavButtons";
import getPostByID from "@/app/lib/getPostByID";
import getPosts from "@/app/lib/getPosts";
import React from "react";
import BackButton from "./BackButton";

// component cached for 10 sec
// export const revalidate = 10;

//SSR
// export const dynamic = "force-dynamic"

//SSG
export const generateStaticParams = async () => {
  const res = await getPosts();
  console.log(res);

  return res.map((post) => ({ id: String(post.id) }));
};

export async function generateMetadata({ params }) {
  const post = await getPostByID(+params.id);

  return {
    title: `${post.name}`,
    description: post.body,
    openGraph: {
      title: post.title,
      images: [
        {
          url: post.image,
          alt: `${post.title} image`,
        },
      ],
    },
  };
}

const Post = async ({ params }) => {
  const { id } = params;
  const post = await getPostByID(+id);

  const posts = await getPosts();

  return (
    <>
      <BackButton />
      <div className="w-1/4 mx-auto mt-12 ">
        <Card
          id={id}
          title={post.title}
          body={post.body}
          image={post.image}
        ></Card>
      </div>
      <NavButtons id={+id} length={posts.length} />
    </>
  );
};

export default Post;
