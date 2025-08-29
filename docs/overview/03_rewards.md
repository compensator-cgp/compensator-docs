# Rewards

Rewards are the mechanism that makes Compensator's marketplace thrive. By delegating your COMP tokens to a Compensator contract, you can earn additional COMP tokens as compensation for your participation.

## How Rewards Work

Rewards in Compensator are designed to be:
- **Transparent**: Clear reward rates set by delegates
- **Real-time**: Rewards accrue continuously based on time and delegation
- **Automatic**: Smart contract-based reward calculation and distribution
- **Secure**: On-chain reward distribution with reentrancy protection

## Reward Mechanics

### Time-Based Accrual

Rewards accumulate in real-time based on:
- **Delegated Amount**: The quantity of COMP you've delegated to the contract
- **Time Delegated**: How long your COMP has been delegated
- **Reward Rate**: The rate set by the delegate (COMP per second)

### Index-Based Calculation

The system uses a reward index mechanism:
- **Global Reward Index**: Tracks total rewards distributed across all delegators
- **Individual Start Index**: Records when you started delegating
- **Reward Calculation**: New rewards = (current_index - start_index) × delegated_amount

## Eligibility Requirements

### Delegate Requirements

For you to earn rewards, your delegate must:
1. **Create Compensator Instance**: Deploy their smart contract through the profile interface
2. **Fund Reward Pool**: Deposit COMP tokens to cover reward payments
3. **Set Reward Rate**: Configure a reward rate greater than 0.00%

### Delegator Requirements

To be eligible for rewards, you must:
1. **Hold COMP Tokens**: Have COMP tokens in your connected wallet
2. **Delegate to Compensator**: Delegate COMP to a delegate's Compensator contract
3. **Maintain Delegation**: Keep your tokens delegated to earn ongoing rewards

## How to Delegate and Earn Rewards

### Step 1: Delegate Your COMP

1. Connect your wallet to the Compensator platform
2. Navigate to a delegate's profile page
3. Click "Delegate" and enter the amount of COMP to delegate
4. Confirm the delegation transaction in your wallet

### Step 2: Start Earning Rewards

Once delegated:
- Rewards begin accumulating immediately based on the delegate's reward rate
- You can view your pending rewards in your profile page
- Rewards accrue continuously while your COMP remains delegated

### Step 3: Claim Your Rewards

1. Navigate to your profile page
2. View your pending rewards in the rewards section
3. Click the "Claim" button next to your rewards
4. Review and confirm the claim transaction in your wallet
5. Wait for blockchain confirmation
6. Receive COMP tokens directly to your wallet





## Troubleshooting

### Common Issues

- **No Rewards Showing**: Verify delegated COMP and the delegate has set rate
- **Rewards Not Accruing**: Confirm the delegate has funded their reward pool
- **Claim Transaction Fails**: Ensure sufficient ETH for gas fees and verify you're on Mainnet