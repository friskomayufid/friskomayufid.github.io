import { DiscussionEmbed } from "disqus-react";

type PostProps = {
  post: {
    slug: string;
    title: string;
  }
}

function Comment({ post }: PostProps) {
  const disqusShortname = "friskomayufid";
  const disqusConfig = {
    url: `https://friskomayufid.vercel.app/${post.slug}`,
    identifier: post.slug,
    title: post.title,
  };
  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
}

export default Comment;
