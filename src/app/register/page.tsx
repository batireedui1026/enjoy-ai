"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUrl } from "../../lib/get-url";
import Image from "next/image";
import { ClassData, Province } from "../../lib/type";
import RegisterConfirm from "../../components/registerConfirm";

export default function RegistrationForm() {
  const [next, setNext] = useState(false);
  const [classData, setClassData] = useState<ClassData[]>([]);
  const [provinceData, setProvinceData] = useState<Province[]>([]);
  const [form, setForm] = useState({
    location: "",
    trainingType: "",
    schoolName: "",
    teamName: "",
    firstNames: [] as string[],
    lastNames: [] as string[],
    teacherName: "",
    ages: "",
    employmentStatus: "",
    contactPhone: "",
    paymentStatus: "unpaid",
  });
  const [formErrorState, setFormErrorState] = useState({
    location: false,
    trainingType: false,
    schoolName: false,
    teamName: false,
    firstNames: [] as boolean[],
    lastNames: [] as boolean[],
    teacherName: false,
    ages: false,
    employmentStatus: false,
    contactPhone: false,
    paymentStatus: false,
    agreedToTerms: false,
  });

  const getProvince = async () => {
    try {
      const response = await axios.get(`${getUrl()}/province`);
      if (response.status === 200) {
        setProvinceData(response.data?.location || []);
      }
    } catch (error) {
      console.error("Алдаа:", error);
    }
  };

  const getClass = async () => {
    try {
      const response = await axios.get(`${getUrl()}/lesson`);
      if (response.status === 200) {
        setClassData(response.data?.subjects || []);
      }
    } catch (error) {
      console.error("Алдаа:", error);
    }
  };

  const handleCreateInvoice = () => {
    const errors = { ...formErrorState };

    if (form.location === "") errors.location = true;
    if (form.trainingType === "") errors.trainingType = true;
    if (form.schoolName === "") errors.schoolName = true;
    if (form.teamName === "") errors.teamName = true;
    if (form.ages === "") errors.ages = true;
    if (form.contactPhone === "" || form.contactPhone.length !== 8)
      errors.contactPhone = true;
    if (form.teacherName === "") errors.teacherName = true;

    const selectedClass = classData.find((c) => c._id === form.trainingType);
    const studentNumber = selectedClass?.studentNumber || 0;

    const firstNameErrors = Array(studentNumber)
      .fill(false)
      .map((_, i) => !form.firstNames[i]);
    const lastNameErrors = Array(studentNumber)
      .fill(false)
      .map((_, i) => !form.lastNames[i]);

    errors.firstNames = firstNameErrors;
    errors.lastNames = lastNameErrors;

    setFormErrorState(errors);

    const allFalse = Object.values(errors)
      .flatMap((v) => (Array.isArray(v) ? v : [v]))
      .every((v) => v === false);

    if (allFalse) setNext(true);
  };

  useEffect(() => {
    getProvince();
    getClass();
  }, []);

  const selectedClass = classData.find((c) => c._id === form.trainingType);
  const studentNumber = selectedClass?.studentNumber || 0;

  return (
    <>
      {next ? (
        <RegisterConfirm
          className="flex flex-col items-center justify-center w-full h-full"
          classData={classData}
          form={form}
          // provinceData={provinceData}
        />
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-t-xl py-4 px-6 shadow-md">
            <h1 className="text-2xl font-bold text-center">EnjoyAi бүртгэл</h1>
          </div>

          <div className="bg-gray-100 p-4 rounded-b-lg">
            <div className="my-2">
              <Image
                className="bg-cover"
                src="/image/enjoy.jpeg"
                alt="unitelhub"
                width={750}
                height={600}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <label className="font-bold block mb-2 text-purple-600">
                  1. Тэмцээнд оролцох төрөл
                </label>
                <select
                  value={form.trainingType}
                  onChange={(e) => {
                    setForm((prev) => ({
                      ...prev,
                      trainingType: e.target.value,
                      firstNames: [],
                      lastNames: [],
                    }));
                    setFormErrorState((prev) => ({
                      ...prev,
                      trainingType: false,
                      firstNames: [],
                      lastNames: [],
                    }));
                  }}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Сургалтын төрөл сонгоно уу</option>
                  {classData.map(({ _id, name, ageLimitMin, ageLimitMax }) => (
                    <option key={_id} value={_id}>
                      {name} {ageLimitMin}-{ageLimitMax} нас
                    </option>
                  ))}
                </select>
                {formErrorState.trainingType && (
                  <p className="text-red-600 text-sm">
                    Сургалтын төрөл сонгоно уу
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="font-bold block mb-2 text-purple-600">
                  2. Байршил
                </label>
                <select
                  value={form.location}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, location: e.target.value }));
                    setFormErrorState((prev) => ({ ...prev, location: false }));
                  }}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Аймаг сонгоно уу</option>
                  {provinceData.map(({ _id, name }) => (
                    <option key={_id} value={_id}>
                      {name}
                    </option>
                  ))}
                </select>
                {formErrorState.location && (
                  <p className="text-red-600 text-sm">Аймаг сонгоно уу</p>
                )}
              </div>
              <div>
                <label className="font-bold block mb-2 text-purple-600">
                  3. Сургуулийн нэр
                </label>
                <input
                  value={form.schoolName}
                  onChange={(e) => {
                    setForm((prevState) => ({
                      ...prevState,
                      schoolName: e.target.value,
                    }));
                    setFormErrorState((prevState) => ({
                      ...prevState,
                      schoolName: false,
                    }));
                  }}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Сургуулийн нэр"
                />
                {formErrorState.schoolName && (
                  <p className="text-red-600 text-sm">
                    Сургуулийн нэрээ бичнэ үү
                  </p>
                )}
              </div>
              <div>
                <label className="font-bold block mb-2 mt-2 text-purple-600">
                  4. Багийн нэр
                </label>
                <input
                  value={form.teamName}
                  onChange={(e) => {
                    setForm((prevState) => ({
                      ...prevState,
                      teamName: e.target.value,
                    }));
                    setFormErrorState((prevState) => ({
                      ...prevState,
                      teamName: false,
                    }));
                  }}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Багийн нэр"
                />
                {formErrorState.teamName && (
                  <p className="text-red-600 text-sm">Багшийн нэрээ бичнэ үү</p>
                )}
              </div>
              {studentNumber > 0 && (
                <div className="mb-6">
                  <label className="font-bold block mb-2 text-purple-600 mt-2">
                    5. Сурагчийн овог болон нэр
                  </label>
                  {[...Array(studentNumber)].map((_, i) => (
                    <div key={i} className="grid md:grid-cols-2 gap-2 mb-2">
                      <input
                        type="text"
                        placeholder={`Овог ${i + 1}`}
                        value={form.lastNames[i] || ""}
                        onChange={(e) => {
                          const newLastName = [...(form.lastNames || [])];
                          newLastName[i] = e.target.value;
                          setForm((prev) => ({
                            ...prev,
                            lastNames: newLastName,
                          }));
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                      {formErrorState.lastNames[i] && (
                        <p className="text-red-600 text-sm">Овгоо оруулна уу</p>
                      )}
                      <input
                        type="text"
                        placeholder={`Нэр ${i + 1}`}
                        value={form.firstNames[i] || ""}
                        onChange={(e) => {
                          const newFirstName = [...(form.firstNames || [])];
                          newFirstName[i] = e.target.value;
                          setForm((prev) => ({
                            ...prev,
                            firstNames: newFirstName,
                          }));
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                      {formErrorState.firstNames[i] && (
                        <p className="text-red-600 text-sm">Нэрээ оруулна уу</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <div>
                <label className="font-bold block mb-2 text-purple-600">
                  6. Багшийн нэр
                </label>
                <input
                  value={form.teacherName}
                  onChange={(e) => {
                    setForm((prevState) => ({
                      ...prevState,
                      teacherName: e.target.value,
                    }));
                    setFormErrorState((prevState) => ({
                      ...prevState,
                      teacherName: false,
                    }));
                  }}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Багшийн нэр"
                />
                {formErrorState.teacherName && (
                  <p className="text-red-600 text-sm">Багшийн нэрээ бичнэ үү</p>
                )}
              </div>
              <div className="mb-6 mt-2">
                <label className="font-bold block mb-2 mt-2 text-purple-600">
                  7. Нас
                </label>
                <select
                  value={form.ages}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, ages: e.target.value }));
                    setFormErrorState((prev) => ({ ...prev, ages: false }));
                  }}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Нас сонгох</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={(i + 6).toString()}>
                      {i + 6}
                    </option>
                  ))}
                </select>
                {formErrorState.ages && (
                  <p className="text-red-600 text-sm">Насаа оруулна уу</p>
                )}
              </div>

              {/* Contact */}
              <div className="mb-6">
                <label className="font-bold block mb-2 text-purple-600">
                  8. Холбоо барих утас
                </label>
                <input
                  type="number"
                  value={form.contactPhone}
                  onChange={(e) => {
                    setForm((prev) => ({
                      ...prev,
                      contactPhone: e.target.value,
                    }));
                    if (e.target.value.length === 8) {
                      setFormErrorState((prev) => ({
                        ...prev,
                        contactPhone: false,
                      }));
                    }
                  }}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Утасны дугаар"
                />

                {formErrorState.contactPhone && (
                  <p className="text-red-600 text-sm">
                    Утасны дугаар гүйцэт оруулна уу
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleCreateInvoice}
                className="w-full p-2 rounded bg-gradient-to-r from-blue-500 to-emerald-600 text-white hover:bg-blue-600"
              >
                Төлбөр төлөх
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
