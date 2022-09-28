var DesktopDirectory = /** @class */ (function () {
    function DesktopDirectory() {
        this.config = {
            "default": {
                encoding: "utf-8",
                permissions: "drw-rw-rw-"
            }
        };
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
console.log(Desktop.config);
