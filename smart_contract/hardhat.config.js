require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
// https://eth-sepolia.g.alchemy.com/v2/SrI_-9Vt7Mj6RXG-jk8nirq9X9l0sNUa
module.exports = {
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/E2MUYzIfYIF7pRQQ2PaEj8KhcjXMXviK',
      accounts: ['3dc5a139c3753d94c057555b5773506163d060ee5f30ace701a075ec206bd526'],
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