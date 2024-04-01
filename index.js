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
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "Rock",
    "Groot": "Pop", // Imagine Groot enjoying something vibrant and catchy!
};

function generatePlaylist(guardians, songs) {
    const playlists = {};
    Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];
        playlists[guardian] = songs.filter(song => song.genre === genre).map(song => song.title);
    });
    return playlists;
}


//create and append elements to the #playlists div:
const displayPlaylists = (guardianPlaylists) => {
    const playlistsDiv = document.getElementById('playlists');
    Object.entries(guardianPlaylists).forEach(([guardian, playlist]) => {
        const guardianDiv = document.createElement('div');
        const guardianName = document.createElement('h2');
        guardianName.textContent = guardian + "'s Playlist:";
        guardianDiv.appendChild(guardianName);

        const songList = document.createElement('ul');
        playlist.forEach(song => {
            const songItem = document.createElement('li');
            songItem.textContent = song;
            songList.appendChild(songItem);
        });
        guardianDiv.appendChild(songList);
        playlistsDiv.appendChild(guardianDiv);
    });
};

// Call generatePlaylist and display the playlists for each Guardian
const guardianPlaylists = generatePlaylist(guardians, songs);
console.log(guardianPlaylists);



