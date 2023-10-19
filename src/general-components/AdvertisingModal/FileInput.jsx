import React from "react";

const FileInput = ({ value, onChange }) => (
	<div>
		{/*{value && (<div>Selected files: {value.name}</div>)}*/}

		<label className={"yellow-but"}>
			{value ? value.name : '*Загрузить изображение'}
			<input
				multiple={false}
				style={{ display: "none" }}
				type="file"
				onChange={e => onChange([...e.target.files])}
			/>
		</label>
	</div>
);

export default FileInput;