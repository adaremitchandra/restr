import InvoicePage from "../../components/InvoicePage";

const Invoice = () => {
  let savedInvoice = null;
  let data = null;

  if (typeof window !== "undefined") {
    savedInvoice = window.localStorage.getItem("invoiceData");

    try {
      if (savedInvoice) {
        data = JSON.parse(savedInvoice);
      }
    } catch (_e) {}
  }

  const onInvoiceUpdated = (invoice) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("invoiceData", JSON.stringify(invoice));
    }
  };

  return (
    <section className="bg-orange-50">
      <div className="mx-auto mb-[50px] w-[700px] py-[30px]">
        <h1 className="text-center text-[30px]">React Invoice Generator</h1>
        <InvoicePage data={data} onChange={onInvoiceUpdated} />
      </div>
    </section>
  );
};

export default Invoice;
