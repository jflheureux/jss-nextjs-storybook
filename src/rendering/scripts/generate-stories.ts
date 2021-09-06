/*
  Storybook Component Stories Generator
  This is a script that enables generating Storybook stories for existing JSS components using `jss generate-stories`.
*/

/* eslint-disable no-throw-literal,no-console */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const componentRootPath = 'src/components/';
const components = walkSync(componentRootPath);
// Matches component names that can optionally be preceded by a relative path
const nameParamFormat = new RegExp(/^((?:[\w-]+\/)*)([A-Z][\w-]+).tsx$/);
const storyRootPath = 'src/stories';
import generateStorySrc from './templates/story-src';

console.log(chalk.green('Generating Storybook stories...'));

components.forEach((component) => {
  console.log(`Component ${component}...`);

  const regExResult = nameParamFormat.exec(component);

  if (regExResult === null) {
    console.log(chalk.red(`${component} skipped. Name is not standard.`));
    return;
  }

  const componentPath = regExResult[1];
  const componentFileName = regExResult[2];
  const componentName = componentFileName.replace(/-/g, '');

  const storyFilename = `${componentFileName}.stories.tsx`;

  const storyOutputPath = scaffoldFile(
    storyRootPath,
    componentPath,
    generateStorySrc(componentFileName, componentName, componentPath),
    storyFilename
  );

  if (storyOutputPath) {
    console.log(chalk.green('Created'));
  } else {
    console.log(chalk.green('Already exists'));
  }
});

function walkSync(dir: string, relativepath?: string, filelist?: string[]) {
  const files = fs.readdirSync(dir);
  const currentRelativePath = relativepath || '';
  let outputFiles = filelist || [];

  files.forEach(function (file) {
    if (fs.statSync(dir + file).isDirectory()) {
      outputFiles = walkSync(dir + file + '/', currentRelativePath + file + '/', outputFiles);
    } else {
      outputFiles.push(currentRelativePath + file);
    }
  });

  return outputFiles;
}

/**
 * Force to use `crlf` line endings, we are using `crlf` across the project.
 * Replace: `lf` (\n), `cr` (\r)
 * @param {string} content
 */
function editLineEndings(content: string) {
  return content.replace(/\r|\n/gm, '\r\n');
}

/**
 * Creates a file relative to the specified path if the file doesn't exist. Creates directories as needed.
 * @param {string} rootPath - the root path
 * @param {string} rootPath - the relative path to the root path
 * @param {string} fileContent - the file content
 * @param {string} filename - the filename
 * @returns the new file's filepath
 */
function scaffoldFile(
  rootPath: string,
  relativePath: string,
  fileContent: string,
  filename: string
): string | null {
  const outputDir = path.join(rootPath, relativePath);
  const outputFile = path.join(outputDir, filename);

  if (fs.existsSync(outputFile)) {
    console.log(chalk.red(`Skipping creating ${outputFile}; already exists.`));
    return null;
  }

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputFile, editLineEndings(fileContent), 'utf8');
  console.log(chalk.green(`File ${outputFile} has been scaffolded.`));
  return outputFile;
}
