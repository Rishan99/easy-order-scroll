import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Phone className="h-5 w-5" />
          <span className="text-lg font-semibold">9802344244</span>
        </div>
        <div className="text-lg font-medium mb-2">
          inQR.com.np
        </div>
        <div className="text-sm text-gray-400">
          Powered By: Biz Ad Cart Pvt Ltd.
        </div>
      </div>
    </footer>
  );
};