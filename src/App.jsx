import { Home, Portfolio } from './components/pages';
import { Layout } from "./components/ui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";

// Add routes as needed
function App() {
  return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
				</Routes>
			</Layout>
		</BrowserRouter>
  );
}

export default App;
