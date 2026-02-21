
export default function Dashboard() {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold">Revenue Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-neutral-900 p-6 rounded-xl">Today's Revenue</div>
        <div className="bg-neutral-900 p-6 rounded-xl">Monthly Revenue</div>
        <div className="bg-neutral-900 p-6 rounded-xl">Commission Ledger</div>
      </div>
    </div>
  );
}
