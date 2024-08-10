import Header from "@/components/Header";
import { Providers } from "@/providers";
import { ThemeContext } from "@/ThemeContext";
import React, { useContext } from "react";

export default function Root({ children }: { children: React.ReactNode }) {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <Providers>
        <div
          className={[
            "wrapper",
            themeContext.theme == "light" ? "light" : "",
          ].join(" ")}
        >
          <Header />
          <main>{children}</main>
        </div>
      </Providers>
    </>
  );
}
