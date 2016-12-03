declare var System: any;

let map = {
    "@angular": "node_modules/@angular",
    "rxjs": "node_modules/rxjs",
};

let packages: any = {
    "dist": {
        defaultExtension: "js"
    },
    "node_modules": {
        defaultExtension: "js"
    }
};

let ngPackageNames = [
    "common",
    "core",
    "http",
    "platform-browser"
];

ngPackageNames.forEach(
    function iterator(packageName) {
        packages["@angular/" + packageName] = {
            main: ("bundles/" + packageName + ".umd.js")
        };
    }
);

System.config({
    map: map,
    packages: packages,
});

System
    .import('dist/app.js')
    .then(null, console.error.bind(console));