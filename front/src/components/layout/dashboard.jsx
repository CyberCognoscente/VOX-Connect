import Header from "./Header";
import BotCard from "./BotCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] flex flex-col py-6 px-4 border-r border-gray-700">
        <button className="flex items-center gap-3 text-pink-400 font-medium bg-[#334155] px-4 py-2 rounded-lg">
          <span className="text-lg">🎙️</span> My Voice Bots
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <Header />
        <div className="max-w-6xl mx-auto py-10 px-6">
          <h2 className="text-2xl font-bold mb-6">My Voice Bots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BotCard
              id="param-mitra"
              title="VOX: Param Mitra"
              description="Your personal mental health and friendly bot"
              borderColor="border-purple-400"
            />
             <BotCard
              id="gini"
              title="VOX: Gini"
              description="Your assistant that would listen and hear all your tasks"
              borderColor="border-blue-400"
            />
             <BotCard
              id="fit"
              title="VOX: Fit"
              description="Your personalized health, workout, and nutrition coach"
              borderColor="border-green-400"
            />
           
            <BotCard
              id="easy"
              title="VOX: Easy"
              description="Simplifies complex tasks and provides quick summaries."
              borderColor="border-pink-400"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
