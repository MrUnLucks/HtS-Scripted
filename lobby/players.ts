type Player = { id: string; ready: boolean; name: string };
export const players: { [id: string]: Player } = {};

export const addPlayer = (player: { id: string; name: string }) => {
  players[player.id] = { id: player.id, ready: false, name: player.name };
};

export const removePlayer = (playerId: string) => {
  delete players[playerId];
};

export const setPlayerReady = (playerId: string, ready: boolean = true) => {
  const targetPlayer = players[playerId];
  if (!targetPlayer) return;
  targetPlayer.ready = ready;
};

export const resetReadyAllPlayers = () => {
  Object.values(players).forEach((player) => {
    player.ready = false;
  });
};

export const areAllPlayersReady = (): boolean => {
  return Array.from(Object.values(players)).every((player) => player.ready);
};
