import './Docs.css'

function Docs() {
  return (
    <main className="section docs-section">
      <div className="docs-container">
        <div className="docs-header">
          <div className="docs-breadcrumb">Home / Documentation</div>
          <h2 className="docs-title">Regen Portfolio Documentation</h2>
          <p className="docs-intro">Welcome to Regen Portfolio, the ultimate macOS menu bar crypto tracker. This documentation will help you get started and make the most of your portfolio tracking experience.</p>
        </div>

        <div className="docs-layout">
          <aside className="docs-sidebar">
            <div className="docs-logo">← Regen Portfolio</div>
            <nav className="docs-nav">
              <div className="docs-nav-group">
                <div className="docs-nav-heading">Getting Started</div>
                <a className="docs-link">Introduction</a>
                <a className="docs-link">Installation</a>
                <a className="docs-link">Setup</a>
              </div>
              <div className="docs-nav-group">
                <div className="docs-nav-heading">Features</div>
                <a className="docs-link">Multi-Wallet Support</a>
                <a className="docs-link">Real-time Tracking</a>
                <a className="docs-link">Privacy First</a>
                <a className="docs-link">Menu Bar Integration</a>
              </div>
              <div className="docs-nav-group">
                <div className="docs-nav-heading">Regen Protocol</div>
                <a className="docs-link">Tokenomics</a>
                <a className="docs-link">Roadmap</a>
                <a className="docs-link">Revenue Model</a>
              </div>
              <div className="docs-nav-group">
                <div className="docs-nav-heading">Reference</div>
                <a className="docs-link">Configuration</a>
                <a className="docs-link">Troubleshooting</a>
              </div>
            </nav>
          </aside>

          <article className="docs-content">
            <h3>Quick Start</h3>
            <p>Get up and running with Regen Portfolio in just a few steps:</p>
            <ol>
              <li>Download the app for your Mac chip type</li>
              <li>Install and launch the application</li>
              <li>Add your wallet addresses</li>
              <li>Start tracking your portfolio from the menu bar</li>
            </ol>

            <h3>Installation</h3>
            <h4>System Requirements</h4>
            <ul>
              <li>macOS 11.0 or later</li>
              <li>Apple Silicon (M1/M2/M3) or Intel processor</li>
              <li>500 MB of available storage</li>
            </ul>

            <h4>Download Options</h4>
            <div className="download-grid">
              <div className="download-card">
                <h5>Apple Silicon (M1/M2/M3)</h5>
                <p>Optimized for Apple's latest processors</p>
                <button className="btn btn-primary">Download for Apple Silicon</button>
              </div>
              <div className="download-card">
                <h5>Intel Macs</h5>
                <p>For Intel-based Mac computers</p>
                <button className="btn btn-primary">Download for Intel</button>
              </div>
            </div>

            <h3>Key Features</h3>
            <h4>Multi-Wallet Support</h4>
            <p>Track multiple cryptocurrency wallets across different blockchains from a single interface.</p>
            <h4>Real-time Updates</h4>
            <p>Get live portfolio updates with current market prices and total portfolio value.</p>
            <h4>Privacy First</h4>
            <p>No sign-in required. Your wallet data stays on your device for maximum privacy.</p>
            <h4>Menu Bar Integration</h4>
            <p>Quick access to your portfolio directly from the macOS menu bar without opening a full app.</p>

            <h3>Regen Protocol</h3>
            <p>Regen Protocol powers the ecosystem behind Regen Portfolio through the $REGEN token, creating a sustainable model for open-source development and user-centric features.</p>

            <h3>Tokenomics</h3>
            <p>$REGEN is a community-driven token launched on pump.fun, designed to fuel the growth and sustainability of the Regen Portfolio ecosystem. The token serves as both a governance mechanism and a utility token for premium features.</p>
            <h4>Creator Rewards Allocation</h4>
            <ul>
              <li>Open source project acquisitions</li>
              <li>Developer incentive programs</li>
              <li>Community-driven feature development</li>
              <li>Infrastructure and API cost coverage</li>
            </ul>
            <h4>Utility Functions</h4>
            <ul>
              <li>Premium feature access</li>
              <li>Advanced portfolio analytics</li>
              <li>Priority customer support</li>
              <li>Early access to new features</li>
            </ul>

            <h3>Development Roadmap</h3>
            <h4>Q4 2024 - API-Free Experience</h4>
            <p>Launch of integrated API infrastructure allowing users to download and use Regen Portfolio without requiring personal API key setup. This removes technical barriers and improves user onboarding experience significantly.</p>
            <h4>Ongoing - Open Source Acquisitions</h4>
            <p>Creator rewards from $REGEN will be strategically used to acquire complementary open-source projects, expanding the ecosystem and providing additional value to users through integrated tools and enhanced functionality.</p>

            <h3>Revenue Model</h3>
            <p>Coming Soon</p>
            <p>Regen Protocol will introduce a sustainable revenue model that benefits both users and the ecosystem:</p>
            <ul>
              <li>$REGEN Premium Subscriptions</li>
              <li>Token-Gated Features</li>
              <li>Enterprise Licensing</li>
            </ul>

            <h3>Open Source</h3>
            <p>Regen Portfolio is open source and available on GitHub.</p>
            <button className="btn btn-secondary">View on GitHub</button>
          </article>
        </div>
      </div>
    </main>
  )
}

export default Docs




