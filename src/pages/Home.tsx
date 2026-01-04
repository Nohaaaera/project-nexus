function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="bg-white p-12 rounded-xl shadow-md">
        <h1 className="text-5xl font-bold text-gray-800 mb-4" style={{fontFamily: "'Pacifico', cursive"}}>Nexus Hub</h1>
        <p className="text-lg text-gray-600">Select a game from the side panel to begin your journey.</p>
        <p className="text-sm text-gray-500 mt-8">This is your central hub for all gaming activities.</p>
      </div>
    </div>
  );
}

export default Home;
