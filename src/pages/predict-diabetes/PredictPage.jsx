import React, { useState } from "react";
import FormPredict from "./components/FormPredict";

function PredictPage() {
  const [predictResult, setPredictResult] = useState("");
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50 flex flex-center justify-center items-center">
      <div className="grid grid-cols-2 gap-5 bg-white max-w-6xl shadow w-full p-5 rounded-3xl">
        <div>
          <div className="rounded-full bg-primary/50 text-primary">
            Demo Machine Learning
          </div>
          <h1>Prediksi Diabetes</h1>
          <p>
            Isi Formulir di bawah ini untuk mendapatkan hasil prediksi diabetes.
          </p>
          <div>
            <FormPredict
              isLoading={isLoading}
              setLoading={setLoading}
              setPredictResult={setPredictResult}
            />
          </div>
        </div>
        <div>
          Right : Hasil Prediksi :{" "}
          {predictResult === 0 ? "Negative" : "Positive"}{" "}
        </div>
      </div>
    </div>
  );
}

export default PredictPage;
