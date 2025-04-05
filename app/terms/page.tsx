import React from "react";

import "@/components/Terms.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
       <NavBar />
       <div className="terms-page">
   

   <div className="terms-content">
     <div className="terms-container">
       <div className="terms-box">
         <h1 className="terms-title">Terms of Service</h1>

         <div className="terms-text">
           <p className="terms-last-updated">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

           <h2 className="terms-subtitle">Agreement to Terms</h2>
           <p className="terms-paragraph">
             These Terms of Service ("Terms") govern your access to and use of the IMAGE AI application and services. By accessing or using IMAGE AI, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access or use our services.
           </p>

           <h2 className="terms-subtitle">Description of Service</h2>
           <p className="terms-paragraph">IMAGE AI is a Slack application that allows users to generate AI-created images based on text prompts. The service is available through integration with Slack and is subject to all applicable Slack terms and policies.</p>

           <h2 className="terms-subtitle">Subscription and Payments</h2>
           <p className="terms-paragraph">Some features of IMAGE AI require a paid subscription. By subscribing to a paid plan, you agree to pay the subscription fees according to your selected plan. Fees are non-refundable except as required by law or as explicitly stated in these Terms.</p>
           <p className="terms-paragraph">You authorize us to charge your payment method for all fees incurred. If your payment cannot be completed, we may suspend or terminate your access to paid features.</p>

           <h2 className="terms-subtitle">Usage Limits</h2>
           <p className="terms-paragraph">Each subscription plan includes specific usage limits. If you exceed these limits, additional usage may be restricted until the next billing cycle or until you upgrade your plan.</p>
           <ul className="terms-list">
             <li className="terms-list-item">
               <strong>Free Plan:</strong> Limited to 10 image generations per day
             </li>
             <li className="terms-list-item">
               <strong>Pro Plan:</strong> Limited to 200 image generations per day
             </li>
             <li className="terms-list-item">
               <strong>Unlimited Plan:</strong> No daily generation limit
             </li>
           </ul>

           <h2 className="terms-subtitle">User Conduct and Content</h2>
           <p className="terms-paragraph">You are responsible for all content you submit through IMAGE AI. You agree not to use the service to:</p>
           <ul className="terms-list">
             <li className="terms-list-item">Generate or distribute illegal, harmful, offensive, or inappropriate content</li>
             <li className="terms-list-item">Infringe on intellectual property rights</li>
             <li className="terms-list-item">Violate any applicable laws or regulations</li>
             <li className="terms-list-item">Attempt to disrupt or compromise the security of our service</li>
           </ul>
           <p className="terms-paragraph">We reserve the right to review, filter, or remove any content generated through our service that violates these guidelines.</p>

           <h2 className="terms-subtitle">Intellectual Property Rights</h2>
           <h3 className="terms-sub-subtitle">Our Intellectual Property</h3>
           <p className="terms-paragraph">The IMAGE AI application, including its design, code, and features, is owned by us and is protected by copyright, trademark, and other intellectual property laws.</p>

           <h3 className="terms-sub-subtitle">Generated Images</h3>
           <p className="terms-paragraph">Images generated through IMAGE AI are provided to you under a non-exclusive license. You may use these images for personal or business communication within your organization, but you may not resell or redistribute them as standalone products.</p>

           <h2 className="terms-subtitle">Limitation of Liability</h2>
           <p className="terms-paragraph">
             To the maximum extent permitted by law, in no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or goodwill, arising out of or in connection with these Terms or your use of the
             service.
           </p>
           <p className="terms-paragraph">Our total liability for all claims related to the service shall not exceed the amount you paid for the service in the last three months.</p>

           <h2 className="terms-subtitle">Service Availability and Modifications</h2>
           <p className="terms-paragraph">We strive to ensure that IMAGE AI is available at all times, but we do not guarantee uninterrupted access. We may modify, suspend, or discontinue any aspect of the service at any time without prior notice.</p>

           <h2 className="terms-subtitle">Termination</h2>
           <p className="terms-paragraph">We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.</p>
           <p className="terms-paragraph">You may cancel your subscription at any time through your account settings or by contacting us. Upon cancellation, your subscription will remain active until the end of your current billing period.</p>

           <h2 className="terms-subtitle">Changes to These Terms</h2>
           <p className="terms-paragraph">We reserve the right to modify these Terms at any time. If we make material changes, we will notify you through the service or by email. Your continued use of the service after such modifications constitutes your acceptance of the updated Terms.</p>

           <h2 className="terms-subtitle">Governing Law</h2>
           <p className="terms-paragraph">These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>

           <h2 className="terms-subtitle">Contact Us</h2>
           <p className="terms-paragraph">If you have any questions about these Terms, please contact us at legal@imageai.app.</p>
         </div>
       </div>
     </div>
   </div>
 </div>
 <Footer />
    </>
 
  );
};

export default Terms;
