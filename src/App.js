import { MainLayout } from "./components/MainLayout";
import { Providers } from "./providers";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Providers>
      <MainLayout>
        <AppRoutes/>
      </MainLayout>
    </Providers>
  );
}

export default App;
