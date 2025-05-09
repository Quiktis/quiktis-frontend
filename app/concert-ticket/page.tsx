import ConcertTicket from "@/components/concert-ticket";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-16 px-5">
      <ConcertTicket
        eventName="AFRO VIBES CONCERT 2025"
        eventCreator="By mention Creator"
        date="APRIL 15, 2025"
        time="7:00 PM"
        venue="LAGOS CONVENTION CENTER, VICTORIA ISLAND"
        ticketType="GENERAL ADMISSION"
        ticketHolder="JOHN DOE"
        ticketNumber="ETK-2049-AFRO"
        // ← no logoUrl or qrCodeUrl here!
      />
    </main>
  );
}
