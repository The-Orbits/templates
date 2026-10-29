"use client";

import { useEffect } from "react";
import { track } from "@useorbits/analytics";
import { clear } from "@/lib/cart";

/** Empties the cart once the payment is confirmed, and counts the order on the Analytics tab. */
export function ClearCart() {
  useEffect(() => {
    track("Order placed");
    clear();
  }, []);
  return null;
}
