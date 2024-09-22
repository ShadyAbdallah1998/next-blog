import React from "react";
import Link from "next/link";

function Header() {
  const routes = [
    { title: "Blog", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Login", href: "/login" },
    { title: "Add Product", href: "/add-product" },
  ];

  return (
    <header className="bg-gray-800">
      <nav className="flex justify-center gap-10 py-4">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.title}
            className="text-white hover:text-gray-300 transition-transform transform hover:scale-105"
          >
            {route.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
