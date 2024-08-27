require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
// https://eth-sepolia.g.alchemy.com/v2/SrI_-9Vt7Mj6RXG-jk8nirq9X9l0sNUa
module.exports = {
  networks: {
    opencampus: {
      url: `https://rpc.open-campus-codex.gelato.digital/`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
    etherscan: {
      apiKey: {
        opencampus: "your-etherscan-api-key",
      },
      customChains: [
        {
          network: "opencampus",
          chainId: 656476,
          urls: {
            apiURL: "https://opencampus-codex.blockscout.com/api",
            browserURL: "https://opencampus-codex.blockscout.com",
          },
        },
      ],
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};