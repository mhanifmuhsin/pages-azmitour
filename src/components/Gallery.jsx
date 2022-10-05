export default function Gallery({g_1, g_2, g_3, g_4, g_5, g_6, g_7, g_8}) {
    return (
        <div id="gallery" className="relative bg-white py-16 sm:py-24 lg:py-40">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Galeri
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    Inilah kenangan-kenangan masa ceria bersama Azmi Tour, segeralah booking paket untuk menentukan masa
                    ceria di hari yang akan datang bersama kami.
                </p>
                <div className="mt-12">
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        <li key={1} className="relative">
                            <div
                                className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={g_1} alt=""
                                     className="pointer-events-none object-cover group-hover:opacity-75"/>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">PKK
                                & Kader Desa Serang Mekar</p>
                        </li>
                        <li key={2} className="relative">
                            <div
                                className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={g_2} alt=""
                                     className="pointer-events-none object-cover group-hover:opacity-75"/>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">PKK
                                & Kader Desa Serang Mekar</p>
                        </li>
                        <li key={3} className="relative">
                            <div
                                className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={g_3} alt=""
                                     className="pointer-events-none object-cover group-hover:opacity-75"/>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">PKK
                                & Kader Desa Serang Mekar</p>
                        </li>
                        <li key={4} className="relative">
                            <div
                                className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={g_4} alt=""
                                     className="pointer-events-none object-cover group-hover:opacity-75"/>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">PKK
                                & Kader Desa Serang Mekar</p>
                        </li>

                        <li key={5} className="relative">
                            <div
                                className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={g_5} alt=""
                                     className="pointer-events-none object-cover group-hover:opacity-75"/>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">Family Gathering</p>
                        </li>
                        <li key={6} className="relative">
                            <div
                                className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={g_6} alt=""
                                     className="pointer-events-none object-cover group-hover:opacity-75"/>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">Ziarah Waliyulloh</p>
                        </li>
                        <li key={7} className="relative">
                            <div
                                className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={g_7} alt=""
                                     className="pointer-events-none object-cover group-hover:opacity-75"/>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">Ziarah Waliyulloh</p>
                        </li>
                        <li key={8} className="relative">
                            <div
                                className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={g_8} alt=""
                                     className="pointer-events-none object-cover group-hover:opacity-75"/>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">Family Gathering SOROJA
                                </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
