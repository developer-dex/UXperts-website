"use client";
import * as React from "react";
import { Avatar } from "./Avatar";
import user1 from '../../public/logos/user1.png';
import user2 from '../../public/logos/user2.png';
import user3 from '../../public/logos/user3.png';
import user4 from '../../public/logos/user4.png';
import user5 from '../../public/logos/user5.png';

export function AvatarStack() {
  return (
    <section className="relative flex-shrink-0 justify-center items-center h-[58px] w-[980px] max-md:px-4 max-md:w-full max-sm:px-2">
      {/* Main visible avatars */}
      <Avatar
        imageUrl={user1.src}
        size={54}
        position={{ top: "0.5", left: "296px" }}
        responsiveClasses="max-md:left-1/4 max-sm:left-[20%]"
      />

      <Avatar
        imageUrl={user2.src}
        size={54}
        position={{ top: "0.5", left: "254px" }}
        responsiveClasses="max-md:left-[20%] max-sm:left-[15%]"
      />

      <Avatar
        imageUrl={user3.src}
        size={53}
        position={{ top: "3px", left: "339px" }}
        opacity={0.9783}
        responsiveClasses="max-md:left-[30%] max-sm:left-1/4"
      />

      <Avatar
        imageUrl={user4.src}
        size={48}
        position={{ top: "5px", left: "382px" }}
        opacity={0.8874}
        responsiveClasses="max-md:left-[35%] max-sm:left-[30%]"
      />

      <Avatar
        imageUrl={user5.src}
        size={29}
        position={{ top: "15px", left: "434px" }}
        opacity={0.5191}
        responsiveClasses="max-md:left-[40%] max-sm:left-[35%]"
      />
    </section>
  );
}
