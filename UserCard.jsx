import { UserInfo } from "./UserInfo";

export const UserCard = ({ id, ...rest }) => {
	return (
		<div>
			<div>
				<h2>User Details for {id}</h2>
				<UserInfo {...rest} />
			</div>
		</div>
	);
};
