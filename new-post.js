const inquirer = require("inquirer")
const fs = require("fs")

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What's the title of the post?",
    },
    {
      type: "input",
      name: "description",
      message: "What's the description of the post?",
    },
  ])
  .then(({title, description}) => {
    const now = new Date();
    const date = now.toISOString();
    const blogFile = `content/blog/${title}/index.md`;
    fs.mkdirSync(`content/blog/${title}`)
    fs.writeFileSync(
      blogFile,
      `---
title: ${title}
date: "${date}"
description: ${description}
---
`
    );
    console.log(`Blog entry created: "${blogFile}"`);
  })
