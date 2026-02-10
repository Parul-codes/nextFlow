import { Sparkles } from "lucide-react"
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-blue-600" />
              <h1 className="text-2xl font-semibold text-slate-900">NextFlow</h1>
              <span className="text-sm text-slate-500 ml-2">Know What To Work On Next - Instantly</span>
            </div>
            <Link href="/login" className="bg-blue-600 text-sm py-2 px-4 rounded-md cursor-pointer">Login</Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
