interface Directory {
  addFile: (name: string) => void;
  // Define a config type member here
  config: {
    default: {
      encoding: string;
      permissions: string;
    };
  };
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: "utf-8",
      permissions: "drw-rw-rw-",
    },
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

console.log(Desktop.config);
