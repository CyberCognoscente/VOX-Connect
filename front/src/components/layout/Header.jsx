function Header() {
  return (
    <header className="w-full bg-[#111827] text-white px-6 py-4 flex justify-between items-center shadow-md border-b border-gray-700">
      <h1 className="text-xl font-bold tracking-wide">VOX CONNECT</h1>
      <button 
        onClick={() => window.location.href = "/"} 
        className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-xl hover:opacity-90 transition font-medium">
        Logout
      </button>
    </header>
  );
}

export default Header;
