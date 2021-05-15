import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Modal from './comps/Modal';
// import useSignIn from './hooks/useSignIn';

function App() {
	const [selectedImg, setSelectedImg] = useState(null);
	const [user, setUser] = useState(null);

	return (
		<div className='App'>
			<Title />

			{user === null ? (
				<div>
					<h1>Please login to see the hottest picture now</h1>
				</div>
			) : (
				<div>
					<UploadForm /> <ImageGrid setSelectedImg={setSelectedImg} />
				</div>
			)}

			{selectedImg && (
				<Modal
					selectedImg={selectedImg}
					setSelectedImg={setSelectedImg}
				/>
			)}
		</div>
	);
}

export default App;
