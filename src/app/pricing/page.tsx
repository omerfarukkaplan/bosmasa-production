
"use client";
export default function Pricing() {
  const checkout = async () => {
    const res = await fetch('/api/paddle/create-checkout', { method: 'POST' });
    const data = await res.json();
    window.location.href = data.url;
  };
  return (
    <div className="p-20 text-center">
      <h2 className="text-5xl mb-4">Pro Plan</h2>
      <p>$79/month + 5% commission</p>
      <button onClick={checkout} className="bg-emerald-500 px-6 py-3 rounded-xl mt-6">
        Subscribe
      </button>
    </div>
  );
}
