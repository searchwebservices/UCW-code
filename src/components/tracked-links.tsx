"use client";

import React from "react";

function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    (window as Record<string, unknown[]>).dataLayer =
      (window as Record<string, unknown[]>).dataLayer || [];
    (window as Record<string, unknown[]>).dataLayer.push(data);
  }
}

export function TrackedPhoneLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="tel:+526241840829"
      onClick={() =>
        pushToDataLayer({
          event: "click_to_call",
          phone_number: "+526241840829",
          click_location:
            typeof window !== "undefined" ? window.location.pathname : "",
          conversion_value: 150,
        })
      }
      className={className}
    >
      {children}
    </a>
  );
}

export function TrackedEmailLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="mailto:luba@uniquecaboweddings.com"
      onClick={() =>
        pushToDataLayer({
          event: "click_to_email",
          email_address: "luba@uniquecaboweddings.com",
          click_location:
            typeof window !== "undefined" ? window.location.pathname : "",
          conversion_value: 75,
        })
      }
      className={className}
    >
      {children}
    </a>
  );
}
