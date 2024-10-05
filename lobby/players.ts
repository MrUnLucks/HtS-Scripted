type Player = { id: string; ready: boolean; name: string };
export const players: { [id: string]: Player } = {};

export const addPlayer = (player: { id: string; name: string }) => {
  players[player.id] = { id: player.id, ready: false, name: player.name };
};

export const setPlayerReady = (playerId: string) => {
  const targetPlayer = players[playerId];
  if (targetPlayer) {
    targetPlayer.ready = true;
  }
};

export const areAllPlayersReady = (): boolean => {
  return Array.from(Object.values(players)).every((player) => player.ready);
};

export const removePlayer = (playerId: string) => {
  delete players[playerId];
};
