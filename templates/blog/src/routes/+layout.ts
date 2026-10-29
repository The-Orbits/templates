import { injectAnalytics } from "@useorbits/analytics/sveltekit";
import { injectSpeedInsights } from "@useorbits/speed-insights/sveltekit";

// Every page is built ahead of time. The Node adapter still runs a server, so you can add a dynamic route later.
export const prerender = true;

injectAnalytics();
injectSpeedInsights();
