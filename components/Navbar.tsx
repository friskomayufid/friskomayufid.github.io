import Link from 'next/link'

function Navbar() {
  return (
    <div className="container mx-auto md:w-[1200px] px-4">
      <div className="navbar bg-white">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-primary">
            Frisko Blog
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about" className="text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/articles" className="text-primary">
                Articles
              </Link>
            </li>
            <li className="text-primary">
              <Link href="/projects" className="text-primary">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
