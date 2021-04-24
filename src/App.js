import ExpPanel from './ExpPanel';
import './App.css';
import { Box } from '@material-ui/core';
import { Fragment } from 'react';

function App() {
	return (
		<Fragment>
			<h1 className="App">Happy Birthday My Love</h1>
			<Box className="boxpadding">
				<ExpPanel heading={'SnapChatter Billlu'} src={'images/snaps'} />
				<ExpPanel heading={'Cuttiee Billlu'} src={'images/cute'} />
				<ExpPanel heading={'Happy Billlu'} src={'images/happy'} />
				<ExpPanel heading={'Together'} src={'images/together'} />
			</Box>
		</Fragment>
	);
}

export default App;
