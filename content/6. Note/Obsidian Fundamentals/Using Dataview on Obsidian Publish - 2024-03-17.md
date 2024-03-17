---
tags:
  - Obsidian
  - Infra
  - Dataview
aliases:
  - Dataview
  - Obsidian
type: Note
isdone: false
created: 2024-03-17
reviewed:
---
### Topic:: [[3. Subject/Obsidian Fundamentals]]
**Previous Note** : [[]]
- - -
## Notes

### Templator to update file with tables of SQL result
<%*
const dv = app.plugins.plugins["dataview"].api;
const filename = "Index";
const query = `TABLE WITHOUT ID
	file.link AS "Name",
	length(filter(file.inlinks.file.folder, (x) => contains(string(x), "Note"))) AS "Notes", Finished as "Done", created as "Created"
FROM "3. Subject"
LIMIT 7`;

const tFile = tp.file.find_tfile(filename);
const queryOutput = await dv.queryMarkdown(query);

// write query output to file
await app.vault.modify(tFile, queryOutput.value);
%>

### Writing to Multiple Files (Not Working)
```
<%*
const dv = app.plugins.plugins["dataview"].api;

const fileAndQuery = new Map([
  [
    "Index",
    'TABLE WITHOUT ID
	file.link AS "Name",
	length(filter(file.inlinks.file.folder, (x) => contains(string(x), "Note"))) AS "Notes", Finished as "Done", created as "Created"
FROM "3. Subject"
LIMIT 7',
  ],
  [
    "Index",
    'TABLE WITHOUT ID
	file.link AS "Name",
	length(filter(file.inlinks.file.folder, (x) => contains(string(x), "Note"))) AS "Notes", Finished as "Done", created as "Created"
FROM "3. Subject"
LIMIT 7',
  ],
]);

await fileAndQuery.forEach(async (query, filename) => {

  const tFile = tp.file.find_tfile(filename);
  const queryOutput = await dv.queryMarkdown(query);

  // write query output to file
  await app.vault.modify(tFile, queryOutput.value);

});
%>
```

### My version
<%*
const dv = app.plugins.plugins["dataview"].api;
const filename1 = "Recent Books";
const query1 = `TABLE WITHOUT ID
	file.link AS "Name",
	length(filter(file.inlinks.file.folder, (x) => contains(string(x), "Note"))) AS "Notes", Finished as "Done", created as "Created"
FROM "1. Books"
LIMIT 7`;

const tFile1 = tp.file.find_tfile(filename1);
const queryOutput1 = await dv.queryMarkdown(query1);

// write query output to file
await app.vault.modify(tFile1, queryOutput1.value);

const filename2 = "Recent Conferences";
const query2 = `TABLE WITHOUT ID
	file.link AS "Name",
	length(filter(file.inlinks.file.folder, (x) => contains(string(x), "Note"))) AS "Notes", Finished as "Done", created as "Created"
FROM "3. Subject"
LIMIT 7`;

const tFile2 = tp.file.find_tfile(filename2);
const queryOutput2 = await dv.queryMarkdown(query2);

// write query output to file
await app.vault.modify(tFile2, queryOutput2.value);

// Recent Articles
const filename3 = "Recent Articles";
const query3 = `TABLE WITHOUT ID
	file.link AS "Name",
	length(filter(file.inlinks.file.folder, (x) => contains(string(x), "Note"))) AS "Notes", Finished as "Done", created as "Created"
FROM "5. Articles"
LIMIT 7`;

const tFile3 = tp.file.find_tfile(filename3);
const queryOutput3 = await dv.queryMarkdown(query3);

// write query output to file
await app.vault.modify(tFile3, queryOutput3.value);
%>