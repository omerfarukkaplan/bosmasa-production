"use client";

export default function Pricing() {
  const handleSubscribe = async () => {
    const res = await fetch("/api/paddle/create-checkout", {
      method: "POST",
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Checkout error");
      console.log(data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 text-center">
        <h1 className="text-3xl font-bold mb-6">$79 / month</h1>
        <p className="text-neutral-400 mb-8">
          3 days free trial included
        </p>
        <button
          onClick={handleSubscribe}
          className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl text-lg"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}