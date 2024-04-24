// import React from "react";
// import { articles } from "@/utils/articlesData"; // Adjust the path as necessary
// import { useRouter } from "next/router";
// import { Translation } from "../../Translation";
// import Link from "next/link";
// import SEO from "@/components/SEO";

// const ArticleDetail = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const articleId = Number(id);
//   const article = articles.find((article) => article.id === articleId);
//   const articleIndex = articles.findIndex(
//     (article) => article.id === articleId
//   );
//   const nextArticle =
//     articles.length > articleIndex + 1 ? articles[articleIndex + 1] : null;

//   return (
//     <div className="bg-white">
//       {article ? (
//         <article>
//           <SEO
//         title="Uzmanlık Alanlarımız - Ebru Karaca Hukuk ve Danışmanlık"
//         description={`${article.title}`}
//         ogImage="/uzmanlik.jpg"
//         ogUrl="http://www.ebrukaraca.av.tr/uzmanlik"
//       />
//           <div
//             className="relative w-full h-[300px] bg-cover  bg-center"
//             style={{ backgroundImage: `url('${article.imageUrl}')` }}
//           >
//             <div className="absolute inset-0 bg-black opacity-50"></div>
//           </div>
//           <div className="container mx-0 md:mx-[7rem] px-6 md:px-[10rem] py-10">
//             <header className="mb-8">
//               <h1 className="text-4xl font-bold py-4">{article.title}</h1>
//               <p className="text-md text-gray-500">{article.summary}</p>
//             </header>
//             <section className="prose max-w-none leading-relaxed text-xl mb-10">
//               {article.content?.map((section, index) => (
//                 <div key={index} className="mb-10">
//                   <h2 className="text-2xl font-bold mb-4">{section.section}</h2>
//                   <p>{section.details}</p>
//                   {section.subsections &&
//                     section.subsections.map((subsection, subIndex) => (
//                       <div key={subIndex} className="mb-6">
//                         <h3 className="text-xl font-bold mb-2">
//                           {subsection.title}
//                         </h3>
//                         <p>{subsection.details}</p>
//                       </div>
//                     ))}
//                 </div>
//               ))}
//             </section>
//             <footer className="flex justify-between items-center flex-wrap gap-4">
//               <button
//                 onClick={() => router.back()}
//                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
//               >
//                 <Translation textKey="geridon" />
//               </button>
//               {nextArticle && (
//                 <Link href={`/makaleler/${nextArticle.id}`} legacyBehavior>
//                   <a className="bg-[#22161e] hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
//                     <Translation textKey="sonraki" />
//                   </a>
//                 </Link>
//               )}
//             </footer>
//           </div>
//         </article>
//       ) : (
//         <p className="text-center py-10">
//           <Translation textKey="no_article_found" />
//         </p>
//       )}
//     </div>
//   );
// };

// export default ArticleDetail;
import React from "react"
import { articles } from "@/utils/articlesData" // Adjust the path as necessary
import { useRouter } from "next/router"
import { Translation } from "../../Translation"
import Link from "next/link"
import SEO from "@/components/SEO"

const ArticleDetail = ({ article }) => {
  const router = useRouter()

  if (!article) {
    return (
      <div className="bg-white">
        <p className="text-center py-10">
          <Translation textKey="no_article_found" />
        </p>
      </div>
    )
  }

  const nextArticleIndex = articles.findIndex((a) => a.id === article.id) + 1
  const nextArticle =
    nextArticleIndex < articles.length ? articles[nextArticleIndex] : null

  return (
    <div className="bg-white">
      <article>
        <SEO
          title={`Uzmanlık Alanlarımız - Ebru Karaca Hukuk ve Danışmanlık | ${article.title}`}
          description={article.summary}
          ogImage={article.imageUrl}
          ogUrl={`http://www.ebrukaraca.av.tr/uzmanlik/${article.id}`}
        />
        <div
          className="relative w-full h-[300px] bg-cover  bg-center "
          style={{ backgroundImage: `url('${article.imageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-0 md:mx-[7rem] px-6 md:px-[10rem] py-10 max-w-6xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold py-4">{article.title}</h1>
            <p className="text-md text-gray-500">{article.summary}</p>
          </header>
          <section className="prose leading-relaxed text-xl mb-10 ">
            {article.content?.map((section, index) => (
              <div key={index} className="mb-10 ">
                <h2 className="text-2xl font-[600]  mb-4">{section.section}</h2>
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
              // <Link href={`/makaleler/${nextArticle.id}`} passHref>
              //   <a className="bg-[#22161e] hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
              //     <Translation textKey="sonraki" />
              //   </a>
              // </Link>
              <div className="bg-[#22161e] hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
                <Link href={`/makaleler/${nextArticle.id}`} legacyBehavior>
                  <div>
                    <Translation textKey="sonraki" />
                  </div>
                </Link>
              </div>
            )}
          </footer>
        </div>
      </article>
    </div>
  )
}

export default ArticleDetail

export async function getServerSideProps({ params }) {
  const articleId = Number(params.id)
  const article = articles.find((article) => article.id === articleId)

  return {
    props: {
      article,
    },
  }
}
