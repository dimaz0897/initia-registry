import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "tucana",
  chain_id: "tucana-69",
  website: "https://tucana.zone",
  pretty_name: "Tucana",
  status: "live",
  network_type: "devnet",
  bech32_prefix: "init",
  daemon_name: "tucanad",
  node_home: "$HOME/.initia",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "utuc",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
    ],
  },
  staking: {
    staking_tokens: [],
  },
  description: "Tucana Closed Testnet",
  apis: {
    rpc: [
      {
        address: "https://tucana-rpc.testnet.mesoops.net",
        provider: "Foundation",
      },
    ],
    rest: [
      {
        address: "https://tucana-lcd.testnet.mesoops.net",
        provider: "Foundation",
      },
    ],
    grpc: [
      {
        address: "grpc://34.87.121.251:9090",
        provider: "Foundation",
      },
    ],
  },
  explorers: [
    {
      kind: "explorer",
      url: "https://explorer.mahalo-2.initia.xyz/?layer=tucana",
      tx_page: "https://explorer.mahalo-2.initia.xyz/transactions?layer=tucana",
      account_page:
        "https://explorer.mahalo-2.initia.xyz/address/${accountAddress}?layer=l1%20testnet",
    },
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/tucana-69",
      tx_page: "https://scan.initia.xyz/tucana-69/txs/${txHash}",
      account_page:
        "https://scan.initia.xyz/tucana-69/accounts/${accountAddress}",
    },
  ],
  faucets: [
    {
      kind: "faucet",
      url: "https://faucet.testnet.mesoops.net/",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/initia/images/INIT.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/initia/images/INIT.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/initia/images/INIT.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/initia/images/INIT.svg",
  },
  metadata: {
    ibc_channels: [],
  },
};
export default info;
