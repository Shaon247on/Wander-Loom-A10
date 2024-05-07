import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
            <Link to='/' className="btn btn-ghost text-xl">Wander<span className="text-blue-500">Loom</span></Link>
                <p>Shaon Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Country</h6>
                <Link to='/bangladesh'>Bangladesh</Link>
                <Link to='/thailand'>Thailand</Link>
                <Link to='/vietnam'>Vietnam</Link>
                <Link to='/cambodia'>Cambodia</Link>
                <Link to='/malaysia'>Malaysia</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to='/contactus' className="link link-hover">Contact Us</Link>               
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;