import React from "react";

import "@/components/Privacy.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <NavBar />
      <div className="privacy-page">
        <div className="privacy-content">
          <div className="privacy-container">
            <div className="privacy-box">
              <h1 className="privacy-title">Privacy Policy</h1>

              <div className="privacy-text">
                <p className="privacy-last-updated">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

                <h2 className="privacy-subtitle">Introduction</h2>
                <p className="privacy-paragraph">IMAGE AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Slack application and related services.</p>
                <p className="privacy-paragraph">Please read this Privacy Policy carefully. By using IMAGE AI, you consent to the data practices described in this statement.</p>

                <h2 className="privacy-subtitle">Information We Collect</h2>
                <p className="privacy-paragraph">We collect several types of information from and about users of our application:</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">
                    <strong>Personal Information:</strong> We may collect personally identifiable information such as your name, email address, and Slack workspace ID when you register for our service or make a purchase.
                  </li>
                  <li className="privacy-list-item">
                    <strong>Usage Data:</strong> We collect information on how you interact with our application, including the prompts you submit, images you generate, and other usage statistics.
                  </li>
                  <li className="privacy-list-item">
                    <strong>Payment Information:</strong> If you make a purchase, we collect payment information necessary to process your transaction. This is handled securely through our payment processor, Stripe.
                  </li>
                </ul>

                <h2 className="privacy-subtitle">How We Use Your Information</h2>
                <p className="privacy-paragraph">We use the information we collect to:</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">Provide, maintain, and improve our services</li>
                  <li className="privacy-list-item">Process and manage your subscription</li>
                  <li className="privacy-list-item">Monitor and analyze usage patterns and trends</li>
                  <li className="privacy-list-item">Communicate with you about service-related notices</li>
                  <li className="privacy-list-item">Protect against, identify, and prevent fraud and other unlawful activity</li>
                </ul>

                <h2 className="privacy-subtitle">Data Retention and Privacy</h2>
                <p className="privacy-paragraph">We do not store the image prompts you submit or the images generated beyond what is necessary to provide the service. Images are generated in real-time and delivered directly to your Slack workspace.</p>

                <h2 className="privacy-subtitle">GDPR Compliance</h2>
                <p className="privacy-paragraph">For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). This means you have certain rights regarding your personal data, including:</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">The right to access your personal data</li>
                  <li className="privacy-list-item">The right to rectification of inaccurate data</li>
                  <li className="privacy-list-item">The right to erasure ("right to be forgotten")</li>
                  <li className="privacy-list-item">The right to restrict processing</li>
                  <li className="privacy-list-item">The right to data portability</li>
                  <li className="privacy-list-item">The right to object to processing</li>
                </ul>
                <p className="privacy-paragraph">To exercise these rights, please contact us at privacy@imageai.app.</p>

                <h2 className="privacy-subtitle">Cookies and Similar Technologies</h2>
                <p className="privacy-paragraph">We use cookies and similar tracking technologies to track activity on our website and collect certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
                <p className="privacy-paragraph">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>

                <h2 className="privacy-subtitle">Third-Party Services</h2>
                <p className="privacy-paragraph">We use third-party services such as Slack and Stripe to provide our application. These services have their own privacy policies, and we encourage you to review them:</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">
                    <a href="https://slack.com/privacy-policy" className="privacy-link" target="_blank" rel="noopener noreferrer">
                      Slack Privacy Policy
                    </a>
                  </li>
                  <li className="privacy-list-item">
                    <a href="https://stripe.com/privacy" className="privacy-link" target="_blank" rel="noopener noreferrer">
                      Stripe Privacy Policy
                    </a>
                  </li>
                </ul>

                <h2 className="privacy-subtitle">Changes to This Privacy Policy</h2>
                <p className="privacy-paragraph">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                <p className="privacy-paragraph">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                <h2 className="privacy-subtitle">Contact Us</h2>
                <p className="privacy-paragraph">If you have any questions about this Privacy Policy, please contact us at privacy@imageai.app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
