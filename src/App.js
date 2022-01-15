import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Post from './components/Post/Post';


function App() {
  return (
    <Layout>
      <Post />
      <Routes>
        {/* <Route exact path="/" element={< />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;