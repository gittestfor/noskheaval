import React, { useState } from 'react';

// Components
import Header from './components/Header/Header';
import TopHeader from './components/TopHeader/TopHeader';
import BottomHeader from './components/BottomHeader/BottomHeader';
import TableComp from './components/TableComp/TableComp';

function App() {
	const [ tableSize, setTableSize ] = useState('middle');
	const handleTableSize = (size) => {
		setTableSize(size);
	};
	return (
		<div>
			<Header />
			<div className="mt-3 mb-3">
				<TopHeader handleTableSize={handleTableSize} />
			</div>

			<BottomHeader />
			<div className="ml-2 mr-2">
				<TableComp tableSize={tableSize} />
			</div>
		</div>
	);
}

export default App;
