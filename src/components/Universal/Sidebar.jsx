'use client'

import { UniversalContext } from '@/app/context/UniversalContext'
import { routes } from '@/contants/routes'
import Link from 'next/link'

export default function Sidebar() {
  const { currentRoute } = UniversalContext()
  return (
    <div className="hidden md:flex fixed left-0 top-0 bottom-0 h-full bg-white w-24 flex-col items-center py-6">
      <h1>GS</h1>

      <div className="flex flex-col gap-4 my-5">
        {routes.map((item, index) => (
          <Link
            className={`${index == 0 && 'bg-primary-100'} p-2 ${
              index == 0 && 'text-primary-200'
            } rounded-full  hover:bg-primary-100 hover:text-primary-200 duration-300`}
            href={item.path}
            key={index}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  )
}
