import { DiscussionEmbed } from "disqus-react";

function Comment({ post }: any) {
  const disqusShortname = "friskomayufid";
  const disqusConfig = {
    url: `https://friskomayufid.vercel.app/${post.slug}`,
    identifier: post.slug,
    title: post.title,
  };
  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
}

export default Comment;
