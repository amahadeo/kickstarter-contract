import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xd279c61bE7C4C861597c9b25C0217A9e8aca01d2"
);

export default instance;
