import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const mapFile = path.join(process.cwd(), 'src', 'data', 'imageMap.json');

const normalizeId = (name) => {
    let clean = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    if (clean.includes("racing bulls") || clean.includes("rb")) return "rb";
    if (clean.includes("aston martin")) return "aston_martin";
    if (clean.includes("red bull")) return "red_bull";
    if (clean.includes("alpine")) return "alpine";
    if (clean.includes("haas")) return "haas";
    
    const parts = clean.split(' ');
    return parts[parts.length - 1];
};

const sanitizeFilename = (dirPath, filename) => {
    if (filename.includes('#') || filename.includes('?') || filename.includes('%')) {
        const safeName = filename.replace(/[#?%]/g, '_');
        fs.renameSync(path.join(dirPath, filename), path.join(dirPath, safeName));
        return safeName;
    }
    return filename;
};

const getCircuitIdFromFilename = (filename) => {
    const match = filename.match(/track(.*)detailed/i);
    if (!match) {
        const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
        return normalizeId(nameWithoutExt);
    }
    const raw = match[1].toLowerCase();
    const map = {
        'austin': 'americas', 'baku': 'baku', 'catalunya': 'catalunya', 'monza': 'monza',
        'interlagos': 'interlagos', 'mexicocity': 'rodriguez', 'yasmarinacircuit': 'yas_marina',
        'melbourne': 'albert_park', 'spielberg': 'red_bull_ring', 'spafrancorchamps': 'spa',
        'silverstone': 'silverstone', 'montreal': 'villeneuve', 'shanghai': 'shanghai',
        'zandvoort': 'zandvoort', 'hungaroring': 'hungaroring', 'suzuka': 'suzuka',
        'lasvegas': 'vegas', 'miami': 'miami', 'montecarlo': 'monaco', 'lusail': 'losail',
        'singapore': 'marina_bay'
    };
    return map[raw] || raw;
};

const mapDirectories = () => {
    const map = { drivers: {}, cars: {}, logos: {} };

    // Drivers
    const driversDir = path.join(publicDir, 'images', 'drivers', 'profiles');
    if (fs.existsSync(driversDir)) {
        const folders = fs.readdirSync(driversDir);
        folders.forEach(folder => {
            const folderPath = path.join(driversDir, folder);
            if (fs.statSync(folderPath).isDirectory()) {
                let files = fs.readdirSync(folderPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.webp'));
                if (files.length > 0) {
                    const id = normalizeId(folder);
                    map.drivers[id] = files.map(file => {
                        const safeFile = sanitizeFilename(folderPath, file);
                        return `/images/drivers/profiles/${folder}/${safeFile}`;
                    });
                }
            }
        });
    }

    // Cars
    const carsDir = path.join(publicDir, 'images', 'teams', 'cars');
    if (fs.existsSync(carsDir)) {
        const folders = fs.readdirSync(carsDir);
        folders.forEach(folder => {
            const folderPath = path.join(carsDir, folder);
            if (fs.statSync(folderPath).isDirectory()) {
                let files = fs.readdirSync(folderPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
                if (files.length > 0) {
                    const safeFile = sanitizeFilename(folderPath, files[0]);
                    const id = normalizeId(folder);
                    map.cars[id] = `/images/teams/cars/${folder}/${safeFile}`;
                }
            }
        });
    }

    // Logos
    const logosDir = path.join(publicDir, 'images', 'teams', 'logos');
    if (fs.existsSync(logosDir)) {
        const processLogoFile = (dirPath, filename, prefixFolder = '') => {
            if (filename.endsWith('.jpg') || filename.endsWith('.png')) {
                const safeFile = sanitizeFilename(dirPath, filename);
                const nameWithoutExt = safeFile.replace(/\.[^/.]+$/, "");
                const id = normalizeId(prefixFolder || nameWithoutExt);
                map.logos[id] = prefixFolder ? `/images/teams/logos/${prefixFolder}/${safeFile}` : `/images/teams/logos/${safeFile}`;
            }
        };

        const items = fs.readdirSync(logosDir);
        items.forEach(item => {
            const itemPath = path.join(logosDir, item);
            if (fs.statSync(itemPath).isDirectory()) {
                const files = fs.readdirSync(itemPath);
                files.forEach(f => processLogoFile(itemPath, f, item));
            } else {
                processLogoFile(logosDir, item);
            }
        });
    }

    // Circuits
    const circuitsDir = path.join(publicDir, 'images', 'circuits');
    if (fs.existsSync(circuitsDir)) {
        map.circuits = {};
        const processFile = (dirPath, filename, prefixFolder = '') => {
            if (filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.jpeg') || filename.endsWith('.webp') || filename.endsWith('.avif')) {
                const safeFile = sanitizeFilename(dirPath, filename);
                const id = getCircuitIdFromFilename(safeFile);
                if (!map.circuits[id]) map.circuits[id] = [];
                map.circuits[id].push(prefixFolder ? `/images/circuits/${prefixFolder}/${safeFile}` : `/images/circuits/${safeFile}`);
            }
        };

        const items = fs.readdirSync(circuitsDir);
        items.forEach(item => {
            const itemPath = path.join(circuitsDir, item);
            if (fs.statSync(itemPath).isDirectory()) {
                const files = fs.readdirSync(itemPath);
                files.forEach(f => processFile(itemPath, f, item));
            } else {
                processFile(circuitsDir, item);
            }
        });
    }

    fs.writeFileSync(mapFile, JSON.stringify(map, null, 2));
    console.log("Image map generated successfully with sanitized names.");
};

mapDirectories();
