import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';

function App() {
   return (
      <Router>
         <div className="app">
            <Link to="/">Home</Link>
            <Link to="/following">Following</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/search">Search</Link>

            <Routes>
               {publicRoutes.map((route, index) => {
                  const Page = route.component;
                  let Layout = DefaultLayout; //mặc định Layout = DefaultLayout

                  if (route.layout) {
                     //nếu có layout => Layout = layout
                     Layout = route.layout;
                  } else if (route.layout === null) {
                     //nếu layout = null => Layout = Fragment
                     Layout = Fragment;
                  }

                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout>
                              <Page /> {/*{children} */}
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
