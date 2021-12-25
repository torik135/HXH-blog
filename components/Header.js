import Link from "next/link"

const Header = () => {
  return (
      <header>
        <div className="container">
          <Link href="/">
            <h2>This Blog</h2>
          </Link>
        </div>
      </header >
    )
}

export default Header
