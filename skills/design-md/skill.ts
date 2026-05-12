/**
 * design-md skill implementation
 *
 * This skill generates a DESIGN.md file for a given project or feature,
 * following the structure and guidelines defined in SKILL.md.
 */

import * as fs from "fs";
import * as path from "path";

/** Input parameters for the design-md skill */
export interface DesignMdInput {
  /** The name of the project or feature to document */
  projectName: string;
  /** A brief description of what is being designed */
  description: string;
  /** The primary goals or objectives of the design */
  goals: string[];
  /** Known constraints or limitations */
  constraints?: string[];
  /** Stakeholders or target audience */
  audience?: string[];
  /** Output directory where DESIGN.md will be written */
  outputDir?: string;
}

/** Result of running the design-md skill */
export interface DesignMdOutput {
  /** The generated markdown content */
  content: string;
  /** Path where the file was written, if outputDir was provided */
  filePath?: string;
}

/**
 * Generates a structured DESIGN.md document based on the provided inputs.
 *
 * @param input - Parameters describing the project or feature to document
 * @returns The generated markdown content and optional file path
 */
export function generateDesignMd(input: DesignMdInput): DesignMdOutput {
  const {
    projectName,
    description,
    goals,
    constraints = [],
    audience = [],
    outputDir,
  } = input;

  const timestamp = new Date().toISOString().split("T")[0];

  const sections: string[] = [
    `# Design: ${projectName}`,
    ``,
    `> Generated on ${timestamp}`,
    ``,
    `## Overview`,
    ``,
    description,
    ``,
    `## Goals`,
    ``,
    ...goals.map((goal) => `- ${goal}`),
    ``,
  ];

  if (constraints.length > 0) {
    sections.push(
      `## Constraints`,
      ``,
      ...constraints.map((c) => `- ${c}`),
      ``
    );
  }

  if (audience.length > 0) {
    sections.push(
      `## Audience`,
      ``,
      ...audience.map((a) => `- ${a}`),
      ``
    );
  }

  sections.push(
    `## Design Decisions`,
    ``,
    `_Document key design decisions and their rationale here._`,
    ``,
    `## Open Questions`,
    ``,
    `_List any unresolved questions or areas needing further investigation._`,
    ``
  );

  const content = sections.join("\n");

  let filePath: string | undefined;
  if (outputDir) {
    filePath = path.join(outputDir, "DESIGN.md");
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(filePath, content, "utf-8");
  }

  return { content, filePath };
}
