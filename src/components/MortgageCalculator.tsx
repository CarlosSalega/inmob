"use client";

import { useState, useEffect } from "react";
import { Calculator, Home, DollarSign, Percent } from "lucide-react";

interface MortgageCalculatorProps {
  propertyPrice?: number;
}

export default function MortgageCalculator({
  propertyPrice,
}: MortgageCalculatorProps) {
  const [price, setPrice] = useState(200000);
  const [downPayment, setDownPayment] = useState(20);
  const [years, setYears] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);

  // Sync with property price when provided
  useEffect(() => {
    if (propertyPrice) {
      setPrice(propertyPrice);
    }
  }, [propertyPrice]);

  const loanAmount = price * (1 - downPayment / 100);
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = years * 12;

  const monthlyPayment =
    monthlyRate > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1)
      : loanAmount / numPayments;

  const totalPayment = monthlyPayment * numPayments;
  const totalInterest = totalPayment - loanAmount;

  return (
    <section className="bg-bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-inmob-primary mb-3">
            Calculadora de crédito
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Estimá tu cuota mensual y planificá tu compra
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            {/* Price */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm font-semibold text-inmob-primary mb-2">
                <Home size={16} />
                Precio de la propiedad (U$D)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="input-premium pl-14"
                />
              </div>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="10000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full mt-2 accent-inmob-primary"
              />
            </div>

            {/* Down payment */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm font-semibold text-inmob-primary mb-2">
                <Percent size={16} />
                Anticipo ({downPayment}%)
              </label>
              <div className="flex gap-3">
                {[10, 20, 30, 40, 50].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => setDownPayment(pct)}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                      downPayment === pct
                        ? "bg-inmob-primary text-white"
                        : "bg-bg-secondary text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="0"
                max="80"
                step="5"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full mt-2 accent-inmob-primary"
              />
            </div>

            {/* Years */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm font-semibold text-inmob-primary mb-2">
                Plazo: {years} años
              </label>
              <input
                type="range"
                min="5"
                max="30"
                step="5"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-inmob-primary"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>5 años</span>
                <span>30 años</span>
              </div>
            </div>

            {/* Interest rate */}
            <div className="mb-4">
              <label className="flex items-center gap-2 text-sm font-semibold text-inmob-primary mb-2">
                Tasa de interés anual: {interestRate}%
              </label>
              <input
                type="range"
                min="3"
                max="15"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-inmob-primary"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>3%</span>
                <span>15%</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-inmob-primary rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-8">
              <Calculator size={24} className="text-inmob-accent" />
              <h3 className="text-xl font-bold">Resultado estimado</h3>
            </div>

            <div className="space-y-6">
              {/* Monthly payment */}
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-sm text-gray-300 mb-1">Cuota mensual</p>
                <p className="text-4xl font-bold text-inmob-accent">
                  USD {Math.round(monthlyPayment).toLocaleString()}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">
                    Monto del préstamo
                  </p>
                  <p className="text-lg font-semibold">
                    USD {Math.round(loanAmount).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Anticipo</p>
                  <p className="text-lg font-semibold">
                    USD{" "}
                    {Math.round(price * (downPayment / 100)).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Total intereses</p>
                  <p className="text-lg font-semibold text-inmob-accent-light">
                    USD {Math.round(totalInterest).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Total a pagar</p>
                  <p className="text-lg font-semibold">
                    USD {Math.round(totalPayment).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Visual bar */}
              <div className="pt-4">
                <div className="flex h-3 rounded-full overflow-hidden bg-white/10">
                  <div
                    className="bg-inmob-accent transition-all duration-300"
                    style={{
                      width: `${(loanAmount / (loanAmount + totalInterest)) * 100}%`,
                    }}
                  />
                  <div
                    className="bg-white/30 transition-all duration-300"
                    style={{
                      width: `${(totalInterest / (loanAmount + totalInterest)) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-inmob-accent rounded-full inline-block" />
                    Capital
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-white/30 rounded-full inline-block" />
                    Intereses
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-6 text-center">
              * Cálculo estimado. Los valores reales dependen del banco y
              condiciones del crédito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
