export const Greetings = ({ name = "Guest", greeting = "Hello" }) => {
	return (
	<div>
		{greeting} {name}!
	</div>
  );
}