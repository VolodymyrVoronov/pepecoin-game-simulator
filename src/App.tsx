import { Suspense } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Paths from "const/paths";

import Start from "pages/Start/Start";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path={Paths.Root} element={<Navigate to={Paths.StartPage} />} />
        <Route path={Paths.StartPage} element={<Start />} />
        <Route path={Paths.GamePage} element={<p>Game...</p>} />
      </Routes>
    </Suspense>
  );
};

export default App;
