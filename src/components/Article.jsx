function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const readLabel = minutes
    ? `${minutes < 30 ? "☕️".repeat(Math.ceil(minutes / 5)) : "🍱".repeat(Math.ceil(minutes / 10))} ${minutes} min read`
    : null;

  return (
    <article>
      <small>
        {date}
        {readLabel && <span className="read-time">{readLabel}</span>}
      </small>
      <h3>{title}</h3>
      <p>{preview}</p>
    </article>
  );
}

export default Article;