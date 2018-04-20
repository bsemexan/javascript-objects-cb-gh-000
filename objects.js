var playlist = {akon:"selfish"};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, artistName, songTitle);
}
