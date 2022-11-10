// deploy/01_deploy_meta_multi_sig_wallet.js

const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = await getChainId();

    let initialOwner = "0x2cE3D0116b78D20eA77DA12bDBA9E78b3ed9D2CD";//<----------- set your frontend address here

    console.log(`\n\n 📡 Deploying with owner: ${initialOwner}...\n`);

    await deploy("MetaMultiSigWallet", {
        // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
        from: deployer,
        args: [chainId, [initialOwner], 1],
        log: true,
        waitConfirmations: 5,
    });

    console.log("\n\n MetaMultiSigWallet deployment success! ✅ \n");

    //Get deployed contract Object
    const MetaMultiSigWallet = await ethers.getContract("MetaMultiSigWallet", deployer);

    //get deployer signer
    const signerDeployer = await ethers.provider.getSigner(deployer);
    
    //uncomment this block to fund the chest
    // console.log(`\n\n 💵 💵 💵 Funding chest\n`);
    //Send funding transaction
//     const Txresult = await signerDeployer.sendTransaction({ to: MetaMultiSigWallet.address, value: ethers.utils.parseEther("10") }); 

//     if (Txresult) {
//         console.log("\n\n Funding transaction successful! ✅ \n");
//     }
    
};
module.exports.tags = ["MetaMultiSigWallet"];
