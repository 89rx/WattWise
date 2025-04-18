const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

try {
  console.log("Installing dependencies...");
  execSync("npm install", { stdio: "inherit", cwd: __dirname });

  console.log("Starting the server...");
  require(path.join(__dirname, "server.js"));
} catch (error) {
  fs.writeFileSync(path.join(__dirname, "error.log"), error.toString());
  console.error("Error occurred. Check error.log for details.");
}
