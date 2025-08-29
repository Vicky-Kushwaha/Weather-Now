import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning } from "lucide-react";

export const weatherIcons = {
  0: <Sun className="text-yellow-400 w-16 h-16" />,
  1: <Cloud className="text-gray-400 w-16 h-16" />,
  2: <Cloud className="text-gray-500 w-16 h-16" />,
  3: <Cloud className="text-gray-600 w-16 h-16" />,
  45: <Cloud className="text-gray-400 w-16 h-16" />,
  48: <Cloud className="text-gray-400 w-16 h-16" />,
  51: <CloudRain className="text-blue-400 w-16 h-16" />,
  61: <CloudRain className="text-blue-500 w-16 h-16" />,
  71: <CloudSnow className="text-blue-300 w-16 h-16" />,
  95: <CloudLightning className="text-yellow-500 w-16 h-16" />,
};
