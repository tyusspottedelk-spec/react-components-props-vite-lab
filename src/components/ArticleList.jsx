import Article from "./Article";

function ArticleList({ posts = [] }) {
  return (
    <main aria-label="Recent posts">
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;