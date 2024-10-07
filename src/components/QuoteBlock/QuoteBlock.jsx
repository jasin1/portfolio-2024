import "./QuoteBlock.css";

function QuoteBlock({ content }) {
  return <blockquote className="quote-large">{content}</blockquote>;
}

export default QuoteBlock;
