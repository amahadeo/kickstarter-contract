import React, { Component } from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends Component {
  static async getInitialProps() {
    // this is a lifecycle method specific to next.js
    // Next.js ignores all other lifecycle methods during server rendering
    // need to include 'static' to define this method as a class method (next.js api)
    // as Next tries to call this w/o having to render instance of component first
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns }; // this object provided to component as props
  }

  render() {
    return <div>{this.props.campaigns[0]}</div>;
  }
}

export default CampaignIndex;
