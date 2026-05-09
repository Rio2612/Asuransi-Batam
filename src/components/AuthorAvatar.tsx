"use client";

import { useState } from "react";

export default function AuthorAvatar() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-10 h-10 rounded-full flex-shrink-0 bg-gradient-to-br from-[#c9a84c] to-[#f0d080] flex items-center justify-center text-[#0a1628] font-bold text-sm">
        R
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#c9a84c] to-[#f0d080]">
      <img
        src="/images/rio-mardiansyah.jpg"
        alt="Rio Mardiansyah"
        width={40}
        height={40}
        className="w-full h-full object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  );
}
