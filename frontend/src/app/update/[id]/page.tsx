import CustomerUpdate from "@/components/CustomerUpdate";
import Header from "@/components/Header";
import InfosPage from "@/components/InfosPage";
import style from "../../../style/pages.module.scss";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className={style.container}>
      <Header />
      <InfosPage />
      <CustomerUpdate id={params.id} />;
    </div>
  );
}
