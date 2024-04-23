import { Chain } from "@initia/initia-registry-types";

import * as _tucana from "./tucana";
import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _initia from "./initia";
import * as _controverse from "./controverse";
import * as _blackwing from "./blackwing";

const chains: Chain[] = [
  _tucana.chain,
  _miniwasm.chain,
  _minimove.chain,
  _initia.chain,
  _controverse.chain,
  _blackwing.chain,
];

export default chains;
