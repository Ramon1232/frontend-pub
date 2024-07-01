"use client";

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface Beneficiario {
  id_beneficiario: number;
  curp: string;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
}

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [beneficiarios, setBeneficiarios] = useState<Beneficiario[]>([]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const getBeneficiarios = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/beneficiarios`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Beneficiario[] = await res.json();
      setBeneficiarios(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>
        <div className="flex justify-center gap-4 mb-6">
          <button onClick={getBeneficiarios} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">
            Mostrar beneficiarios
          </button>
          <Link href="/cargar">
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">
              Cargar beneficiarios
            </button>
          </Link>
        </div>
        {beneficiarios.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">CURP</th>
                  <th className="px-4 py-2 border-b">Nombre</th>
                </tr>
              </thead>
              <tbody>
                {beneficiarios.map((beneficiario) => (
                  <tr key={beneficiario.id_beneficiario} className="text-center">
                    <td className="px-4 py-2 border-b">{beneficiario.curp}</td>
                    <td className="px-4 py-2 border-b">{beneficiario.nombre + " " + beneficiario.primerApellido + " " + beneficiario.segundoApellido}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

