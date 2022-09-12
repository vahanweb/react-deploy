import './App.css';
import profileImage from './img/author.jpg';
function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Vahan Barseghyan</h2>
      <img src={profileImage} className="authorImg" alt='profile-image' />
    </div>
  );
}

export default App;
