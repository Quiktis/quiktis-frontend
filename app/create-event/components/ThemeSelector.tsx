import React from "react";
import { Calendar } from "lucide-react";

type ThemeSelectorProps = {
  showThemeSelector: boolean;
  setShowThemeSelector: (value: boolean) => void;
  handleThemeSelect: (color: string) => void;
  eventTheme: string | undefined;
  themeColors: Theme[];
};

type Theme = {
  name: string;
  color: string;
};


export default function ThemeSelector({
  showThemeSelector,
  setShowThemeSelector,
  handleThemeSelect,
  eventTheme,
  themeColors
}: ThemeSelectorProps) {
  return (
    <div className="relative">
      <button
        onClick={() => setShowThemeSelector(!showThemeSelector)}
        className="z-30 flex items-center gap-3 bg-[#FFFFFF0F] backdrop-blur-xl text-white px-4 py-3 rounded-lg hover:bg-[#3a3d4a] transition-colors w-full text-center "
      >
        <span className="w-fit mx-auto">Choose Theme</span>
      </button>

      {showThemeSelector && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-[#2a2d3a] rounded-2xl p-4 z-10 border border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400">Select Theme Color</span>
            <button
              onClick={() => setShowThemeSelector(false)}
              className="text-gray-400 hover:text-white"
            >
              <Calendar className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {themeColors.map((theme: Theme) => (
              <button
                key={theme.name}
                onClick={() => handleThemeSelect(theme.color)}
                className={`w-12 h-12 rounded-full border-2 transition-all hover:scale-110 ${
                  eventTheme === theme.color
                    ? "border-white shadow-lg"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: theme.color }}
                title={theme.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
