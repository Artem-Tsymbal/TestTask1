import { DefaultLayout } from './components/layouts/default';
import { RootStoreProvider } from './stores/context';
import RootStoreInstance from './stores/rootStore';
import './styles/index.scss';

function App() {
	return (
		<RootStoreProvider value={RootStoreInstance}>
			<DefaultLayout />
		</RootStoreProvider>
	);
}

export default App;
