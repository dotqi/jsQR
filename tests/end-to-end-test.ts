import * as jsQR from "../src";
import tests from "../test-data";
import { loadPng } from "../tests/helpers";

describe("end to end", () => {
  tests.forEach((t) => {
    it(t.name, async () => {
      const inputImage = await loadPng(t.inputPath);

      const output = jsQR.readQR(inputImage.data, inputImage.width, inputImage.height);
      expect(!!output).toBe(t.successful);
      if (output) {
        expect(output.binaryData).toEqual(t.decodedBytes);
      }
    });
  });
});
