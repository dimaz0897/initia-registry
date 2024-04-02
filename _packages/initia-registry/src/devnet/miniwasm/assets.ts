import { AssetList } from '@initia/initia-registry-types';
const info: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "miniwasm",
  "assets": [
    {
      "description": "The native token of Initia",
      "denom_units": [
        {
          "denom": "l2/771d639f30fbe45e3fbca954ffbe2fcc26f915f5513c67a4a2d0bc1d635bdefd",
          "exponent": 0
        },
        {
          "denom": "INIT",
          "exponent": 6
        }
      ],
      "base": "l2/771d639f30fbe45e3fbca954ffbe2fcc26f915f5513c67a4a2d0bc1d635bdefd",
      "display": "INIT",
      "name": "Initia Native Token",
      "symbol": "INIT",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/minimove/images/INIT.png",
          "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/minimove/images/INIT.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/minimove/images/INIT.png",
        "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/minimove/images/INIT.svg"
      }
    },
    {
      "description": "The fake USDC",
      "denom_units": [
        {
          "denom": "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
          "exponent": 0
        },
        {
          "denom": "USDC",
          "exponent": 6
        }
      ],
      "base": "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
      "display": "USDC",
      "name": "USDC",
      "symbol": "USDC",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/minimove/images/USDC.png",
          "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/minimove/images/USDC.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/minimove/images/USDC.png",
        "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/minimove/images/USDC.svg"
      }
    }
  ]
};
export default info;