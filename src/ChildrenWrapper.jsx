
import { UserCard } from '../UserCard';

export const ChildrenWrapper = ({ children }) => {
	return (
		<>
			<div>
				<UserCard id="JM1" name="John" age={30} street="123 Main St" city="Any town" state="CA" zip="12345" />
				<div>
					{children}
				</div>
			</div>
		</>
	);
};