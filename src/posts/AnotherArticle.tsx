
import Markdown from 'markdown-to-jsx'; 

const AnotherArticle = () => {
    return (
        <div>
            <Markdown>
                {"# Another article\n\n## Wow you're really talented!\n\nThank you sir\n"}
            </Markdown>
        </div>             
    )
}

export default AnotherArticle