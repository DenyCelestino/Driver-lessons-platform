'use client'

import LEARN from '../../../../public/learn.svg'
import TEST from '../../../../public/test.svg'
import EXAM from '../../../../public/exam.svg'
import Image from 'next/image'
import { MoreHorizontal } from 'lucide-react'
import { BsFillPlayFill } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Windows = [
  {
    title: 'Learn Driver Lessons',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis nulla veniam ullam mollitia.',
    percent: '65',
    image: LEARN,
    price: null
  },
  {
    title: 'Make Driver Lessons Tests',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis nulla veniam ullam mollitia saepe beatae nisi illum libero rerum.',
    percent: null,
    image: TEST,
    price: '100'
  },
  {
    title: 'Make Driver Lessons Exams',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis nulla veniam ullam mollitia saepe beatae nisi illum libero rerum.',

    percent: null,
    image: EXAM,
    price: '250'
  }
]
export default function Home() {
  return (
    <div className="wrapper flex flex-col gap-2">
      <div className="block md:hidden">
        <div className="bg-gradient-to-r from-white via-white to-primary-200 rounded-md shadow-sm p-2">
          <span className="text-xs">Hello Delfim, Welcome back!</span>
        </div>
      </div>
      <h1 className="text-lg md:text-2xl">Choose your destiny</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-3 md:gap-y-0  md:gap-x-6">
        {Windows.map((item, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeIn',
              duration: 1.5 * index == 0 ? 1 : index + 0.5
            }}
            key={index}
          >
            <div className="bg-white rounded-md shadow-sm p-6 flex flex-col gap-10 md:hover:scale-105 duration-300 cursor-pointer">
              <div className=" h-36 md:h-48 w-full">
                <Image className="h-full w-full" src={item.image} />
              </div>
              <div className=" flex flex-col gap-4">
                <h1 className="text-base md:text-lg font-bold">
                  {item.title}
                </h1>
                <p className="text-xs md:text-base">
                  {item.subtitle}
                </p>

                {item.percent && (
                  <div className="h-2 w-full mt-4 md:mt-0 bg-zinc-100 rounded-full">
                    <div className="bg-primary-200 h-full w-3/4 rounded-full relative">
                      <span className="text-xs md:text-base absolute top-0 right-0 -mt-5 text-blue-400">
                        {item.percent + '%'}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  {item.price ? (
                    <p className="text-base md:text-lg font-bold">
                      {item.price} MT
                    </p>
                  ) : (
                    <MoreHorizontal className="text-zinc-400" />
                  )}
                  {item.price ? (
                    <button className="bg-primary-200 text-white py-1 px-6 rounded">
                      Buy
                    </button>
                  ) : (
                    <Link
                      href={'#'}
                      className="bg-blue-400 text-white p-2 rounded-full"
                    >
                      <BsFillPlayFill size={15} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="hidden md:block">
          <div className="bg-gradient-to-r from-white via-white to-primary-200 rounded-md shadow-sm p-4">
            <span>Hello Delfim, Welcome back!</span>
          </div>
        </div>
      </div>
    </div>
  )
}
