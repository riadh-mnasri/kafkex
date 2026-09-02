/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
"use client";

import { useLocale } from "@/lib/i18n";

export function AppFooter() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-border py-6 text-center text-sm text-muted">
      <p>
        © 2026{" "}
        <a href="https://riadh-mnasri.pro" className="hover:underline">
          Riadh MNASRI
        </a>
        . {t("footer.rights")}
      </p>
    </footer>
  );
}
