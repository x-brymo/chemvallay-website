import React from 'react';
import Link from 'next/link';

interface NavItem {
    label: string;
    href: string;
}

const Navbar: React.FC = () => {
    const navItems: NavItem[] = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <Link href={item.href}>
                            <div className="nav-link">{item.label}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;