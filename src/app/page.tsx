import instanceApiAxios from "@/api/services";
import dynamic from "next/dynamic";

const ModuleMain = dynamic(() => import("@/modules/main/page"), {
  ssr: false,
});

async function getData() {
  const res = await instanceApiAxios.get(`/planets?page=1`);
  return res.data.results;
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <ModuleMain firstData={data} />
    </>
  );
}
