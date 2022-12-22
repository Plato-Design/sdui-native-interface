const fs = require('fs')
const cp = require('child_process')
const semver = require('semver')

cp.execSync('yarn compile', {stdio: 'inherit'})

const pkg = require('./package.json')
const version = semver.inc(pkg.version, 'patch')
console.info(`Updated ${pkg.version} to ${version}`)
pkg.version = version
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2))

cp.execSync('git add .', {stdio: 'inherit'})
cp.execSync('git commit -m "bump"', {stdio: 'inherit'})
cp.execSync(`git tag v${version}`, {stdio: 'inherit'})
cp.execSync('git push origin master', {stdio: 'inherit'})
cp.execSync('git push origin --tags', {stdio: 'inherit'})

// cp.execSync(`yarn publish --non-interactive --new-version ${version}`, {stdio: 'inherit'})
