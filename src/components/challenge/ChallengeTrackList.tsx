import React from 'react';
import { GameResult } from '../../types/game';
import { SpotifyTrack } from '../../types/spotify';

interface ChallengeTrackListProps {
  originalResults: GameResult[];
  playerResults: GameResult[];
  tracks?: SpotifyTrack[];
}

export const ChallengeTrackList: React.FC<ChallengeTrackListProps> = ({
  originalResults,
  playerResults,
  tracks = []
}) => (
  <div className="space-y-4">
    {originalResults.map((original, index) => {
      const player = playerResults[index];
      const track = tracks[index];
      
      return (
        <div key={original.trackId} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex-shrink-0">
            <img
              src={track?.album.images[0]?.url || original.albumImage}
              alt={track?.name || original.trackName}
              className="w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-lg truncate dark:text-white">
              {track?.name || original.trackName}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
              {track?.artists.map(a => a.name).join(', ') || original.artistName}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="font-bold text-lg dark:text-white">
              {original.score} vs {player?.score || 0}
            </div>
            <div className="text-sm text-gray-500">
              {original.time.toFixed(1)}s vs {player?.time.toFixed(1) || '0.0'}s
            </div>
          </div>
        </div>
      );
    })}
  </div>
);