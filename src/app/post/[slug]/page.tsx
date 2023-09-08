import { notion } from "@/lib/notion-service";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

const PostDetailPage = async ({ params: { slug } }: Props) => {
  let response;
  try {
    response = await notion.getPostBySlug(slug);
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong...");
  }
  return (
    <article className="pb-24 mx-4 prose-sm prose md:mx-auto md:prose-base lg:prose-lg prose-h1:text-3xl">
      {response && (
        <>
          <figure className="relative mt-6">
            <div className="relative flex items-center justify-center h-auto max-w-2xl mx-auto my-0 overflow-hidden max-h-96">
              <Image
                className="w-full"
                src={response.cover_url}
                alt={`cover ${response.title}`}
                width={1600}
                height={900}
              />
            </div>
          </figure>
          <h1>{response.title}</h1>
          {/* !TODO: fix this part */}
          <MDXRemote source={response.markdown.parent} />
        </>
      )}
    </article>
  );
};

export default PostDetailPage;
