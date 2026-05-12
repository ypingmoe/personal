import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import {
  coreFocus,
  education,
  experiences,
  expertise,
  profile,
  resumeMeta,
  socialLinks,
} from "../lib/resume-data";

const outDir = path.join(process.cwd(), "public");
const outFile = path.join(outDir, "resume.pdf");

const pageWidth = 612;
const margin = 48;
const contentWidth = pageWidth - margin * 2;

function contactLine(): string {
  return socialLinks
    .map((s) => {
      if (s.icon === "gmail") return "ypingmoe@gmail.com";
      if (s.icon === "github") return "github.com/ypingmoe";
      if (s.icon === "telegram") return "t.me/ypingmoe";
      return s.href.replace(/^https?:\/\//, "");
    })
    .join(" · ");
}

function sectionHeading(doc: InstanceType<typeof PDFDocument>, title: string) {
  doc.moveDown(0.75);
  doc.fontSize(10).font("Helvetica-Bold").fillColor("#0f172a").text(title.toUpperCase());
  doc.moveDown(0.35);
  doc.font("Helvetica").fontSize(10).fillColor("#0f172a");
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const doc = new PDFDocument({ size: "LETTER", margin });
const stream = fs.createWriteStream(outFile);
doc.pipe(stream);

doc.fontSize(20).font("Helvetica-Bold").text(resumeMeta.fullName, { width: contentWidth });
doc.moveDown(0.15);
doc.fontSize(11).font("Helvetica").text(profile.heroTitle, { width: contentWidth });
doc.moveDown(0.35);
doc.fontSize(9).fillColor("#334155").text(contactLine(), { width: contentWidth });
doc.fillColor("#0f172a");

sectionHeading(doc, "Summary");
doc.fontSize(10).font("Helvetica").text(profile.summary, { width: contentWidth, align: "left" });

sectionHeading(doc, "Experience");
for (const job of experiences) {
  const header = `${job.title} — ${job.company}`;
  const meta = `${job.period} · ${job.location}`;
  doc.font("Helvetica-Bold").fontSize(10.5).text(header, { width: contentWidth });
  doc.font("Helvetica").fontSize(9).fillColor("#334155").text(meta, { width: contentWidth });
  doc.fillColor("#0f172a").moveDown(0.25);
  for (const bullet of job.bullets) {
    doc.font("Helvetica").fontSize(10).text(`• ${bullet}`, {
      width: contentWidth,
      indent: 12,
      align: "left",
    });
    doc.moveDown(0.2);
  }
  doc.moveDown(0.15);
}

sectionHeading(doc, "Education");
for (const row of education) {
  doc.font("Helvetica").fontSize(10.5).text(`${row.institution} · ${row.period}`, {
    width: contentWidth,
  });
  doc.moveDown(0.2);
}

sectionHeading(doc, "Technical strengths");
for (const item of expertise) {
  doc.font("Helvetica-Bold").fontSize(10).text(item.name, { width: contentWidth });
  doc.font("Helvetica").fontSize(9.5).text(item.description, { width: contentWidth });
  doc.moveDown(0.35);
}

sectionHeading(doc, "Core focus");
for (const line of coreFocus) {
  doc.font("Helvetica").fontSize(10).text(`• ${line}`, { width: contentWidth, indent: 10 });
  doc.moveDown(0.2);
}

doc.end();

stream.on("finish", () => {
  // eslint-disable-next-line no-console
  console.log(`Wrote ${path.relative(process.cwd(), outFile)}`);
});

stream.on("error", (err) => {
  console.error(err);
  process.exit(1);
});
