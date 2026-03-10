import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL("Halo Rio, saya ingin konsultasi asuransi")}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat WhatsApp"
      title="Konsultasi via WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
