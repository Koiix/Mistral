import Link from 'next/Link';

const linkStyle = {
    marginRight: 15
}

const Navbar = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>Forms</a>
        </Link>
        <Link href="/login">
            <a style={linkStyle}>Login</a>
        </Link>
        <Link href="/signup">
            <a style={linkStyle}>Sign up</a>
        </Link>
    </div>
)

export default Navbar;