const angerEmotions = [
  "LetDown",
  "Humiliated",
  "Bitter",
  "Mad",
  "Aggressive",
  "Frustrated",
  "Distant",
  "Critical"
];

import { Fixture } from "../fixtures/fixture";
import { Ids, BaseButtons } from "../fixtures/testIds";
import { TouchableHighlightBase } from "react-native";

class CypressFixture extends Fixture {
  constructor(done) {
    super(done);
  }

  visit(route = "") {
    return this.add(() => cy.visit(route));
  }
  _get(id) {
    return cy.get(`[data-test-id='${id}']`);
  }

  click(id) {
    return this.add(() => this.addImpl(id))
  }

  clickImpl(id) {
    return this._get(id).click()
  }

  isVisible(id) {
    if (typeof id === "string") {
      return this.add(() => this.isVisibleImpl(id));
    }
    return this.addMany(id.map(each => this.isVisibleImpl(each)))
  }

  isVisibleImpl(id) {
    return this._get(id).should("be.visible");
  }
}

describe("Landing Page", function() {
  it("has a start button", function(done) {
    const fixture = new CypressFixture(done);
    fixture
      .visit()
      .isVisible(Ids.StartButton)
      .exec();
  });


  it("has base emotions", function(done) {
    const fixture = new CypressFixture(done)
    fixture.visit()
    .click(Ids.StartButton)
    .isVisible(BaseButtons)
    .exec()
  });
});
