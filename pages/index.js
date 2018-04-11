import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
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

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        {this.renderCampaigns()}
        <Button content="Create Campaign" icon="add circle" primary />
      </div>
    );
  }
}

export default CampaignIndex;
