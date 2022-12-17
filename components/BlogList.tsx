import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

interface BlogList {
  list: Array<String>
}

function BlogList({ list }: BlogList) {
  return (
    <section className="container mx-auto px-4 md:w-[1200px] bg-white mt-32">
      <h3 className="font-medium text-primary text-3xl text-center">
        Artikel Terbaru
      </h3>
      <ul className="grid grid-cols-3 gap-x-12 gap-y-6">
        {list.map(({ id, date, title, description, image }: any) => (
          <Link href={`/posts/${id}`} key={id}>
            {/* <li>
              <p className="text-2xl font-semibold text-primary dark:text-white tracking-tight underline">
                {title}
              </p>
              <p className="text-sm text-secondary dark:text-graywhite tracking-tight mt-2">
                {description}
              </p>
              <p className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 text-secondary dark:text-graywhite">
                {moment(date).format('LL')}
              </p>
            </li> */}
            <div className="card w-96 bg-white shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src={image}
                  alt={title}
                  className="rounded-xl"
                  width={400}
                  height={200}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{title}</h2>
                <p className="text-secondary">{description}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">
                    {moment(date).format('LL')}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default BlogList
