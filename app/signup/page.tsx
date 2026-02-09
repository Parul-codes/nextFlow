import { Sparkles, Mail, Lock, User } from 'lucide-react';

interface SignUpProps {
  onSwitchToLogin: () => void;
}

export function SignUp({ onSwitchToLogin }: SignUpProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-semibold text-slate-900">NextFlow</h1>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Create your account</h2>
            <p className="text-slate-500 text-sm">Start organizing your tasks and optimizing your workflow</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-slate-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

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
                placeholder="Create a password"
              />
              <p className="text-xs text-slate-500 mt-1">At least 8 characters recommended</p>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700 mb-2">
                <Lock className="w-4 h-4 inline mr-2" />
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm your password"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-slate-300 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-xs text-slate-600">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium mt-6"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600 text-sm">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          This is a UI-only interface. Backend API integration coming soon.
        </p>
      </div>
    </div>
  );
}
