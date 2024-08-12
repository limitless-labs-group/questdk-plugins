import {
  type IActionPlugin,
  PluginActionNotImplementedError,
} from "@rabbitholegg/questdk";

import {
  swap,
  getSupportedChainIds,
  getSupportedTokenAddresses,
} from "./LimitlessExchange";

export const TraderJoe: IActionPlugin = {
  pluginId: "limitless-exchange",
  getSupportedTokenAddresses,
  getSupportedChainIds,
  swap,
  bridge: async () => new PluginActionNotImplementedError(),
  mint: async () => new PluginActionNotImplementedError(),
};
