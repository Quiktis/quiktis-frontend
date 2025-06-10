"use client";

import React from "react";
import HeroSection from "@/components/nft/HeroSection";
import NftAuctionCard from "@/components/nft/NftAuctionCard";
import TicketResaleSection from "@/components/nft/TicketResaleSection";
// import TransactionsSection from "@/components/nft/TransactionsSection";

const NftPage: React.FC = () => {
  const logos = [
    "/metamask.png",
    "/walletconnect.png",
    "/Coinbase.png",
    "/logoipsum.png",
    "/logoipsum1.png",
  ];

  return (
    <div className="flex flex-col space-y-6 md:space-y-8">
      <HeroSection
        title="Find Your Favorite NFT Gallery"
        subtitle="Discover, collect, sell and create your NFTs"
        buttonText="Connect Wallet"
        backgroundImage="/hero-bg.png"
        nftImages={["/monkey.png", "/cartoonman.png", "/bluemask.png"]}
        logos={logos}
      />
      <section className="w-full px-4 py-4 md:py-6">
        <NftAuctionCard />
      </section>
      <TicketResaleSection />
      {/* <TransactionsSection /> */}
    </div>
  );
};

export default NftPage;
