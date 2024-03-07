"use client";

import React, { useEffect } from "react";
import { TableauViz } from "@tableau/embedding-api";

export default function page() {
  useEffect(() => {
    const viz = new TableauViz();

    viz.src = "https://public.tableau.com/views/City_AQ_Viewer_2023/EuropeanCityRanking";
    viz.toolbar = "hidden";

    document.getElementById("tableauViz").appendChild(viz);
  }, []);
  return (
    <main>
      <div className="w-full p-16" id="tableauViz"></div>
    </main>
  );
}
