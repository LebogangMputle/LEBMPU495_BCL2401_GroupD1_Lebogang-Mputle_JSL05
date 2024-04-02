// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
  // Feel free to add even more songs
  { title: "Story of OJ", artist: "Jay-z", genre: "Hiphop"},
  { title: "All me", artist: "Drake", genre: "Hiphop"},
  { title: "Masithokoze", artist: "Dj Stokie", genre: "House"},
  { title: "Agora", artist: "Caiiro", genre: "House"},
  { title: "Let's Stay Together", artist: "Al Green", genre: "Soul"},
  { title: "A rose is a rose", artist:"Aretha Franklin", genre:"Soul"},
];


// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  "Gamora": "Pop",
  // Add preferences for Drax, Rocket, and Groot*/
  "Drax": "Soul",
  "Rocket": "Hiphop",
  "Groot": "House"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  const playlistsContainer = document.getElementById('playlists');

  Object.keys(guardians).map(guardian => {
      const playlistGenre = guardians[guardian];
      const playlistSongs = songs.filter(song => song.genre === playlistGenre);

      const playlistDiv = document.createElement('div');
      playlistDiv.classList.add('playlist');

      const playlistTitle = document.createElement('h2');
      playlistTitle.textContent = `${guardian}'s Playlist`;

      const songList = document.createElement('ul');
      songList.style.listStyleType = "none";

      playlistSongs.forEach(song => {
          const listItem = document.createElement('li');
          listItem.style.marginBottom = "10px"
          listItem.innerHTML = `<span class="song-title">${song.title}</span> - ${song.artist}`;
          songList.appendChild(listItem);
      });

      playlistDiv.appendChild(playlistTitle);
      playlistDiv.appendChild(songList);

      playlistsContainer.appendChild(playlistDiv);
  });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);