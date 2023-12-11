import PropTypes from "prop-types";

const Checkbox = ({ label, id, value }) => {
	return (
		<div className="flex gap-2">
			<div className="w-5 h-5 grid place-content-center rounded-md border-2 overflow-hidden">
				<input
					className="w-5 h-5 border-none outline-none"
					type="checkbox"
					value={value}
					id={id}
					name={id}
				/>
			</div>
			<label
				className="inline-block hover:cursor-pointer"
				htmlFor={id}
				name={id}
			>
				{label}
			</label>
		</div>
	);
};

Checkbox.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.string,
};

export default Checkbox;
