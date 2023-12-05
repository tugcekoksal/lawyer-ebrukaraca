import { uzmanlik } from "@/utils/uzmanlikData";
import { useRouter } from "next/router";

const UzmanlikDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const servisId = Number(id);
  const servis = uzmanlik.find((servis) => servis.id === servisId);
  return (
    <section className="bg-white">
      <div
        className="relative w-full h-[300px] bg-cover  bg-center"
        style={{ backgroundImage: `url('/makale/1.jpg')` }}
      ></div>
    </section>
  );
};

export default UzmanlikDetail;
