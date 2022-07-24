import Link from "next/link";
import moment from "moment";

interface BlogList {
  list: Array<String>;
}

function BlogList({ list }: BlogList) {
  return (
    <section>
      <h3 className="font-medium text-primary underline text-xl text-center">
        My Articles
      </h3>
      <ul className="relative mt-5">
        {list.map(({ id, date, title, description }: any) => (
          <Link href={`/posts/${id}`} key={id}>
            <a>
              <li>
                <p className="text-2xl font-semibold text-primary tracking-tight">
                  {title}
                </p>
                <p className="text-sm text-secondary tracking-tight mt-2">
                  {description}
                </p>
                <p className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                  {moment(date).format("LL")}
                </p>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default BlogList;
