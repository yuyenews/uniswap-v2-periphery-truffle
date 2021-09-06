const Migrations = artifacts.require("Migrations");
const UniswapV2Router01 = artifacts.require("UniswapV2Router01");
const UniswapV2Router02 = artifacts.require("UniswapV2Router02");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(UniswapV2Router01, "factory address", "WETH9");
  deployer.deploy(UniswapV2Router02, "factory address", "WETH9");
};
