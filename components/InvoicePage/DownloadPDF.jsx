/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePage from "./index";

const Download = ({ data }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);

    const timeout = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [data]);

  return (
    <div className={"fixed top-[100px] ml-[-110px] h-10 w-10 bg-red-100 transition-all" + (!show ? "opacity-30" : "")} title="Save PDF">
      {show && (
        <PDFDownloadLink
          className="absolute top-0 left-0 block h-full w-full"
          document={<InvoicePage pdfMode={true} data={data} />}
          fileName={`${data.invoiceTitle ? data.invoiceTitle.toLowerCase() : "invoice"}.pdf`}
          aria-label="Save PDF"
        ></PDFDownloadLink>
      )}
    </div>
  );
};

export default Download;
