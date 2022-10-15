import "./App.css";
import {Popover, Transition} from "@headlessui/react";
import {MenuIcon, XIcon,} from "@heroicons/react/outline";
import {Fragment} from "react";
import ImageTravel from "./assets/tr_no_bg.png";
import Paket from "./assets/img_1.png";
import Paket2 from "./assets/img_2.png";
import Paket3 from "./assets/img_3.png";
import Paket4 from "./assets/img_4.png";
import Pricing from "./components/Pricing";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import {Link} from "react-scroll";
import CTA from "./components/CTA";
import MyPartners from "./components/MyPartner";
import G1 from "./assets/g_1.jpg";
import G2 from "./assets/g_2.jpg";
import G3 from "./assets/g_3.jpg";
import G4 from "./assets/g_4.jpg";
import G5 from "./assets/g_5.jpg";
import G6 from "./assets/g_6.jpg";
import G7 from "./assets/g_7.jpg";
import G8 from "./assets/g_8.jpg";

const navigation = [
    {name: "Home", href: "home"},
    {name: "Paket & Harga", href: "pricing"},
    {name: "Galeri", href: "gallery"},
    // {name: "Testimonial", href: "testimonial"},
    {name: "Legalisasi", href: "cta"},
    // {name: "FAQ", href: "faq"},
];

function App() {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <Popover as="header" className="relative">
                    <div className="bg-gray-800 pt-6">
                        <nav
                            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                            aria-label="Global"
                        >
                            <div className="flex items-center flex-1">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <div>
                                        <span className="sr-only">Workflow</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button
                                            className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="hidden space-x-8 md:flex md:ml-10">
                                    {navigation.map((item) => (
                                        <Link
                                            activeClass="active"
                                            to={item.href}
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                            className="text-base font-medium text-white hover:text-gray-300 cursor-pointer"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
                        >
                            <div
                                className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="pt-5 pb-6">
                                    <div className="px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <Link
                                                activeClass="active"
                                                to={item.href}
                                                spy={true}
                                                smooth={true}
                                                offset={50}
                                                duration={500}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <main>
                    <Hero ImageTravel={ImageTravel}/>
                    <MyPartners/>
                    <Pricing paket={Paket} paket2={Paket2} paket3={Paket3} paket4={Paket4}/>
                    <Gallery g_1={G1} g_2={G2} g_3={G3} g_4={G4} g_5={G5} g_6={G6} g_7={G7} g_8={G8}/>
                    {/*<Testimonial/>*/}
                    <CTA/>
                    {/*<Faq/>*/}
                </main>
            </div>
        </div>
    );
}

export default App;
