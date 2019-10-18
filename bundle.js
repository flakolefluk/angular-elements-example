const path = require('path');
const fs = require('fs');
const distFolder = path.join(__dirname, 'dist', 'elements');
const bundlesFolder = path.join(__dirname, 'dist', 'bundles');

async function bundle(format) {
  const files = await Promise.all([
    readFile(path.join(distFolder, `runtime-${format}.js`)),
    readFile(path.join(distFolder, `polyfills-${format}.js`)),
    readFile(path.join(distFolder, `scripts.js`)),
    readFile(path.join(distFolder, `main-${format}.js`)),
  ]);

  try {
    await writeFile(
      path.join(bundlesFolder, `bundle-${format}.js`),
      files.join('\n'),
    );
  } catch (e) {
    console.error(e);
  }
}

async function bundleAll() {
  if (!fs.existsSync(bundlesFolder)) {
    fs.mkdirSync(bundlesFolder);
  }
  await Promise.all([bundle('es5'), bundle('es2015')]);
}

async function readFile(filePath) {
  return await new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(`Error reading ${filePath}`);
      }
      resolve(data);
    });
  });
}

async function writeFile(filePath, data) {
  await new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err, data) => {
      if (err) {
        reject(`Error writing ${filePath}`);
      }
      resolve(data);
    });
  });
}

bundleAll();
