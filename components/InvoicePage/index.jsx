import React, { useEffect, useState } from "react";
import Document from "./Document";
import EditableFileImage from "./EditableFileImage";
import EditableInput from "./EditableInput";
import EditableSelect from "./EditableSelect";
import Page from "./Page";
import View from "./View";
import countryList from "../../data/countryList";
import { initialInvoice, initialProductLine } from "../../data/initialData";
import EditableCalendarInput from "./EditableCalendarInput";
import format from "date-fns/format";
import Text from "./Text";
import EditableTextarea from "./EditableTextarea";
import Download from "./DownloadPDF";

const InvoicePage = ({ data, pdfMode, onChange }) => {
  const [invoice, setInvoice] = useState(data ? { ...data } : { ...initialInvoice });
  const [subTotal, setSubTotal] = useState();
  const [saleTax, setSaleTax] = useState();

  const dateFormat = "MMM dd, yyyy";
  const invoiceDate = invoice.invoiceDate !== "" ? new Date(invoice.invoiceDate) : new Date();
  const invoiceDueDate = invoice.invoiceDueDate !== "" ? new Date(invoice.invoiceDueDate) : new Date(invoiceDate.valueOf());

  if (invoice.invoiceDueDate === "") {
    invoiceDueDate.setDate(invoiceDueDate.getDate() + 30);
  }

  const handleChange = (name, value) => {
    if (name !== "productLines") {
      const newInvoice = { ...invoice };
      if (name === "logoWidth" && typeof value === "number") {
        newInvoice[name] = value;
      } else if (name !== "logoWidth" && typeof value === "string") {
        newInvoice[name] = value;
      }
      setInvoice(newInvoice);
    }
  };
  const handleProductLineChange = (index, name, value) => {
    const productLines = invoice.productLines.map((productLine, i) => {
      if (i === index) {
        const newProductLine = { ...productLine };

        if (name === "description") {
          newProductLine[name] = value;
        } else {
          if (value[value.length - 1] === "." || (value[value.length - 1] === "0" && value.includes("."))) {
            newProductLine[name] = value;
          } else {
            const n = parseFloat(value);

            newProductLine[name] = (n ? n : 0).toString();
          }
        }

        return newProductLine;
      }

      return { ...productLine };
    });

    setInvoice({ ...invoice, productLines });
  };

  const calculateAmount = (quantity, rate) => {
    const quantityNumber = parseFloat(quantity);
    const rateNumber = parseFloat(rate);
    const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;

    return amount.toFixed(2);
  };

  const handleAdd = () => {
    const productLines = [...invoice.productLines, { ...initialProductLine }];

    setInvoice({ ...invoice, productLines });
  };

  const handleRemove = (i) => {
    const productLines = invoice.productLines.filter((productLine, index) => index !== i);

    setInvoice({ ...invoice, productLines });
  };

  useEffect(() => {
    if (onChange) {
      onChange(invoice);
    }
  }, [onChange, invoice]);

  useEffect(() => {
    let subTotal = 0;

    invoice.productLines.forEach((productLine) => {
      const quantityNumber = parseFloat(productLine.quantity);
      const rateNumber = parseFloat(productLine.rate);
      const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;

      subTotal += amount;
    });

    setSubTotal(subTotal);
  }, [invoice.productLines]);

  useEffect(() => {
    const match = invoice.taxLabel.match(/(\d+)%/);
    const taxRate = match ? parseFloat(match[1]) : 0;
    const saleTax = subTotal ? (subTotal * taxRate) / 100 : 0;

    setSaleTax(saleTax);
  }, [subTotal, invoice.taxLabel]);

  return (
    <Document pdfMode={pdfMode}>
      <Page className="relative bg-white px-[30px] py-10 shadow-md" pdfMode={pdfMode}>
        {!pdfMode && <Download data={invoice} />}

        <View className="flex" pdfMode={pdfMode}>
          <View className="w-1/2" pdfMode={pdfMode}>
            {/* <EditableFileImage
              className="logo"
              placeholder="Your Logo"
              value={invoice.logo}
              width={invoice.logoWidth}
              pdfMode={pdfMode}
              onChangeImage={(value) => handleChange("logo", value)}
              onChangeWidth={(value) => handleChange("logoWidth", value)}
            /> */}
            <EditableInput className="text-xl font-bold" placeholder="Your Company" value={invoice.companyName} onChange={(value) => handleChange("companyName", value)} pdfMode={pdfMode} />
            <EditableInput placeholder="Your Name" value={invoice.name} onChange={(value) => handleChange("name", value)} pdfMode={pdfMode} />
            <EditableInput placeholder="Company's Address" value={invoice.companyAddress} onChange={(value) => handleChange("companyAddress", value)} pdfMode={pdfMode} />
            <EditableInput placeholder="City, State Zip" value={invoice.companyAddress2} onChange={(value) => handleChange("companyAddress2", value)} pdfMode={pdfMode} />
            <EditableSelect options={countryList} value={invoice.companyCountry} onChange={(value) => handleChange("companyCountry", value)} pdfMode={pdfMode} />
          </View>
          <View className="w-1/2" pdfMode={pdfMode}>
            <EditableInput className="text-right text-[45px] font-bold" placeholder="Invoice" value={invoice.title} onChange={(value) => handleChange("title", value)} pdfMode={pdfMode} />
          </View>
        </View>

        <View className="mt-10 flex" pdfMode={pdfMode}>
          <View className="w-[55%]" pdfMode={pdfMode}>
            <EditableInput className="mb-1 font-bold" value={invoice.billTo} onChange={(value) => handleChange("billTo", value)} pdfMode={pdfMode} />
            <EditableInput placeholder="Your Client's Name" value={invoice.clientName} onChange={(value) => handleChange("clientName", value)} pdfMode={pdfMode} />
            <EditableInput placeholder="Client's Address" value={invoice.clientAddress} onChange={(value) => handleChange("clientAddress", value)} pdfMode={pdfMode} />
            <EditableInput placeholder="City, State Zip" value={invoice.clientAddress2} onChange={(value) => handleChange("clientAddress2", value)} pdfMode={pdfMode} />
            <EditableSelect options={countryList} value={invoice.clientCountry} onChange={(value) => handleChange("clientCountry", value)} pdfMode={pdfMode} />
          </View>
          <View className="w-[45%]" pdfMode={pdfMode}>
            <View className="mb-1 flex" pdfMode={pdfMode}>
              <View className="w-2/5" pdfMode={pdfMode}>
                <EditableInput className="bold" value={invoice.invoiceTitleLabel} onChange={(value) => handleChange("invoiceTitleLabel", value)} pdfMode={pdfMode} />
              </View>
              <View className="w-3/5" pdfMode={pdfMode}>
                <EditableInput placeholder="INV-12" value={invoice.invoiceTitle} onChange={(value) => handleChange("invoiceTitle", value)} pdfMode={pdfMode} />
              </View>
            </View>
            <View className="mb-1 flex" pdfMode={pdfMode}>
              <View className="w-2/5" pdfMode={pdfMode}>
                <EditableInput className="font-bold" value={invoice.invoiceDateLabel} onChange={(value) => handleChange("invoiceDateLabel", value)} pdfMode={pdfMode} />
              </View>
              <View className="w-3/5" pdfMode={pdfMode}>
                <EditableCalendarInput value={format(invoiceDate, dateFormat)} selected={invoiceDate} onChange={(date) => handleChange("invoiceDate", date && !Array.isArray(date) ? format(date, dateFormat) : "")} pdfMode={pdfMode} />
              </View>
            </View>
            <View className="mb-1 flex" pdfMode={pdfMode}>
              <View className="w-2/5" pdfMode={pdfMode}>
                <EditableInput className="font-bold" value={invoice.invoiceDueDateLabel} onChange={(value) => handleChange("invoiceDueDateLabel", value)} pdfMode={pdfMode} />
              </View>
              <View className="w-3/5" pdfMode={pdfMode}>
                <EditableCalendarInput
                  value={format(invoiceDueDate, dateFormat)}
                  selected={invoiceDueDate}
                  onChange={(date) => handleChange("invoiceDueDate", date && !Array.isArray(date) ? format(date, dateFormat) : "")}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Table header */}
        <View className="mt-7 flex bg-black" pdfMode={pdfMode}>
          <View className="w-[48%] px-2 py-1" pdfMode={pdfMode}>
            <EditableInput className="bg-black font-bold text-white" value={invoice.productLineDescription} onChange={(value) => handleChange("productLineDescription", value)} pdfMode={pdfMode} />
          </View>
          <View className="w-[17%] px-2 py-1" pdfMode={pdfMode}>
            <EditableInput className="bg-black text-right font-bold text-white" value={invoice.productLineQuantity} onChange={(value) => handleChange("productLineQuantity", value)} pdfMode={pdfMode} />
          </View>
          <View className="w-[17%] px-2 py-1" pdfMode={pdfMode}>
            <EditableInput className="bg-black text-right font-bold text-white" value={invoice.productLineQuantityRate} onChange={(value) => handleChange("productLineQuantityRate", value)} pdfMode={pdfMode} />
          </View>
          <View className="w-[18%] px-2 py-1" pdfMode={pdfMode}>
            <EditableInput className="bg-black text-right font-bold text-white" value={invoice.productLineQuantityAmount} onChange={(value) => handleChange("productLineQuantityAmount", value)} pdfMode={pdfMode} />
          </View>
        </View>

        {/* Table Content */}

        {invoice.productLines.map((productLine, i) => {
          return pdfMode && productLine.description === "" ? (
            <Text key={i}></Text>
          ) : (
            <View key={i} className="relative flex border-b border-gray-300" pdfMode={pdfMode}>
              <View className="w-[48%] px-2 py-1 pb-[10px]" pdfMode={pdfMode}>
                <EditableTextarea className="text-black" rows={2} placeholder="Enter item name/description" value={productLine.description} onChange={(value) => handleProductLineChange(i, "description", value)} pdfMode={pdfMode} />
              </View>
              <View className="w-[17%] px-2 py-1 pb-[10px]" pdfMode={pdfMode}>
                <EditableInput className="text-right text-black" value={productLine.quantity} onChange={(value) => handleProductLineChange(i, "quantity", value)} pdfMode={pdfMode} />
              </View>
              <View className="w-[17%] px-2 py-1 pb-[10px]" pdfMode={pdfMode}>
                <EditableInput className="text-right text-black" value={productLine.rate} onChange={(value) => handleProductLineChange(i, "rate", value)} pdfMode={pdfMode} />
              </View>
              <View className="w-[18%] px-2 py-1 pb-[10px]" pdfMode={pdfMode}>
                <Text className="text-right text-black" pdfMode={pdfMode}>
                  {calculateAmount(productLine.quantity, productLine.rate)}
                </Text>
              </View>
              {!pdfMode && (
                <button className="absolute top-4 -right-5 flex p-0 opacity-0 transition-all hover:opacity-100" aria-label="Remove Row" title="Remove Row" onClick={() => handleRemove(i)}>
                  <span
                    className="relative inline-block h-4 w-4 rounded-[50%] bg-red-500 
                    before:absolute before:left-[7px] before:top-[3px] before:h-[10px] before:w-[2px] before:rotate-45 before:bg-white before:content-[''] after:absolute after:left-[7px] after:top-[3px] after:h-[10px] after:w-[2px] after:-rotate-45 after:bg-white after:content-['']"
                  ></span>
                </button>
              )}
            </View>
          );
        })}

        {/* footer */}
        <View className="flex" pdfMode={pdfMode}>
          <View className="mt-[10px] w-1/2" pdfMode={pdfMode}>
            {!pdfMode && (
              <button className="flex items-center text-blue-400 hover:underline focus:underline" onClick={handleAdd}>
                <span className="relative mr-1 inline-block h-4 w-4 items-center rounded-[50%] bg-green-600 before:absolute  before:left-[7px] before:top-[3px] before:h-[10px] before:w-[2px] before:bg-white  before:content-[''] after:absolute after:left-[7px] after:top-[3px] after:h-[10px] after:w-[2px] after:-rotate-90 after:bg-white after:content-['']"></span>
                Add Line Item
              </button>
            )}
          </View>
          <View className="mt-5 w-1/2" pdfMode={pdfMode}>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-1/2 p-[5px]" pdfMode={pdfMode}>
                <EditableInput value={invoice.subTotalLabel} onChange={(value) => handleChange("subTotalLabel", value)} pdfMode={pdfMode} />
              </View>
              <View className="w-1/2 p-[5px]" pdfMode={pdfMode}>
                <Text className="text-right font-bold text-black" pdfMode={pdfMode}>
                  {subTotal?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-1/2 p-[5px]" pdfMode={pdfMode}>
                <EditableInput value={invoice.taxLabel} onChange={(value) => handleChange("taxLabel", value)} pdfMode={pdfMode} />
              </View>
              <View className="w-1/2 p-[5px]" pdfMode={pdfMode}>
                <Text className="text text-right font-bold" pdfMode={pdfMode}>
                  {saleTax?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex bg-gray-300 p-[5px]" pdfMode={pdfMode}>
              <View className="w-1/2 p-[5px]" pdfMode={pdfMode}>
                <EditableInput className="bg-gray-300 font-bold" value={invoice.totalLabel} onChange={(value) => handleChange("totalLabel", value)} pdfMode={pdfMode} />
              </View>
              <View className="flex w-1/2 p-[5px]" pdfMode={pdfMode}>
                <EditableInput className="ml-[30px] bg-gray-300 text-right font-bold text-black" value={invoice.currency} onChange={(value) => handleChange("currency", value)} pdfMode={pdfMode} />
                <Text className="right bold dark w-auto" pdfMode={pdfMode}>
                  {(typeof subTotal !== "undefined" && typeof saleTax !== "undefined" ? subTotal + saleTax : 0).toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-5" pdfMode={pdfMode}>
          <EditableInput className="w-full font-bold" value={invoice.notesLabel} onChange={(value) => handleChange("notesLabel", value)} pdfMode={pdfMode} />
          <EditableTextarea className="w-full" rows={2} value={invoice.notes} onChange={(value) => handleChange("notes", value)} pdfMode={pdfMode} />
        </View>

        <View className="mt-5" pdfMode={pdfMode}>
          <EditableInput className="w-full font-bold" value={invoice.termLabel} onChange={(value) => handleChange("termLabel", value)} pdfMode={pdfMode} />
          <EditableTextarea className="w-full" rows={2} value={invoice.term} onChange={(value) => handleChange("term", value)} pdfMode={pdfMode} />
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePage;
