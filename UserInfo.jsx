export const UserInfo = ({ name, age, street, city, state, zip }) => {
	return (
		<div>
			<h3>{name}</h3>
			<p>Age: {age}</p>
			<p>Address: {street}, {city}, {state} {zip}</p>
		</div>
	);
}