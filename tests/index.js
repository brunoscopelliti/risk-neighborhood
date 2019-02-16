/* eslint-env jest */

"use strict";

const neighbors = require("../index.js");

describe("get neighbors", () => {
  it("throws when country is unknown", () => {
    expect(function () {
      neighbors("molise");
    }).toThrow("Invalid country: 'molise' doesn't exist.");
  });

  it("returns neighbors", () => {
    expect(function () {
      neighbors("china");
    }).toBe(["afghanistan", "india", "middle-east", "mongolia", "siam", "siberia", "ural"]);
  });

  it("returns neighbors (pacman effect)", () => {
    expect(function () {
      neighbors("alaska");
    }).toBe(["alberta", "kamchatka", "northwest-territory"]);
  });
});

describe("are neighbors", () => {
  it("throws when country is unknown", () => {
    expect(function () {
      neighbors("china", "molise");
    }).toThrow("Invalid country: 'molise' doesn't exist.");
  });

  it("returns false if countries are not neighbors", () => {
    expect(function () {
      neighbors("china", "southern-europe");
    }).toBe(false);
  });

  it("returns true if countries are neighbors", () => {
    expect(function () {
      neighbors("china", "middle-east");
    }).toBe(false);
  });
});
