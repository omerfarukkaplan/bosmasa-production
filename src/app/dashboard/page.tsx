export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Revenue Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <p className="text-neutral-400">Today's Revenue</p>
          <h2 className="text-2xl font-bold mt-2">$0</h2>
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <p className="text-neutral-400">Monthly Revenue</p>
          <h2 className="text-2xl font-bold mt-2">$0</h2>
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <p className="text-neutral-400">Commission</p>
          <h2 className="text-2xl font-bold mt-2">$0</h2>
        </div>
      </div>
    </div>
  );
}