import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Post from './components/Post/Post';
import NewPost from './components/NewPost/NewPost';


function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Post />} />
        <Route exact path="/newpost" element={<NewPost />} />
      </Routes>
    </Layout>
  );
}

export default App;