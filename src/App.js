import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';


function App() {
  return (
    <Layout>
      <Auth />
      <Routes>
        {/* <Route exact path="/" element={< />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
