import Image from 'next/image'
import NOTFOUND from '../../public/notfound.svg'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=" h-screen w-screen text-center flex flex-col gap-4 items-center justify-center">
      <div className="w-40 h-40">
        <Image className="h-full w-full" src={NOTFOUND} />
      </div>
      <h1 className="text-base md:text-lg font-bold animate-bounce">
        We are building something
      </h1>
      <p className="text-xs md:text-base">
        Soon you will have something very good here!
      </p>
      <Link
        href={'/home'}
        className="bg-primary-200 text-white p-2 rounded text-xs md:text-base  "
      >
        Back home
      </Link>
    </div>
  )
}
