import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts';

function App() {
   return (
      <Router>
         <div className="app">
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
