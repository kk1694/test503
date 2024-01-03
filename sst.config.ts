import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "test503",
      region: _input.stage === "prod" ? "us-east-1" : 'eu-west-2',
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
