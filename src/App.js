import { MainLayout } from "./components/MainLayout";
import { LogIn } from "./pages/LogIn";
import { Registration } from "./pages/Registration/Registration";

function App() {
  return (
    <MainLayout>
      <Registration />
      <LogIn />
    </MainLayout>
  );
}

export default App;