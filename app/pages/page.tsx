import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ul className="list-none">
          <li className="text-black"><Link className="text-black" href={'/examples/store-front'}>Store front example</Link></li>
          <li className="text-black"><Link className="text-black" href={'/examples/product'}>Product page example</Link></li>
          <li className="text-black"><Link className="text-black" href={'/examples/cart'}>Cart page example</Link></li>
          <li className="text-black"><Link className="text-black" href={'/examples/category'}>Category page example</Link></li>
          <li className="text-black"><Link className="text-black" href={'/examples/ccheckout'}>Checkout page example</Link></li>
          <li className="text-black"><Link className="text-black" href={'/examples/order-detail'}>Order detail example</Link></li>
          <li className="text-black"><Link className="text-black" href={'/examples/order-history'}>Order history example</Link></li>
        </ul>
      </div>
    </main>
  )
}
