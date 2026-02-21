export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white">
        <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black">
          <div className="max-w-6xl mx-auto px-6 py-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}