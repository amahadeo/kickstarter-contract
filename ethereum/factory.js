import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xC64431e3079DCD9666C57FeE96C9dF578e360BB3"
);

export default instance;
