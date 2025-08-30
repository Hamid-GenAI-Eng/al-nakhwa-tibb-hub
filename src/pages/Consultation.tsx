import { SidebarProvider } from "@/components/ui/sidebar";
import ConsultationSidebar from "@/components/consultation/ConsultationSidebar";
import ConsultationChat from "@/components/consultation/ConsultationChat";
import ConsultationHeader from "@/components/consultation/ConsultationHeader";

const Consultation = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background w-full">
        <ConsultationHeader />
        <div className="flex min-h-screen w-full pt-16">
          <ConsultationSidebar />
          <main className="flex-1 overflow-hidden">
            <ConsultationChat />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Consultation;