"use client"
import React from "react";
import { useEffect, useState } from "react";
import styles from "@/app/ui/dashboard/revenue/revenue.module.css";

const BASE_URL = "http://hapi.fhir.org/baseR4"

const Pacientes = () => {
  const [pacientes, setPacientes] = useState({ entry: [] })

  useEffect(() => {
    fetch(BASE_URL + "/Patient", {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        setPacientes(data)
        console.log(data)
      })
      .catch(error => console.log(error))
  }, [])

  // Web
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pacientes</h2>
      <div className={styles.menu}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th
                scope="col"
                className={styles.th}
              >
                id
              </th>
              <th
                scope="col"
                className={styles.th}
              >
                Nombre
              </th>
              <th
                scope="col"
                className={styles.th}
              >
                Ver Ficha
              </th>
            </tr>
          </thead>
          <tbody>
            {pacientes.entry.map(paciente => {
              return (
                <tr key={paciente.resource.id} className={styles.tr}>
                  <td className={styles.td}>
                    {paciente.resource.id}
                  </td>
                  <td className={styles.td}>
                    {paciente.resource.name != null &&
                      paciente.resource.name[0].given}
                  </td>
                  <td className={styles.td}>
                    <button
                      type="button"
                      title="Ver detalles"
                      className={styles.button}
                    >
                      <svg viewBox="0 0 24 24" className={styles.svg}>
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pacientes;