/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../element-layout.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<element-layout></element-layout>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
