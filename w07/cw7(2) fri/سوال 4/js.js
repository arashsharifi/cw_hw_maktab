function config(options) {
  let { startup, boot, port } = options;

  startup = startup ?? "nurmal";
  boot = boot ?? "safe";
  port = port ?? "COM1";
  return { startup, boot, port };
}

// config({ startup: "selective", boot: "minimal", port: "COM2" }); // { startup:

console.log(config({ startup: "selective", boot: "minimal", port: "COM2" }));
console.log(config({})); //

// "normal", boot: "safe", bandrate: "115200", port: "COM1" }
//config({ startup: "diagnostic" });  { startup: "diagnostic", boot: "safe",
// port: "COM1"}
