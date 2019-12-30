/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../element-form.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<element-form></element-form>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
