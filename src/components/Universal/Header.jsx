import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full  py-1 h-14 text-zinc-950  z-20 bg-white  fixed left-0 right-0 top-0 md:pl-24 ">
      <div className="wrapper flex items-center justify-between">
        <div className="border border-zinc-300 dark:border-zinc-800 p-2 w-[40%] flex items-center gap-2 rounded">
          <Search size={20} />
          <input
            className="bg-transparent w-full h-full focus:outline-none text-xs md:text-base"
            placeholder="search something "
          />
        </div>

        <div className="h-10 w-10 flex items-center justify-center text-xs md:text-base text-zinc-50  rounded-full bg-green-600">
          <span className="text-xs md:text-base">D</span>
        </div>
      </div>
    </header>
  )
}
