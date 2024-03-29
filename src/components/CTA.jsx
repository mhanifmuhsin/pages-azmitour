export default function CTA(){
    return(
        <div id="cta" className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                alt=""
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  Legalisasi Azmi Tour
                </h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Kami sudah mengantongi izin
                </p>
                <p className="mt-3 text-lg text-gray-300">
                  Azmi Tour sudah mengantongi izin Berusaha berbasis risiko dari
                  Pemerintah Republik Indonesia dengan judul KBLI Jasa
                  Pramuwisata, Dengan demikian tidak diragukan lagi ke
                  absahannya, ayuk kita wisata bersama Azmi Tour
                </p>
              </div>
            </div>
          </div>
    )
}