import React from "react";
import { articles } from "@/utils/articlesData"; // Adjust the path as necessary
import { useRouter } from "next/router";
import { Translation } from "../../Translation";
import Link from "next/link";

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const articleId = Number(id);
  const article = articles.find((article) => article.id === articleId);
  const articleIndex = articles.findIndex(
    (article) => article.id === articleId
  );
  const nextArticle =
    articles.length > articleIndex + 1 ? articles[articleIndex + 1] : null;

  return (
    <div className="bg-white">
      {article ? (
        <article>
          <div
            className="relative w-full h-[300px] bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url('${article.imageUrl}')` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* <h1 className="absolute left-16 bottom-10 text-white font-bold text-3xl z-10">
              {article.title}
            </h1> */}
          </div>
          <div className="container mx-[7rem] px-[10rem] py-10">
            <header className="mb-8">
              <h1 className="text-4xl font-bold py-4">{article.title}</h1>
              <p className="text-md text-gray-500">{article.summary}</p>
            </header>
            <section className="prose max-w-none leading-relaxed text-xl mb-10">
              {article.content?.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">{section.section}</h2>
                  <p>{section.details}</p>
                  {section.subsections &&
                    section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="mb-6">
                        <h3 className="text-xl font-bold mb-2">
                          {subsection.title}
                        </h3>
                        <p>{subsection.details}</p>
                      </div>
                    ))}
                </div>
              ))}
            </section>
            <footer className="flex justify-between items-center flex-wrap gap-4">
              <button
                onClick={() => router.back()}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                <Translation textKey="geridon" />
              </button>
              {nextArticle && (
                <Link href={`/makaleler/${nextArticle.id}`} legacyBehavior>
                  <a className="bg-[#22161e] hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
                    <Translation textKey="sonraki" />
                  </a>
                </Link>
              )}
            </footer>
          </div>
        </article>
      ) : (
        <p className="text-center py-10">
          <Translation textKey="no_article_found" />
        </p>
      )}
    </div>
  );
};

export default ArticleDetail;
