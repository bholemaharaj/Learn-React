import { ActionButton } from "./ActionButton";

export const NewsLetter = () => {
    const handleSubscribe = () => {
        alert("Thank you for subscribing to our newsletter!");
    };
    return (
        <div>
            <h1>Subscribe to Our Newsletter</h1>
            <ActionButton text="Subscribe" onClick={handleSubscribe}/>
        </div>
    );
}