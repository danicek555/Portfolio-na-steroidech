"use client";

import { useState } from "react";
import { Play, ExternalLink, Clock, Eye } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import clsx from "clsx";
import Image from "next/image";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  description?: string;
  duration?: string;
  views?: string;
  thumbnail?: string;
  className?: string;
}

export default function VideoPlayer({
  videoId,
  title,
  description,
  duration,
  views,
  thumbnail,
  className = "",
}: VideoPlayerProps) {
  const { isDarkMode } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbnailUrl =
    thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleOpenInYouTube = () => {
    window.open(youtubeUrl, "_blank");
  };

  return (
    <div className={clsx("w-full", className)}>
      <div
        className={clsx(
          "rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl",
          isDarkMode ? "bg-gray-800" : "bg-white"
        )}
      >
        {/* Video Container */}
        <div className="relative aspect-video bg-black">
          {!isPlaying ? (
            // Thumbnail with Play Button
            <div className="relative w-full h-full group cursor-pointer">
              <Image
                src={thumbnailUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to standard resolution thumbnail
                  const target = e.target as HTMLImageElement;
                  target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Play Button */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                onClick={handlePlayClick}
              >
                <div className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                  <Play className="w-12 h-12 ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Duration Badge */}
              {duration && (
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  {duration}
                </div>
              )}
            </div>
          ) : (
            // YouTube Embed
            <iframe
              src={embedUrl}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Video Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3
              className={clsx(
                "text-xl font-bold leading-tight transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              {title}
            </h3>
            <button
              onClick={handleOpenInYouTube}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105",
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              )}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">YouTube</span>
            </button>
          </div>

          {/* Video Stats */}
          {(views || duration) && (
            <div className="flex items-center gap-4 mb-4">
              {views && (
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-red-600" />
                  <span
                    className={clsx(
                      "text-sm transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {views} views
                  </span>
                </div>
              )}
              {duration && !isPlaying && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span
                    className={clsx(
                      "text-sm transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {duration}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          {description && (
            <p
              className={clsx(
                "text-sm leading-relaxed transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
