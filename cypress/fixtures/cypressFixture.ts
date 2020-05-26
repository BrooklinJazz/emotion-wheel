import { Fixture } from "./fixture";

export class CypressFixture extends Fixture {
  cy: any;
  constructor(done, cy) {
    super(done);
    this.cy = cy;
  }

  visit(route = "") {
    return this.add(() => this.cy.visit(route));
  }
  _get(id) {
    return this.cy.get(`[data-test-id='${id}']`);
  }

  click(id) {
    return this.add(() => this.clickImpl(id));
  }

  clickImpl(id) {
    return this._get(id).click();
  }

  isVisible(id) {
    if (typeof id === "string") {
      return this.add(() => this.isVisibleImpl(id));
    }
    return this.addMany(id.map(each => this.isVisibleImpl(each)));
  }

  isVisibleImpl(id) {
    return this._get(id).should("be.visible");
  }
}
