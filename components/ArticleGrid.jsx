import { articles } from "@/utils/articlesData";

const ArticleCard = ({ title, summary, imageUrl, id }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-2">
    <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{summary}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <a
        href={`/makaleler/${id}`}
        className="inline-block text-xs font-semibold text-gray-600 uppercase hover:text-blue-800 mr-2 mb-2 "
      >
        Devamını Oku &raquo;
      </a>
    </div>
  </div>
);

const ArticlesGrid = () => {
  return (
    <div className="container   md:mx-[7rem] py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesGrid;
