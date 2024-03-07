"use client";

import React, { useEffect } from "react";

export default function Page() {
  async function fn() {
    const { TableauViz } = await import("@tableau/embedding-api");
    let viz = new TableauViz();
    console.log("cek");

    viz.src = "https://public.tableau.com/views/City_AQ_Viewer_2023/EuropeanCityRanking";
    viz.toolbar = "hidden";

    document.getElementById("tableauViz").appendChild(viz);
  }
  useEffect(() => {
    fn();
  }, []);

  return (
    <main>
      <div className="w-full p-16" id="tableauViz"></div>
    </main>
  );
}
