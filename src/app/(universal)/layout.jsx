import BottomTab from '@/components/Universal/BottomTab'
import Header from '@/components/Universal/Header'
import Sidebar from '@/components/Universal/Sidebar'

export default function LayoutUniversal({ children }) {
  return (
    <main className="min-h-screen bg-zinc-100/100 dark:bg-dark-200 pt-[56px] pb-36 md:pb-0 ">
      <Header />
      <Sidebar />

      <div className="pb-16 md:pb-0 md:pl-24">{children}</div>
      <BottomTab />
    </main>
  )
}
