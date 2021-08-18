var esb = require("esbuild");

// get environment switch
var prod = process.argv.some((value) => {
  return value === "--production";
});

var dev = process.argv.some((value) => {
  return value === "--development";
});

// if no environment switch present build both
if (!prod && !dev) {
  prod = true;
  dev = true;
}

// minified production ready build
if (prod) {
  console.log("Production build...");
  esb.buildSync({
    entryPoints: ["src/contact.ts"],
    entryNames: "[dir]/[name]-min",
    bundle: true,
    write: true,
    outdir: "dist",
    sourcemap: true,
    minifyIdentifiers: false,
    minifySyntax: true,
    minifyWhitespace: true,
    logLevel: "info",
  });
  console.log("Production build complete!");
}

// development build
if (dev) {
  console.log("Development build...");
  esb.buildSync({
    entryPoints: ["src/contact.ts"],
    entryNames: "[dir]/[name]",
    bundle: true,
    write: true,
    outdir: "dist",
    sourcemap: true,
    logLevel: "debug",
  });
  console.log("Development build complete!");
}
