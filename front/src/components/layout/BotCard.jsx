import { useNavigate } from "react-router-dom";
import { ClipboardList, Dumbbell, Smile, Sparkles } from "lucide-react";

const icons = {
  "param-mitra": <Smile className="w-6 h-6 text-purple-500" />,
  "gini": <ClipboardList className="w-6 h-6 text-blue-500" />,
  "easy": <Sparkles className="w-6 h-6 text-pink-500" />,
  "fit": <Dumbbell className="w-6 h-6 text-green-500" />
};

function BotCard({ title, description, id, borderColor }) {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/bot/${id}`)}
      className={`cursor-pointer p-6 rounded-xl shadow-md border ${borderColor} hover:scale-105 transition bg-white relative`}
    >
      {/* Floating Icon */}
      <div className="absolute -top-3 -left-3 bg-white rounded-full p-2 shadow">
        {icons[id]}
      </div>

      {/* Title + Description */}
      <h2 className="text-lg font-semibold mt-2 text-gray-900">{title}</h2>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
}

export default BotCard;
