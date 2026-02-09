import { Sparkles } from 'lucide-react';

const Schedule = () => {
  return (
    <div className="space-y-6">
        <section className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900">How should NextFlow decide?</h2>
            <span><i className='text-sm text-slate-500'>You can change this anytime</i></span>

            <select className="text-black mt-4 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4">
                <option value="">Make a Decision</option>
                <option value="priority">Focus on what matters most</option>
                <option value="sjf">Finish quick wins</option>
                <option value="round-robin">Balance all tasks fairly</option>
            </select>

            <button
                type="button"
                className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all font-medium shadow-sm"
            >
                What should I work on next?
            </button>
        </section>

        <section className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Recommendation</h2>

            <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-slate-500 text-sm mb-4">
                  Click "What should I work on next?" to get a task recommendation based on the selected algorithm
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-medium text-slate-700 mb-2">Why this task?</h3>
                  <p className="text-xs text-slate-500">
                    Reasoning will appear here when a recommendation is generated
                  </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Schedule
