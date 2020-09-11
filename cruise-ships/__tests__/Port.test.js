/* globals describe it expect */
const Port = require("../src/Port.js");

describe("Port", () => {
  describe("can use different ports", () => {
    beforeEach(() => {
      port = new Port("Dover");

      ship = {
        addShip: jest.fn(),
      };

      dover = {
        ...port,
        name: "Dover",
        ships: [],
      };

      calais = {
        ...port,
        name: "Calais",
        ships: [],
      };

      itinerary = {
        ports: [dover, calais],
      };
    });

    it("can be instantiated", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });

    it("has a name", () => {
      expect(port.port).toBeTruthy();
    });

    it("can adda a ship", () => {
      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });

    it("can remove a ship", () => {
      const titanic = jest.fn();
      const queenMary = jest.fn();

      port.addShip(titanic);
      port.addShip(queenMary);
      port.removeShip(queenMary);

      expect(port.ships).toEqual([titanic]);
    });
  });
});
