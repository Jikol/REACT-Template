const path = require("path");
const { Namer } = require("@parcel/plugin");

module.exports = new Namer({
    name({ bundle }) {
        // handle bundle items which have getMainEntry undefined
        if (!bundle.getMainEntry()) return null;
        const filePath = bundle.getMainEntry().filePath;
        const fileExt = path.extname(filePath);
        const fileName = path.basename(filePath).replace(fileExt, "");
        if (bundle.type === "html") {
            return `${fileName}.html`;
        }
        if (bundle.type === "webmanifest") {
            return `public/${fileName}.webmanifest`;
        }
        if (bundle.type === "css") {
            return `src/styles/${fileName}.${bundle.hashReference}.css`;
        }
        if (bundle.type === "js") {
            return `src/${fileName}.${bundle.hashReference}${fileExt}`;
        }
        if (bundle.type === "ttf" || bundle.type === "otf") {
            return `public/fonts/${path.basename(filePath)}`;
        }
        if (
            bundle.type === "png" ||
            bundle.type === "jpg" ||
            bundle.type === "jpeg" ||
            bundle.type === "ico" ||
            bundle.type === "svg"
        ) {
            return `public/assets/${fileName}${fileExt}`;
        }
        if (bundle.type === "wav") {
            return `public/audio/${fileName}${fileExt}`;
        }
        return null;
    },
});
