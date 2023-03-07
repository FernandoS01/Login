"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var import_express2 = __toESM(require("express"));

// src/Routes/Routes.ts
var import_express = __toESM(require("express"));

// src/Controllers/UserController.ts
var UserController = class {
  static getUsers(req, res) {
    res.send("Hello World");
  }
  static addUser(req, res) {
    console.log(req.body);
  }
};

// src/Controllers/LoginController.ts
var LoginController = class {
  static UserLogin(req, res) {
    const { user, password } = req.body;
  }
};

// src/Routes/Routes.ts
var routes = import_express.default.Router();
routes.get("/", UserController.getUsers);
routes.post("/", UserController.addUser);
routes.post("/login", LoginController.UserLogin);

// src/server.ts
var import_cors = __toESM(require("cors"));
var app = (0, import_express2.default)();
app.use(import_express2.default.json());
app.use((0, import_cors.default)());
app.use(routes);
app.listen(process.env.PORT, () => {
  console.log("Server running...");
});
