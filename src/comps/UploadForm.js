import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const changeHandler = (e) => {
		const types = ['image/png', 'image/jpeg'];

		let selected = e.target.files[0];
		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError('');
		} else {
			setFile(null);
			setError('Please select an image file (png or jpeg)');
		}
	};

	return (
		<form>
			<label>
				<input type='file' name='' id='' onChange={changeHandler} />
				<span>+</span>
			</label>

			<div className='output'>
				{error && <div className='error'> {error}</div>}
				{file && <div className='error'> {file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
}

export default UploadForm;
