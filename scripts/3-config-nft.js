import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x31bE729CA8344F0Ab5374862E4a9C1bF922BE1Df",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "WATER WORLD KEY",
        description: "This NFT will give you level 1 access to the country, WATER WORLD... and its DAO",
        image: readFileSync("scripts/assets/memberKey.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()