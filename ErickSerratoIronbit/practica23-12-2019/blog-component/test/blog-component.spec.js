/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../blog-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<blog-component></blog-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
