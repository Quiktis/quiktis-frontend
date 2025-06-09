// components/nft/TransactionsSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

type Transaction = {
  id: string;
  blockchainName: string;
  hash: string;
};

export default function TransactionsSection() {
  // Mock data for transactions
  const transactions: Transaction[] = Array.from({ length: 9 }, (_, i) => ({
    id: `transaction-${i + 1}`,
    blockchainName: "Blockchain name",
    hash: `Hy1H3S5Wmk4qDejySn${i + 1}...`,
  }));

  return (
    <section className="text-white py-6 px-4 overflow-hidden"> {/* Added overflow-hidden */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Transactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="bg-zinc-900 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative mr-3">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full overflow-hidden">
                    <Image
                      src="/whiteavatar.png"
                      alt="Blockchain icon"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <FaCheckCircle className="absolute -bottom-1 -right-1 w-4 h-4 text-blue-500" />
                </div>

                <div>
                  <p className="font-medium">{tx.blockchainName}</p>
                  <p className="text-xs text-zinc-400">{tx.hash}</p>
                </div>
              </div>

              <Link href="/nfts" className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
