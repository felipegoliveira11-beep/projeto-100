import { MessageCircle } from "lucide-react";

export default function FloatingButton() {
  return (
    <button
      onClick={() => window.open("https://wa.me/5563992591113?text=Olá,%20Gostaria%20de%20saber%20mais%20sobre%20as%20expedições!", "_blank")}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-green-500 shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all hover:scale-110"
      title="WhatsApp - (63) 99259-1113"
    >
      <MessageCircle size={24} />
    </button>
  );
}