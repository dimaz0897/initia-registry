import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "tucana",
  chain_id: "birdee-1",
  pretty_name: "Tucana",
  status: "live",
  website: "https://tucana.zone/",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "minitiad",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "utuc",
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0,
      },
    ],
  },
  description: "Tucana Public Testnet",
  apis: {
    rpc: [
      {
        address:
          "https://maze-rpc-c9796789-107d-49ab-b6de-059724d2a91d.ue1-prod.newmetric.xyz",
      },
    ],
    rest: [
      {
        address:
          "https://maze-rest-c9796789-107d-49ab-b6de-059724d2a91d.ue1-prod.newmetric.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc://34.228.6.88:31002",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/birdee-1",
      tx_page: "https://scan.testnet.initia.xyz/birdee-1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/birdee-1/accounts/${accountAddress}",
    },
  ],
  faucets: [
    {
      kind: "faucet",
      url: "https://faucet.birdee-1.tucana.zone/",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA.svg",
  },
  metadata: {
    op_bridge_id: "14",
    op_denoms: ["uinit"],
    executor_uri:
      "https://maze-executor-c9796789-107d-49ab-b6de-059724d2a91d.ue1-prod.newmetric.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-1",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/assetlist.json",
    minitia: {
      type: "minimove",
      version: "v0.2.12",
    },
  },
};
export default info;
