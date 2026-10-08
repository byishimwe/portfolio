import type { Config } from "@react-router/dev/config";
export default {
  ssr: false,
  prerender: ["/", "/work/cafe-bliss", "/work/imizi", "/work/quad", "/404"],
} satisfies Config;
