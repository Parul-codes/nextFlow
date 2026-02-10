'use client'
import { Sparkles, Mail, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-semibold text-slate-900">NextFlow</h1>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Welcome back</h2>
            <p className="text-slate-500 text-sm">Sign in to your account to continue</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                <Lock className="w-4 h-4 inline mr-2" />
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <Link href="/"
              type="button"
              className="block text-center w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium mt-6"
            >
              Sign In
            </Link>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600 text-sm">
              Don't have an account?{' '}
              <Link 
                type="button"
                href="/signup"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <button
              type="button"
              className="w-full text-slate-600 text-sm hover:text-slate-700 transition-colors"
            >
              Forgot password?
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          This is a UI-only interface. Backend API integration coming soon.
        </p>
      </div>
    </div>
  );
}
