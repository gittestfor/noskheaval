import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ConfigProvider } from 'antd';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import './index.css';

ReactDOM.render(
	<ConfigProvider direction="rtl">
		<App />
	</ConfigProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
