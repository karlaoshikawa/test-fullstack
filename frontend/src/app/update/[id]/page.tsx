import CustomerUpdate from "@/components/CustomerUpdate";
import Header from "@/components/Header";
import InfosPage from "@/components/InfosPage";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Header />
      <InfosPage />
      <CustomerUpdate id={params.id} />;
    </div>
  );
}
