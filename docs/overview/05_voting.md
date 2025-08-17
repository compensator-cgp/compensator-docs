# Voting

Compensator enables delegates to cast votes on Compound proposals using voting power from their delegators. When delegates vote correctly, they earn 100% of the staked rewards from delegators who staked on the winning side.

## How Voting Works

### Vote Casting Process

1. **Proposal Detection**: The Compensator contract automatically detects new DAO proposals
2. **Voting Power**: Delegates can cast votes using the total voting power delegated to the contract
3. **Vote Execution**: Votes are cast through the Compound Governor contract using the `castVote` function
4. **Reward Distribution**: If the delegate votes correctly, they earn 100% of the winning stakes

### Vote Functions

The Compensator contract provides two main voting functions:

```solidity
// Vote with optional reason
function castVote(uint256 proposalId, uint8 support, string memory reason) external

// Vote without reason
function castVote(uint256 proposalId, uint8 support) external
```

**Parameters:**
- `proposalId`: The ID of the Compound DAO proposal
- `support`: Vote direction (0 = Against, 1 = For)
- `reason`: Optional explanation for the vote (can be empty string)

**Requirements:**
- Only the contract owner (delegate) can call these functions
- Proposal must be in Active or Pending state
- Cannot vote twice on the same proposal

## Delegate Rewards

When a delegate votes correctly on a proposal:
- **Winning Stakes**: Delegates earn 100% of all stakes placed on the winning side
- **Performance Tracking**: Successful votes and total rewards are tracked
- **Automatic Distribution**: Rewards are transferred to the delegate

## Proposal Lifecycle

### 1. Proposal Detection
- New proposals are automatically detected when staking occurs
- Proposal state is tracked (Active, Pending, etc.)
- Creation timestamps are recorded

### 2. Voting Period
- Delegates can cast votes during Active or Pending state
- Voting power is calculated from all delegated COMP
- Votes are recorded with full transparency

### 3. Resolution
- Proposals are resolved based on the Compound Governor state
- Winning stakes are distributed to delegates
- Losing stakes are returned to delegators

### 4. Stake Reclamation
- Delegators can reclaim losing stakes after resolution
- Automatic resolution after 30 days if not manually resolved

## Vote Information Storage

The contract stores comprehensive vote information for transparency:

### Vote Tracking
- **Vote Status**: Whether the contract has voted on a proposal
- **Vote Direction**: The direction of each vote (For/Against)
- **Voting Power**: Total voting power used in each vote
- **Timing**: Block number and timestamp of each vote
- **Transaction Hash**: Blockchain transaction for verification
- **Reason**: Optional explanation for the vote

### Performance Metrics
- **Total Votes**: Number of proposals voted on
- **Successful Votes**: Number of correct votes
- **Total Rewards**: Cumulative rewards earned from voting
- **Voting Power Used**: Total voting power across all votes

## Best Practices for Delegates

### 1. Timely Voting
- Cast votes early in the voting period
- Monitor for new proposals regularly
- Avoid waiting until the last minute

### 2. Vote Analysis
- Research proposals thoroughly before voting
- Consider the impact on the Compound ecosystem
- Align votes with delegator interests

### 3. Transparency
- Provide clear reasoning for votes when possible
- Communicate with delegators about voting decisions
- Maintain consistent voting patterns

## Integration with Staking

The voting system is tightly integrated with the staking mechanism:

1. **Delegators Stake**: Users stake COMP on proposal outcomes (For/Against)
2. **Delegate Votes**: Delegate votes in alignment with delegator's stakes
3. **Delegate Compensation**: Delegate earns 100% of winning stakes when voting correctly
4. **Delegator Satisfaction**: Delegators get their desired governance outcome
5. **Stake Protection**: Delegators get stake back if delegate votes incorrectly

This creates a complete incentive system where:
- Delegators get their desired outcomes (but forfeit COMP when delegate votes correctly)
- Delegates are compensated with the staked COMP for voting in alignment with their delegators
- The entire ecosystem benefits from aligned governance decisions

## Security Features

### Reentrancy Protection
- All voting functions use ReentrancyGuard
- Prevents multiple vote execution in a single transaction

### State Validation
- Proposals must be in valid voting states
- Cannot vote on already resolved proposals
- Prevents duplicate voting on the same proposal

### Owner-Only Access
- Only the contract owner can cast votes
- Prevents unauthorized voting
- Maintains delegate accountability