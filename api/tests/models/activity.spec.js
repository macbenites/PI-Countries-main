const { Activity, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Activity model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Activity.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Activity.create({ name: "Surf" });
      });
      it("should work when its a valid difficulty", () => {
        Activity.create({ difficulty: "4" });
      });
      it("should work when its a valid duration", () => {
        Activity.create({ duration: "2" });
      });
      it("should work when its a valid seasson", () => {
        Activity.create({ seasson: "Verano" });
      });
    });
  });
});
