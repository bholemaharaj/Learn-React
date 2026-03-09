import { ActionButton } from "./ActionButton";

export const Contact = () => {
    const handleSendMessage = () =>{
        alert("Your message has been sent!");
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <ActionButton text="Send Message" onClick={handleSendMessage}/>
        </div>
    );
}