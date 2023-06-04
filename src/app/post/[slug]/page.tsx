
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const PostDetailPage = async ({ params: { slug } }: Props) => {

  return (
    <div className="container mx-auto">
      <article
      className="px-8 m-auto my-4 prose lg:prose-xl sm:my-16" />
    </div>
  );
};

export default PostDetailPage;
