"use client";
import { getUrl } from "@/lib/get-url";
import { ClassData, FormValue } from "@/lib/type";
import axios from "axios";
import { BookOpen, Wallet } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import CountdownTimer from "../components/countdown-timer";

interface RegisterConfirmProps {
  classData: ClassData[];
  form: FormValue;
  className: string;
}

interface Invoice {
  invoice_id: string;
  qPay_shortUrl: string;
  qr_image: string;
  qr_text: string;
  urls: Array<{
    name: string;
    description: string;
    logo: string;
    link: string;
  }>;
}

export default function RegisterConfirm({
  classData,
  form,
}: RegisterConfirmProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<
    "pending" | "success" | "failed" | null
  >(null);
  const [expire, setExpire] = useState<string | null>(null);
  const [isRegistrationConfirmed, setIsRegistrationConfirmed] = useState(false);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const selectedClass = classData.find(
    (type) => type._id === form.trainingType
  );

  const sendCreateInvoiceRequest = async () => {
    setIsLoading(true);
    await register();
    setIsLoading(false);
  };

  const register = async () => {
    try {
      // const province = provinceData.find((type) => type._id === form.location);
      const body = { ...form };
      const response = await axios.post(`${getUrl()}/register`, body);
      if (
        response.status === 201 &&
        response?.data?.data?.invoice?.data !== null
      ) {
        setExpire(response.data.data.update.createdAt);
        setInvoice(response.data.data.invoice.data);
        setPaymentStatus("pending");
        setShowPayment(true);
      } else {
        const isConfirm = confirm(
          "Төрбөрийн нэхэмжлэл үүсгэхэд алдаа гарлаа!. Дахин эхлэх үү?"
        );
        if (isConfirm) {
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("Алдаа:", error);
    }
  };

  const checkInvoice = async (invoice_id: string) => {
    try {
      const response = await axios.post(
        `${getUrl()}/payment/check/invoice/${invoice_id}`,
        {
          trainingType: selectedClass?.name,
          location: form.location,
          schoolName: form.schoolName,
          teamName: form.teamName,
          firstNames: form.firstNames,
          lastNames: form.lastNames,
          teacherName: form.teacherName,
          ages: form.ages,
          contactPhone: form.contactPhone,
        }
      );
      return response.data.result.data.rows[0];
    } catch (error) {
      console.error("Invoice шалгахад алдаа гарлаа:", error);
      return null;
    }
  };

  const handlePaymentCheck = async () => {
    if (!invoice?.invoice_id) return;

    setIsLoading(true);
    const invoiceData = await checkInvoice(invoice.invoice_id);
    setIsLoading(false);

    if (invoiceData && invoiceData.payment_status === "PAID") {
      setPaymentStatus("success");
      setIsRegistrationConfirmed(true);
    } else {
      setPaymentStatus("failed");
      alert("Төлбөр төлөгдөөгүй байна. Дахин шалгана уу.");
    }
  };

  // Таймерын хугацаа дуусахыг харьцах callback
  const handleTimerExpiration = () => {
    setIsTimerExpired(true);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-t-xl py-4 px-6 shadow-md">
          <h1 className="text-2xl font-bold text-center">
            Бүртгэл баталгаажуулах
          </h1>
        </div>
        <div className="bg-white p-6 rounded-b-2xl shadow-md border border-gray-100 space-y-5">
          {isRegistrationConfirmed && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center">
              <p className="font-semibold text-lg">Таны бүртгэл баталгаажлаа</p>
            </div>
          )}
          {selectedClass && (
            <div className="space-y-5">
              {/* Сонгосон сургалт */}
              <div className="flex items-start gap-3 text-sm">
                <BookOpen className="text-green-600 w-5 h-5 mt-0.5" />
                <div>
                  <p className="text-gray-500 font-medium mb-1">
                    Оролцох тэмцээний нэр
                  </p>
                  <p className="text-green-600 font-semibold text-base">
                    {selectedClass.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-green-50 shadow-sm">
                <Wallet className="text-green-600 w-6 h-6" />
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Нэг хүүхдийн тэмцээний хураамж
                  </p>
                  <span className="block text-lg font-bold text-green-700">
                    35,000₮
                  </span>
                </div>
              </div>
            </div>
          )}
          {showPayment && !isRegistrationConfirmed && (
            <div className="">
              <label className="font-bold block mb-2">Төлбөр төлөх</label>
              <div className="flex flex-wrap space-y-1 justify-between justify-items-center bg-white border border-gray-200 p-3 rounded-lg mb-4">
                <p className="flex text-sm font-medium items-center">
                  Төлбөрийн статус:
                  <span
                    className={`font-semibold ml-2 ${
                      paymentStatus === "success"
                        ? "text-green-600"
                        : paymentStatus === "failed"
                        ? "text-red-600"
                        : "text-yellow-500"
                    }`}
                  >
                    {paymentStatus === "pending"
                      ? "Хүлээгдэж байна"
                      : paymentStatus === "success"
                      ? "Амжилттай"
                      : paymentStatus === "failed"
                      ? "Амжилтгүй"
                      : "Хүлээгдэж байна"}
                  </span>
                </p>
                {expire && (
                  <CountdownTimer
                    endDate={expire}
                    onTimerExpired={handleTimerExpiration}
                  />
                )}
              </div>
              <div className="hidden sm:flex justify-center w-full">
                {invoice?.qr_image && !isTimerExpired && (
                  <div className="hidden sm:block justify-center w-1/3">
                    <Image
                      src={`data:image/png;base64,${invoice.qr_image}`}
                      className="w-full h-full"
                      width={800}
                      height={800}
                      alt="qpay"
                    />
                  </div>
                )}
              </div>
              <div className="max-w-xl mx-auto block md:hidden">
                <div className="bg-gray-100">
                  {form.trainingType && (
                    <div className="space-y-4 bg-white p-4 rounded-md">
                      <div>
                        <h3 className="font-bold mb-3 text-sm">
                          Банкны аппаа сонгоно уу
                        </h3>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {invoice?.urls.map((bank) => (
                            <button
                              key={bank?.name}
                              className={`p-2 rounded-lg flex items-center justify-center border ${
                                selectedBank === bank.name
                                  ? "border-green-500 bg-green-50"
                                  : "border-gray-200 bg-white"
                              } hover:border-green-500 transition-colors`}
                              onClick={() => {
                                setSelectedBank(bank.name);
                                window.location.href = bank.link;
                              }}
                            >
                              <div className="w-10 h-10 relative">
                                <Image
                                  src={bank.logo}
                                  alt={bank.name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                type="button"
                disabled={isLoading}
                onClick={handlePaymentCheck}
                className={`w-full p-2 mt-6 rounded bg-gradient-to-r from-blue-500 to-emerald-600 text-white ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-green-600"
                }`}
              >
                {isLoading ? "Шалгаж байна..." : "Төлбөр шалгах"}
              </button>
            </div>
          )}
          {!showPayment && (
            <button
              type="button"
              disabled={isLoading}
              onClick={sendCreateInvoiceRequest}
              className={`w-full p-2 rounded bg-gradient-to-r from-blue-500 to-emerald-600 text-white ${
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-green-600"
              }`}
            >
              {isLoading ? "Уншиж байна..." : "Төлбөр төлөх"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
