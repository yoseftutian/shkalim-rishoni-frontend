import { useEffect, useState } from "react";
import { getNews } from "../../utils/apiCalls";
import { useLoadingContext } from "../../contexts/loadingContext";
import { CircularProgress, Pagination } from "@mui/material";
import { nanoid } from "nanoid";
import "./newsList.css";

export default function NewsList() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const { loading, setLoading } = useLoadingContext();
  useEffect(() => {
    async function getAllNews() {
      try {
        setLoading(true);
        const response = await getNews();
        setArticles(response.articles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getAllNews();
  }, []);
  return (
    <div className="row article-list">
      {loading ? (
        <CircularProgress />
      ) : (
        articles
          .slice((page - 1) * 10, (page - 1) * 10 + 10)
          .map((article) => <ArticleItem key={nanoid()} article={article} />)
      )}
      <Pagination
        count={10}
        color="secondary"
        page={page}
        onChange={(e, v) => setPage(v)}
      />
    </div>
  );
}

function ArticleItem({ article }) {
  return (
    <a href={article.url} className="column article-item">
      <h2>{article.title}</h2>
      <img src={article.urlToImage} />
      <p>{article.publishedAt}</p>
    </a>
  );
}
