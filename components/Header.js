import Link from "next/link"

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/" passHref>
          <h2>Hunter<i className="text-red">X</i>Hunter Blog</h2>
        </Link>
      </div>
    </header >
  )
}

export default Header
