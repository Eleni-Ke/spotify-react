const Player = () => {
  return (
    <div className="player">
      <div className="player-album-info">
        <img src="https://picsum.photos/200" alt="playlist" />
        <p>
          Song Title <br />
          Artist
        </p>
        <div>icon1 and icon2</div>
      </div>
      <div className="player-middle-buttons">
        This is the middle section of the player. It has buttons and stuff...
      </div>
      <div className="player-right-buttons">
        buttons little buttons for the sound and for the lyrics lala.
      </div>
    </div>
  );
};

export default Player;
