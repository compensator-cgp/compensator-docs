# Rewards

Rewards are the mechanism that makes Compensator's marketplace thrive. By staking your COMP tokens in a Compensator contract, you can earn additional COMP tokens as compensation for your participation.

## How Rewards Work

Rewards in Compensator are designed to be:
- **Transparent**: Clear reward rates set by delegates
- **Real-time**: Rewards accrue continuously based on time and stake
- **Automatic**: Smart contract-based reward calculation and distribution
- **Secure**: On-chain reward distribution with reentrancy protection

## Reward Mechanics

### Time-Based Accrual

Rewards accumulate in real-time based on:
- **Staked Amount**: The quantity of COMP you've staked in the contract
- **Time Staked**: How long your COMP has been staked
- **Reward Rate**: The rate set by the delegate (COMP per second)

### Index-Based Calculation

The system uses a reward index mechanism:
- **Global Reward Index**: Tracks total rewards distributed across all stakers
- **Individual Start Index**: Records when you started staking
- **Reward Calculation**: New rewards = (current_index - start_index) × stake_amount

## Eligibility Requirements

### Delegate Requirements

For you to earn rewards, your delegate must:
1. **Create Compensator Instance**: Deploy their smart contract through the profile interface
2. **Fund Reward Pool**: Deposit COMP tokens to cover reward payments
3. **Set Reward Rate**: Configure a reward rate greater than 0.00%

### Staker Requirements

To be eligible for rewards, you must:
1. **Hold COMP Tokens**: Have COMP tokens in your connected wallet
2. **Stake in Compensator**: Deposit COMP into a delegate's Compensator contract
3. **Maintain Stake**: Keep your tokens staked to earn ongoing rewards

## How to Claim Rewards

### Step 1: Check Your Rewards

1. Connect your wallet to the Compensator platform
2. Navigate to your profile page
3. View your pending rewards in the rewards section

### Step 2: Claim Your Rewards

1. Click the "Claim" button next to your rewards
2. Review and confirm the claim transaction in your wallet
3. Wait for blockchain confirmation
4. Receive COMP tokens directly to your wallet

## Staking and Withdrawal

### Staking COMP

To start earning rewards:
1. **Approve COMP**: Allow the Compensator contract to spend your COMP tokens
2. **Deposit COMP**: Stake your COMP tokens in the contract
3. **Start Earning**: Rewards begin accumulating immediately

### Withdrawing Staked Tokens

To withdraw your staked COMP:
1. **Check Lock Period**: Ensure the minimum lock period has passed (7 days)
2. **No Active Proposals**: Verify no proposals are currently active
3. **Submit Withdrawal**: Call the withdrawal function
4. **Receive COMP**: Get your staked tokens back

## Lock Periods

### Minimum Lock Period

- **Standard Lock**: 7 days minimum for all staked COMP
- **Proposal Extension**: Additional 3 days if active proposals exist
- **Purpose**: Prevents gaming the reward system

### Withdrawal Restrictions

- **During Active Proposals**: Withdrawals are blocked
- **Before Lock Expiry**: Cannot withdraw until lock period ends
- **Emergency Withdrawals**: Not available during active governance

## Troubleshooting

### Common Issues

- **No Rewards Showing**: Verify delegated COMP and the delegate has set rate
- **Rewards Not Accruing**: Confirm the delegate has funded their reward pool
- **Claim Transaction Fails**: Ensure sufficient ETH for gas fees and verify you're on Mainnet
- **Cannot Withdraw Staked Tokens**: Check if lock period has expired and proposal has ended