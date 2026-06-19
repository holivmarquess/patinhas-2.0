import { useEffect, useState } from "react";

export function useTheme() {
  // No SSR/prerender não existe localStorage; só lê a preferência no navegador.
  const [dark, setDark] = useState(
    () => typeof localStorage !== "undefined" && localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}
