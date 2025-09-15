// 代码生成时间: 2025-09-16 03:07:52
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

// Function to read files from the source directory
function readFilesFromSource(sourceDir) {
  return fs.readdirSync(sourceDir).map(file => path.join(sourceDir, file));
}

// Function to write files to the destination directory
function writeFilesToDestination(files, destinationDir) {
  files.forEach(file => {
    const content = fs.readFileSync(file);
    const fileName = path.basename(file);
    const destinationFile = path.join(destinationDir, fileName);
    fs.writeFileSync(destinationFile, content);
  });
}

// Function to compare and sync files
function syncFiles(sourceDir, destinationDir) {
  const sourceFiles = readFilesFromSource(sourceDir);
  const destinationFiles = readFilesFromSource(destinationDir);
  
  // Find files that are in source but not in destination
  const filesToAdd = _.difference(sourceFiles, destinationFiles);
  
  // Find files that are in destination but not in source
  const filesToRemove = _.difference(destinationFiles, sourceFiles);
  
  // Find files that exist in both source and destination
  const commonFiles = _.intersection(sourceFiles, destinationFiles);
  const filesToUpdate = commonFiles.filter(file => {
    const sourceStat = fs.statSync(file);
    const destinationStat = fs.statSync(path.join(destinationDir, path.basename(file)));
    return sourceStat.mtime > destinationStat.mtime;
  });
  
  // Remove files from destination that are not in source
  filesToRemove.forEach(file => {
    const destinationFile = path.join(destinationDir, path.basename(file));
    fs.unlinkSync(destinationFile);
  });
  
  // Update files in destination that are outdated
  filesToUpdate.forEach(file => {
    const content = fs.readFileSync(file);
    const fileName = path.basename(file);
    const destinationFile = path.join(destinationDir, fileName);
    fs.writeFileSync(destinationFile, content);
  });
  
  // Add new files to destination
  filesToAdd.forEach(file => {
    const content = fs.readFileSync(file);
    const fileName = path.basename(file);
    const destinationFile = path.join(destinationDir, fileName);
    fs.writeFileSync(destinationFile, content);
  });
}

// Main function to run the backup and sync tool
function main() {
  try {
    const sourceDir = 'path/to/source/directory';
    const destinationDir = 'path/to/destination/directory';
    syncFiles(sourceDir, destinationDir);
    console.log('Backup and Sync completed successfully.');
  } catch (error) {
    console.error('Error during backup and sync:', error.message);
  }
}

// Run the main function
main();