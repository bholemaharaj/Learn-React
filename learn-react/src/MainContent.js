
/**
 * Returns an <div> element that contains reasons why I'm excited
 * to learn React. The component is a simple ordered list with
 * two items.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export function MainContent() {
    return (
        <div className="mainContent">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                    if I know React</li>
            </ol>
        </div>
    );
}
