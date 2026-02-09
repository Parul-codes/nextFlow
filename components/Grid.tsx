import Schedule from "./Schedule"
import Tasks from "./Tasks"

const Grid = () => {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Tasks/>
          <Schedule/>
        </div>
      </main>
    </div>
  )
}

export default Grid
