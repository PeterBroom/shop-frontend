import Link from 'next/link'
import RootLayout from './layout'

export default function Home() {
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <ul className="list-none flex flex-col gap-6">
            <li className="text-black hover:underline"><Link className="text-black" href={'/store-front'}>Store front example</Link></li>
            <li className="text-black hover:underline"><Link className="text-black" href={'/product'}>Product page example</Link></li>
            <li className="text-black hover:underline"><Link className="text-black" href={'/cart'}>Cart page example</Link></li>
            <li className="text-black hover:underline"><Link className="text-black" href={'/category'}>Category page example</Link></li>
            <li className="text-black hover:underline"><Link className="text-black" href={'/checkout'}>Checkout page example</Link></li>
            <li className="text-black hover:underline"><Link className="text-black" href={'/order-detail'}>Order detail example</Link></li>
            <li className="text-black hover:underline"><Link className="text-black" href={'/order-history'}>Order history example</Link></li>
          </ul>
        </div>
      </main>
    </RootLayout>
  )
}
