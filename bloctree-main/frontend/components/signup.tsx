import React from 'react';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="signin-container"> 
      <h2>Sign Up</h2>
      <label htmlFor="walletAddress">Enter your Wallet Address</label>
      <input type="text" id="walletAddress" name="walletAddress" placeholder="Wallet Address" />
      
      <div className="signin-footer">
        <p>Already registered? <Link href="/signin">Sign in</Link></p>
        <div className="already-signed-up">
    Already Signed Up? <a href="/signin">Sign In</a>
</div>

      </div>
    </div>
    
  );
};

export default SignUp;
