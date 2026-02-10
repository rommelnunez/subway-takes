import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    const footerLinks = [
        "Audio Description",
        "Help Center",
        "Gift Cards",
        "Media Center",
        "Investor Relations",
        "Jobs",
        "Terms of Use",
        "Privacy",
        "Legal Notices",
        "Cookie Preferences",
        "Corporate Information",
        "Contact Us",
    ];

    return (
        <footer className="w-full max-w-5xl mx-auto px-4 py-16 text-gray-500 text-sm">
            <div className="flex gap-6 mb-8 text-white">
                <Facebook className="fill-white w-6 h-6 cursor-pointer" />
                <Instagram className="w-6 h-6 cursor-pointer" />
                <Twitter className="fill-white w-6 h-6 cursor-pointer" />
                <Youtube className="fill-white w-6 h-6 cursor-pointer" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {footerLinks.map((link) => (
                    <Link key={link} href="#" className="hover:underline">
                        {link}
                    </Link>
                ))}
            </div>

            <button className="border border-gray-500 px-4 py-1 mb-6 text-gray-500 hover:text-white mb-4">
                Service Code
            </button>

            <div className="text-[11px]">
                © 1997-2024 Netflix, Inc.
            </div>
        </footer>
    );
}
