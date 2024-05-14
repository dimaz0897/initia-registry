import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "blackwing",
  chain_id: "tomcat-1",
  website: "https://blackwing.fi",
  pretty_name: "Blackwing",
  status: "live",
  network_type: "devnet",
  daemon_name: "minitiad",
  node_home: "$HOME/.minitia",
  key_algos: ["secp256k1"],
  slip44: 118,
  bech32_prefix: "init",
  fees: {
    fee_tokens: [
      {
        denom: "umin",
        fixed_min_gas_price: 0.15,
      },
      {
        denom:
          "l2/f23a6c45066bbb0fbee02d3505cc83671717d375baabc44769225752267f0d31",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
      {
        denom:
          "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
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
  description: "Blackwing Testnet",
  apis: {
    rpc: [
      {
        address:
          "https://maze-rpc-6a424cc4-117e-46db-ae81-640edd796868.ue1-prod.newmetric.xyz",
      },
    ],
    rest: [
      {
        address:
          "https://maze-rest-6a424cc4-117e-46db-ae81-640edd796868.ue1-prod.newmetric.xyz",
      },
    ],
  },
  explorers: [
    {
      kind: "explorer",
      url: "https://explorer.mahalo-3.initia.xyz/?layer=tomcat-1",
      tx_page:
        "https://explorer.mahalo-3.initia.xyz/tx/${txHash}?layer=tomcat-1",
      account_page:
        "https://explorer.mahalo-3.initia.xyz/address/${accountAddress}?layer=tomcat-1",
    },
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/tomcat-1",
      tx_page: "https://scan.initia.xyz/tomcat-1/txs/${txHash}",
      account_page:
        "https://scan.initia.xyz/tomcat-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/blackwing/images/BLACKWING.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/blackwing/images/BLACKWING.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/blackwing/images/BLACKWING.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/blackwing/images/BLACKWING.svg",
  },
  metadata: {
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/blackwing/assetlist.json",
    op_bridge_id: "54",
    op_denoms: ["uinit"],
    ibc_channels: [
      {
        chain_id: "mahalo-3",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "mahalo-3",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    minitia: {
      type: "minimove",
      version: "v0.2.10",
    },
  },
};
export default info;
