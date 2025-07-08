import React from 'react';

// Sample data for new manga releases
const newReleases = [
  {
    id: 1,
    title: '進撃の巨人 34',
    author: '諫山創',
    thumbnail: 'https://placehold.jp/150x220.png?text=進撃の巨人',
    kindleLink: '#'
  },
  {
    id: 2,
    title: '呪術廻戦 27',
    author: '芥見下々',
    thumbnail: 'https://placehold.jp/150x220.png?text=呪術廻戦',
    kindleLink: '#'
  },
  {
    id: 3,
    title: 'ONE PIECE 109',
    author: '尾田栄一郎',
    thumbnail: 'https://placehold.jp/150x220.png?text=ONE PIECE',
    kindleLink: '#'
  },
  {
    id: 4,
    title: '僕のヒーローアカデミア 41',
    author: '堀越耕平',
    thumbnail: 'https://placehold.jp/150x220.png?text=僕のヒーローアカデミア',
    kindleLink: '#'
  },
    {
    id: 5,
    title: 'SPY×FAMILY 14',
    author: '遠藤達哉',
    thumbnail: 'https://placehold.jp/150x220.png?text=SPY×FAMILY',
    kindleLink: '#'
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>今月の新刊</h1>
      </header>
      <div className="manga-list">
        {newReleases.map(manga => (
          <div key={manga.id} className="manga-item">
            <img src={manga.thumbnail} alt={manga.title} />
            <h2>{manga.title}</h2>
            <p>{manga.author}</p>
            <a href={manga.kindleLink} target="_blank" rel="noopener noreferrer" className="kindle-button">
              Kindleで購入
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;