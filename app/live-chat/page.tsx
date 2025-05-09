// app/page.tsx
"use client";

import ChatInterfaceWrapper from "@/components/livechat/chat-interface-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start">
      {/* Now starts flush under your navbar */}
      <ChatInterfaceWrapper />
    </main>
  );
}
