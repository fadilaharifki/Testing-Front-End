// import { useRouter } from "next/navigation";

import instanceApiAxios from "@/api/services";
import ModuleDetailPlanet from "@/modules/planets/detailPlanets";

interface Params {
  params: { id: string };
}

async function getData(id: string) {
  const responseCategory = await instanceApiAxios.get(`/planets/${id}`);
  if (responseCategory.status === 200) {
    return responseCategory.data;
  }
}

const DetailPlanetsPage = async ({ params }: Params) => {
  const data = await getData(params.id);

  return <ModuleDetailPlanet data={data} />;
};

export default DetailPlanetsPage;
