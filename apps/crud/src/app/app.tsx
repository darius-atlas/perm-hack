// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import {Routes, Route} from "react-router-dom"
// eslint-disable-next-line @nx/enforce-module-boundaries
import Main from "../../../../page/src/lib//main/main"
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Navbar} from "@perm-hack/ui";
import {Statistics} from "@perm-hack/page";

export function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Statistics/>} path="/statistics"/>
      </Routes>
    </main>
  );
}

export default App;
