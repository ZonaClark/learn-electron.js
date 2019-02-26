const versionEL = document.querySelector('#version');
versionEL.innerText = process.versions.electron;
console.log(process.versions);