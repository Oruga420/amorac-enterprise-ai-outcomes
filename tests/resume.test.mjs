import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const resume = JSON.parse(readFileSync(new URL("../app/resume.json", import.meta.url)));
const certs = JSON.parse(readFileSync(new URL("../app/certifications.json", import.meta.url)));
test("resume has complete professional sections", () => {
  assert.ok(resume.title && resume.summary);
  assert.equal(resume.experiences.length, 8);
  assert.ok(resume.skillGroups.length >= 4);
  resume.experiences.forEach(item => assert.ok(item.company && item.bullets.length >= 2));
});
test("certifications have unique, secure verification links", () => {
  assert.equal(certs.length, 40);
  assert.equal(new Set(certs.map(c => c.url)).size, 40);
  certs.forEach(c => assert.ok(c.name && c.url.startsWith("https://")));
});
test("employment dates retain the verified resume record", () => {
  assert.deepEqual(resume.experiences.slice(0,7).map(e => e.date), ["Nov 2021 - Present", "Feb 2025 - Nov 2025", "Jun 2024 - Nov 2024", "Nov 2018 - Nov 2023", "2012", "2009 - 2010", "2008 - 2009"]);
});
