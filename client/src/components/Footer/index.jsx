import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Collapse } from "antd";
import { useNavigate } from "react-router-dom"
// const { Panel } = Collapse;

const FOOTER_LINKS = [
    {
        title: "THE COMPANY",
        links: [
            { name: "Our History", navigate: "/about/history" },
            { name: "Store Locator", href: "/location" },
            { name: "Contact", href: "/contact" },
            { name: "FAQs", href: "/faq" },
            { name: "Blogs", href: "/blog" },
        ],
    },
    {
        title: "POLICIES",
        links: [
            { name: "Cancellation Policy", href: "/policies/cancellation" },
            { name: "Return & Exchange Policy", href: "/policies/returns" },
            { name: "Shipping Policy", href: "/policies/shipping" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
        ],
    },
    {
        title: "LOOK BOOK",
        links: [
            { name: "Divani Silk Edit", href: "/lookbook/divani-silk-edit" },
            { name: "The Brides Edit", href: "/lookbook/brides-edit" },
            { name: "Shehnai", href: "/lookbook/shehnai" },
            { name: "Hayat", href: "/lookbook/hayat" },
            { name: "La Fuchsia’24", href: "/lookbook/la-fuchsia-24" },
        ],
    },
];

const SOCIAL_LINKS = [
    { icon: Instagram, href: "https://www.instagram.com/mahad.__.sajjad" },
    { icon: Facebook, href: "https://www.facebook.com" },
    { icon: Youtube, href: "https://www.youtube.com" },
];

const CONTACT_INFO = [
    {
        icon: MapPin,
        text: "32-A, Golshan-e-Rafiq, Redex Rd, Faisalabad",
        isAddress: true
    },
    {
        icon: Mail,
        text: "mahadsajjad787@gmail.com",
        href: "mailto:mahadsajjad787@gmail.com",
    },
    {
        icon: Phone,
        text: "+92 (0)314 7299331",
        href: "tel:+923147299331"
    },
];

const Footer = () => {
    const navigate = useNavigate()
    const linkClasses = "text-gray-400 hover:text-white transition-colors duration-200";

    const LinkList = ({ links }) => (
        <ul className="space-y-2 text-sm">
            {links.map((link) => (
                <li key={link.name} onClick={() => { navigate(link.href) }} className="cursor-pointer !text-gray-400 !hover:text-white transition-colors duration-200">
                    {link.name}
                </li>
            ))}
        </ul>
    );

    const ContactList = () => (
        <ul className="space-y-3 text-sm text-gray-400">
            {CONTACT_INFO.map((item, index) => {
                const Icon = item.icon;
                const linkProps = item.href ? { href: item.href } : {};
                const Wrapper = item.href ? 'a' : 'div';

                return (
                    <li key={index} className={`flex ${item.isAddress ? 'items-start' : 'items-center'}`}>
                        {/* Wrapper applies linkClasses only if it's an interactive link */}
                        <Wrapper {...linkProps} className={`flex ${item.href ? 'items-start !text-gray-400 hover:!text-white' : 'items-center'}`}>
                            <Icon className={`w-4 h-4 mr-2 ${item.isAddress ? 'mt-1' : ''}`} />
                            {item.text}
                        </Wrapper>
                    </li>
                );
            })}
        </ul>
    );

    const mobileItems = [
        ...FOOTER_LINKS.map((column, index) => ({
            key: `panel-${index + 1}`,
            label: column.title,
            children: <LinkList links={column.links} />,
        })),
        {
            key: `panel-4`,
            label: 'HOW CAN WE HELP YOU?',
            children: <ContactList />,
        }
    ];

    // --- RENDER ---
    return (
        <footer className="bg-black text-gray-300 py-12 px-6 md:px-20">

            {/* --- Desktop Footer (md breakpoint and up) --- */}
            <div className="hidden md:grid md:grid-cols-4 gap-8 mb-10">
                {FOOTER_LINKS.map((column) => (
                    <div key={column.title}>
                        <h3 className="text-sm font-semibold mb-4 text-white uppercase">
                            {column.title}
                        </h3>
                        <LinkList links={column.links} className="text-gray-400 hover:text-white transition-colors duration-200" />
                    </div>
                ))}
                <div>
                    <h3 className="text-sm font-semibold mb-4 text-white uppercase">
                        HOW CAN WE HELP YOU?
                    </h3>
                    <ContactList />
                </div>
            </div>

            {/* --- Mobile Footer (Accordion) --- */}
            <div className="md:hidden mb-10">
                <Collapse
                    accordion
                    ghost
                    expandIconPosition="end"
                    items={mobileItems}
                    className="
                        [&>.ant-collapse-item>.ant-collapse-header]:!text-white 
                        [&>.ant-collapse-item]:border-b 
                        [&>.ant-collapse-item]:border-gray-700
                    "
                >
                </Collapse>
            </div>

            {/* --- Bottom Section (Copyright & Social Icons) --- */}
            <div className="
                border-t border-gray-700 pt-6 
                flex flex-col md:flex-row 
                items-center justify-between 
                text-xs text-gray-500
            ">
                <p>&copy; {new Date().getFullYear()} MAHAD. ALL RIGHTS RESERVED.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    {SOCIAL_LINKS.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                // Social links also use the standard linkClasses for color
                                className={linkClasses}
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;