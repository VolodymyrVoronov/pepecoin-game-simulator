import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Paths from "const/paths";

import Start from "pages/Start/Start";

const Game = lazy(() => import("pages/Game/Game"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path={Paths.Root} element={<Navigate to={Paths.StartPage} />} />
        <Route path={Paths.StartPage} element={<Start />} />
        <Route path={Paths.GamePage} element={<Game />} />
      </Routes>
    </Suspense>
  );
};

export default App;
