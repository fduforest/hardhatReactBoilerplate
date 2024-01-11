// deploy/1_deploy_Voting.ts
import { ethers } from "hardhat"
import { artifacts } from "hardhat"
import path from "path"
import fs from "fs"

async function main() {
  const token = await ethers.deployContract("Token")

  await token.waitForDeployment()

  console.log(`Contract deployed to ${token.target}`)

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

function saveFrontendFiles(token : any) {
  
  const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ Token: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("Token");

  fs.writeFileSync(
    path.join(contractsDir, "Token.json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
}
