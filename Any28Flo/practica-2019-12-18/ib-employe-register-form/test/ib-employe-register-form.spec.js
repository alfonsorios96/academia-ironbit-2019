/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ib-employe-register-form.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ib-employe-register-form></ib-employe-register-form>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
