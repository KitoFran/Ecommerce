import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
<section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div className="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Promos</h2>

            <p className="mt-4 text-gray-500">
              Comprando una de estas marcas te llevas un pantalon Gucci gratis
            </p>
          </header>

          <a
            href="#"
            className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="block group">
              <h1>Imagen de promo</h1>

              <div className="mt-3">
                <h3
                  className="font-medium text-green-500 group-hover:underline group-hover:underline-offset-4"
                >
                  Simple Watch
                </h3>

                <p className="mt-1 text-sm text-green-500">$150</p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="block group">
              <h1>Imagen de promo 2</h1>

              <div className="mt-3">
                <h3
                  className="font-medium text-green-500 group-hover:underline group-hover:underline-offset-4"
                >
                  T-shirt
                </h3>

                <p className="mt-1 text-sm text-green-500">$150</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      <a href="#" className="block group">

  <div className="mt-3">
    <h3
      className="font-medium text-red-500 group-hover:underline group-hover:underline-offset-4"
    >
      Pants
    </h3>

    <p className="mt-1 text-sm text-red-500">$150</p>
  </div>
</a>
    </main>
  )
}
