#!/usr/bin/env node

import { execSync } from "child_process"
import process from "node:process"
import fs from "fs"
import path from "path"
import chalk from "chalk"

const repo = "https://github.com/jchangz/webpack-boilerplater.git"
const chalkError = () => chalk.white.bgRed.bold("ERROR")
const chalkSuccess = () => chalk.white.bgGreenBright.bold("SUCCESS!")
const chalkSteps = (step) => chalk.white.bgGreen.bold(`[${step}]`)

if (process.argv.length < 3) {
  console.log(chalkError(), "You have to provide a name directory to your app.")
  console.log(chalkError(), "For example: npx init my-app")

  process.exit(1)
}

const currentPath = process.cwd()
const folderPath = process.argv[2]
const installPath = path.join(currentPath, folderPath)

try {
  fs.mkdirSync(installPath)
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      chalkError(),
      `The directory "/${folderPath}" already exists, please give it another name.`
    )
  } else {
    console.log(chalkError(), err)
  }
  process.exit(1)
}

async function initialize() {
  try {
    console.log(chalkSteps("1"), `Copying files from repository`)
    execSync(`git clone --depth 1 ${repo} ${installPath}`, { stdio: "inherit" })
    console.log(chalkSuccess(), "Files have been successfully copied")
  } catch (err) {
    console.log(chalkError(), err)
  }
}

initialize()
