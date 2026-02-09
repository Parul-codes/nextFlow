import { Calendar, Clock, Zap, AlertCircle, Plus} from 'lucide-react';

const Tasks = () => {
  return (
    <div className="lg:col-span-2 space-y-6">
        <section className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Create New Task</h2>

            <form className="text-black space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
                    Task Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter task title"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-slate-700 mb-1">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Deadline
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-slate-700 mb-1">
                      <AlertCircle className="w-4 h-4 inline mr-1" />
                      Priority
                    </label>
                    <select
                      id="priority"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="effort" className="block text-sm font-medium text-slate-700 mb-1">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Estimated Effort
                    </label>
                    <select
                      id="effort"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select effort</option>
                      <option value="short">Short (15-30 min)</option>
                      <option value="medium">Medium (1-2 hours)</option>
                      <option value="long">Long (3+ hours)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="energy" className="block text-sm font-medium text-slate-700 mb-1">
                      <Zap className="w-4 h-4 inline mr-1" />
                      Energy Required
                    </label>
                    <select
                      id="energy"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select energy level</option>
                      <option value="low">Low</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Additional details or context"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Task
                </button>
            </form>
        </section>

        <section className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Your Tasks</h2>

            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-600 font-medium mb-1">No tasks yet</p>
                <p className="text-sm text-slate-500">Create your first task to get started</p>
            </div>
        </section>
    </div>
  )
}

export default Tasks
