type Status = "idle" | "downloading" | "complete";

function downloadStatus(status: Status) {
  if (status === "idle") {
    console.log("Download");
  }
  if (status === "downloading") {
    console.log("Downloading...");
  }
  if (status === "complete") {
    console.log("Your download is complete!");
  }
}

downloadStatus("idle");
