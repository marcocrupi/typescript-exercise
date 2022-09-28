var DesktopDirectory = /** @class */ (function () {
    function DesktopDirectory() {
    }
    DesktopDirectory.prototype.addFile = function (name) {
        console.log("Adding file: ".concat(name));
    };
    DesktopDirectory.prototype.showPreview = function (name) {
        console.log("Opening preview of file: ".concat(name));
    };
    return DesktopDirectory;
}());
var Desktop = new DesktopDirectory();
Desktop.addFile("lesson-notes.txt");
Desktop.showPreview("lesson-notes.txt");
