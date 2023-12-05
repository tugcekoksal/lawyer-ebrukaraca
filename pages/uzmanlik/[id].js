import { uzmanlik } from "@/utils/uzmanlikData";
import { useRouter } from "next/router";

// const UzmanlikDetail = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const servisId = Number(id);
//   const servis = uzmanlik.find((servis) => servis.id === servisId);
//   return (
//     <section className="bg-white">
//       <div
//         className="relative w-full h-[300px] bg-cover  bg-center"
//         style={{ backgroundImage: `url('/makale/1.jpg')` }}
//       ></div>
//     </section>
//   );
// };

// Ana bileşenimizi ve alt bileşenlerimizi tanımlayalım.
const UzmanlikDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const servisId = Number(id);
  const servis = uzmanlik.find((servis) => servis.id === servisId);
  if (!servis) {
    // Handle the case where servis is not found
    // This could be a loading state, error message, or redirect
    return <div>Loading...</div>; // or any other fallback UI
  }
  return (
    <section>
      <div
        className="relative w-full h-[300px] bg-cover  bg-center"
        style={{ backgroundImage: `url('/makale/1.jpg')` }}
      ></div>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold uppercase mb-10">
              {servis.title}
            </h2>
            {servis.content?.map((section, index) => (
              <div key={index} className="mb-10">
                <Section content={section.details} />
              </div>
            ))}
          </div>
          <div>
            <ListSection
              title="Hizmetlerimiz"
              items={uzmanlik.map((servis) => servis.title)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Section = ({ content }) => {
  return (
    <div className="mb-4">
      <p className="text-lg">{content}</p>
    </div>
  );
};

const ListSection = ({ title, items }) => {
  return (
    <div className="flex items-center flex-col">
      <h3 className="text-lg font-bold mb-10 ">{title}</h3>
      <ul className="list-none space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="border-l-4 pl-2 border-gray-400 leading-loose"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UzmanlikDetail;
