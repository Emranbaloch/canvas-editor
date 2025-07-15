// vite.config.ts
import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import {
  resolve
} from "path";
var vite_config_default = defineConfig(({ mode }) => {
  const name = "canvas-editor";
  if (mode === "lib") {
    return {
      plugins: [
        cssInjectedByJsPlugin({
          styleId: `${name}-style`,
          topExecutionPriority: true
        }),
        {
          ...typescript({
            tsconfig: "./tsconfig.json",
            include: ["./src/editor/**"]
          }),
          apply: "build",
          declaration: true,
          declarationDir: "types/",
          rootDir: "/"
        }
      ],
      build: {
        lib: {
          name,
          fileName: name,
          entry: resolve("/home/project", "src/editor/index.ts")
        },
        rollupOptions: {
          output: {
            sourcemap: true
          }
        }
      }
    };
  }
  return {
    base: `/${name}/`,
    server: {
      host: "0.0.0.0"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdHlwZXNjcmlwdCBmcm9tICdAcm9sbHVwL3BsdWdpbi10eXBlc2NyaXB0J1xuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgbmFtZSA9ICdjYW52YXMtZWRpdG9yJ1xuICBpZiAobW9kZSA9PT0gJ2xpYicpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oe1xuICAgICAgICAgIHN0eWxlSWQ6IGAke25hbWV9LXN0eWxlYCxcbiAgICAgICAgICB0b3BFeGVjdXRpb25Qcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnR5cGVzY3JpcHQoe1xuICAgICAgICAgICAgdHNjb25maWc6ICcuL3RzY29uZmlnLmpzb24nLFxuICAgICAgICAgICAgaW5jbHVkZTogWycuL3NyYy9lZGl0b3IvKionXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGFwcGx5OiAnYnVpbGQnLFxuICAgICAgICAgIGRlY2xhcmF0aW9uOiB0cnVlLFxuICAgICAgICAgIGRlY2xhcmF0aW9uRGlyOiAndHlwZXMvJyxcbiAgICAgICAgICByb290RGlyOiAnLydcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGJ1aWxkOiB7XG4gICAgICAgIGxpYjoge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZmlsZU5hbWU6IG5hbWUsXG4gICAgICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShcIi9ob21lL3Byb2plY3RcIiwgJ3NyYy9lZGl0b3IvaW5kZXgudHMnKVxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICBzb3VyY2VtYXA6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBgLyR7bmFtZX0vYCxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJ1xuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFdBQVc7QUFDeEMsUUFBTSxPQUFPO0FBQ2IsTUFBSSxTQUFTLE9BQU87QUFDbEIsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1Asc0JBQXNCO0FBQUEsVUFDcEIsU0FBUyxHQUFHO0FBQUEsVUFDWixzQkFBc0I7QUFBQTtBQUFBLFFBRXhCO0FBQUEsYUFDSyxXQUFXO0FBQUEsWUFDWixVQUFVO0FBQUEsWUFDVixTQUFTLENBQUM7QUFBQTtBQUFBLFVBRVosT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsZ0JBQWdCO0FBQUEsVUFDaEIsU0FBUztBQUFBO0FBQUE7QUFBQSxNQUdiLE9BQU87QUFBQSxRQUNMLEtBQUs7QUFBQSxVQUNIO0FBQUEsVUFDQSxVQUFVO0FBQUEsVUFDVixPQUFPLEFBQUssUUFBUSxpQkFBaUI7QUFBQTtBQUFBLFFBRXZDLGVBQWU7QUFBQSxVQUNiLFFBQVE7QUFBQSxZQUNOLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXJCLFNBQU87QUFBQSxJQUNMLE1BQU0sSUFBSTtBQUFBLElBQ1YsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
