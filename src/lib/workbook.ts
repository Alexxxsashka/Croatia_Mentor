import { workbookTexts } from "./workbook-data";
import { workbookWordsByLesson } from "./workbook-vocabulary";

export function getWorkbook(id: string) {
  const rows = workbookTexts[id].trim().split("\n").map((line) => {
    const [, before, answer, after, hint = ""] = /^(.*?)\[([^\]]+)\](.*?)(?: \(([^()]*)\))?$/.exec(line)!;
    return { before, answer, after, hint, sentence: before + answer + after };
  });
  return { rows, words: workbookWordsByLesson[id] };
}

export const theoryWorkbooks: Record<string, string[]> = {
  phonetics: ["a1-dictation-1"],
  cases: ["a2-grammar-1", "a2-grammar-2", "a2-grammar-5", "a2-grammar-6", "b1-grammar-3"],
  verbs: ["a1-grammar-2", "a1-grammar-4", "a2-grammar-3", "a2-grammar-4", "a2-grammar-8", "b1-grammar-1", "b1-grammar-2", "b2-grammar-1", "b2-grammar-2"],
  numbers: ["a1-grammar-3"],
  topics: ["a1-reading-1", "a2-communication-1", "a2-communication-2", "b1-reading-2", "b1-reading-3", "b2-communication-1", "c2-communication-1"],
  pronouns_prepositions: ["a1-grammar-1", "a1-grammar-6", "a2-grammar-2", "b1-grammar-3"],
  advanced_grammar: ["a1-grammar-5", "a1-grammar-7", "a2-grammar-7", "b2-grammar-1", "b2-grammar-2", "c1-grammar-1", "c1-grammar-2", "c2-grammar-1"],
};
