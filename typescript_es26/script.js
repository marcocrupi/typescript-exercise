function downloadStatus(status) {
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
