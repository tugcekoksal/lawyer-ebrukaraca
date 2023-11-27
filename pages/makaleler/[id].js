import React from "react";
import { articles } from "@/utils/articlesData";
import { useRouter } from "next/router";
import { Translation } from "../../Translation";
import Link from "next/link";

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const articleId = Number(id);
  const articleIndex = articles.findIndex(
    (article) => article.id === articleId
  );
  const article = articles[articleIndex];
  const nextArticle =
    articles.length > articleIndex + 1 ? articles[articleIndex + 1] : null;

  return (
    <div className="bg-white">
      {article ? (
        <article>
          <div className="relative w-full h-[300px] bg-cover bg-fixed bg-center bg-[url('/makale.jpg')]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="absolute left-16 bottom-10 text-white font-bold text-3xl z-10">
              <Translation textKey="makale" />
            </h1>
          </div>
          <div className="container mx-auto px-4 py-10">
            <header className="mb-8">
              <h1 className="text-4xl font-bold py-4">{article.title}</h1>
              <p className="text-md text-gray-500">{article.byline}</p>
            </header>
            <section className="prose max-w-none leading-relaxed text-xl mb-10">
              {article.content}
            </section>
            <footer className="flex justify-between items-center flex-wrap gap-4">
              <button
                onClick={() => router.back()}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Geri Dön
              </button>
              {nextArticle && (
                <a
                  href={`/articles/${nextArticle.id}`}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Next Article
                </a>
              )}
            </footer>
          </div>
        </article>
      ) : (
        <p className="text-center py-10">No article found</p>
      )}
    </div>
  );
};

export default ArticleDetail;
