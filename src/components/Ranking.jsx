import React from "react";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { RankingProvider } from "../contexts/RankingContext";
import RankingContainer from "./RankingContainer";

export const Ranking = () => {

  return (
    <RankingProvider>
      <div>
        <Header />
        <NavBar />

        <RankingContainer />

        <Footer />
      </div>
    </RankingProvider>
  );
};
