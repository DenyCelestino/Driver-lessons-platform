'use client'

import { UniversalContext } from '@/app/context/UniversalContext'
import { routes } from '@/contants/routes'
import Link from 'next/link'

export default function BottomTab() {
  const { currentRoute } = UniversalContext()
  return (
    <div className="flex items-center justify-center md:hidden fixed left-0 right-0 bottom-0 h-16 bg-white w-full gap-8 ">
      {routes.map((item, index) => (
        <Link
          className={`${index == 0 && 'bg-primary-100'} p-1 ${
            index == 0 ? 'text-primary-200' : 'text-zinc-400'
          } rounded-full  hover:bg-primary-100 hover:text-primary-200`}
          href={item.path}
          key={index}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
