export default function Pricing({paket,paket2}) {
    return (
        <div id="pricing" className="bg-white">
            <div className="pt-16 lg:pt-36 px-4 sm:px-6 lg:px-8 lg:pt-36">
                <div className="text-center">
                    <p className="mt-2 text-3xl font-extrabold text-gray-900tracking-tight leading-tight  sm:text-4xl lg:text-4xl">
                        Paket dan Harga
                    </p>
                    <p className="mt-3 max-w-4xl mx-auto sm:mt-5  text-xl text-gray-500">
                        Pilih dan Pesan Sekarang , silahkan tanyakan sesuai keinginan, Azmi Tour sangat terpercaya.
                    </p>
                </div>
            </div>

            <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
                <div className="mx-auto flex justify-center">
                    <img className="w-96" src={paket}/>
                </div>
                <div className="mx-auto flex justify-center mt-5">
                    <img className="w-96" src={paket2}/>
                </div>
            </div>
        </div>
    )
}
