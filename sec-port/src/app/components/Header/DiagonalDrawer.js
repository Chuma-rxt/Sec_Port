import React from 'react'
import { useRouter, usePathname as useRouterPathname } from 'next/navigation'

export default function DiagonalDrawer({ isOpen, setIsOpen, selectedIndex1, setSelectedIndex1 }) {
  const route = useRouter()
  const pathname = useRouterPathname()

  return (
    <React.Fragment>
      <div className='relative'>
        <div className={`z-50 ${pathname === '/' ? 'top-[0px]': 'top-[100px]'} cursor-pointer fixed w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center rounded-br-3xl`}>
          <div
            onClick={() => setIsOpen(false)}
            className="relative w-7 lg:wh-10 h-7 lg:h-10 flex justify-center items-center">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5m3 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
