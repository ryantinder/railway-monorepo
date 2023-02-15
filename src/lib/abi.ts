//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
    {
        type: 'event',
        inputs: [
            { name: 'owner', type: 'address', indexed: true },
            { name: 'spender', type: 'address', indexed: true },
            { name: 'value', type: 'uint256', indexed: false },
        ],
        name: 'Approval',
    },
    {
        type: 'event',
        inputs: [
            { name: 'from', type: 'address', indexed: true },
            { name: 'to', type: 'address', indexed: true },
            { name: 'value', type: 'uint256', indexed: false },
        ],
        name: 'Transfer',
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            { name: 'owner', type: 'address' },
            { name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ type: 'uint256' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'spender', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ type: 'bool' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'decimals',
        outputs: [{ type: 'uint8' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'name',
        outputs: [{ type: 'string' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'symbol',
        outputs: [{ type: 'string' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'totalSupply',
        outputs: [{ type: 'uint256' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'recipient', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ type: 'bool' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'sender', type: 'address' },
            { name: 'recipient', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ type: 'bool' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'spender', type: 'address' },
            { name: 'addedValue', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ type: 'bool' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'spender', type: 'address' },
            { name: 'subtractedValue', type: 'uint256' },
        ],
        name: 'decreaseAllowance',
        outputs: [{ type: 'bool' }],
    },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
    {
        type: 'event',
        inputs: [
            { name: 'owner', type: 'address', indexed: true },
            { name: 'spender', type: 'address', indexed: true },
            { name: 'tokenId', type: 'uint256', indexed: true },
        ],
        name: 'Approval',
    },
    {
        type: 'event',
        inputs: [
            { name: 'owner', type: 'address', indexed: true },
            { name: 'operator', type: 'address', indexed: true },
            { name: 'approved', type: 'bool', indexed: false },
        ],
        name: 'ApprovalForAll',
    },
    {
        type: 'event',
        inputs: [
            { name: 'from', type: 'address', indexed: true },
            { name: 'to', type: 'address', indexed: true },
            { name: 'tokenId', type: 'uint256', indexed: true },
        ],
        name: 'Transfer',
    },
    {
        stateMutability: 'payable',
        type: 'function',
        inputs: [
            { name: 'spender', type: 'address' },
            { name: 'tokenId', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'tokenId', type: 'uint256' }],
        name: 'getApproved',
        outputs: [{ type: 'address' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            { name: 'owner', type: 'address' },
            { name: 'operator', type: 'address' },
        ],
        name: 'isApprovedForAll',
        outputs: [{ type: 'bool' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'name',
        outputs: [{ type: 'string' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'tokenId', type: 'uint256' }],
        name: 'ownerOf',
        outputs: [{ name: 'owner', type: 'address' }],
    },
    {
        stateMutability: 'payable',
        type: 'function',
        inputs: [
            { name: 'from', type: 'address' },
            { name: 'to', type: 'address' },
            { name: 'tokenId', type: 'uint256' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'from', type: 'address' },
            { name: 'to', type: 'address' },
            { name: 'id', type: 'uint256' },
            { name: 'data', type: 'bytes' },
        ],
        name: 'safeTransferFrom',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'operator', type: 'address' },
            { name: 'approved', type: 'bool' },
        ],
        name: 'setApprovalForAll',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'symbol',
        outputs: [{ type: 'string' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'index', type: 'uint256' }],
        name: 'tokenByIndex',
        outputs: [{ type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            { name: 'owner', type: 'address' },
            { name: 'index', type: 'uint256' },
        ],
        name: 'tokenByIndex',
        outputs: [{ name: 'tokenId', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ type: 'string' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'totalSupply',
        outputs: [{ type: 'uint256' }],
    },
    {
        stateMutability: 'payable',
        type: 'function',
        inputs: [
            { name: 'sender', type: 'address' },
            { name: 'recipient', type: 'address' },
            { name: 'tokenId', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [],
    },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC4626
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc4626ABI = [
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'owner', type: 'address', indexed: true },
            { name: 'spender', type: 'address', indexed: true },
            { name: 'value', type: 'uint256', indexed: false },
        ],
        name: 'Approval',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'sender', type: 'address', indexed: true },
            { name: 'receiver', type: 'address', indexed: true },
            { name: 'assets', type: 'uint256', indexed: false },
            { name: 'shares', type: 'uint256', indexed: false },
        ],
        name: 'Deposit',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'from', type: 'address', indexed: true },
            { name: 'to', type: 'address', indexed: true },
            { name: 'value', type: 'uint256', indexed: false },
        ],
        name: 'Transfer',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'sender', type: 'address', indexed: true },
            { name: 'receiver', type: 'address', indexed: true },
            { name: 'owner', type: 'address', indexed: true },
            { name: 'assets', type: 'uint256', indexed: false },
            { name: 'shares', type: 'uint256', indexed: false },
        ],
        name: 'Withdraw',
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            { name: 'owner', type: 'address' },
            { name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ type: 'uint256' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'spender', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ type: 'bool' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'asset',
        outputs: [{ name: 'assetTokenAddress', type: 'address' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'shares', type: 'uint256' }],
        name: 'convertToAssets',
        outputs: [{ name: 'assets', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'assets', type: 'uint256' }],
        name: 'convertToShares',
        outputs: [{ name: 'shares', type: 'uint256' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'assets', type: 'uint256' },
            { name: 'receiver', type: 'address' },
        ],
        name: 'deposit',
        outputs: [{ name: 'shares', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'caller', type: 'address' }],
        name: 'maxDeposit',
        outputs: [{ name: 'maxAssets', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'caller', type: 'address' }],
        name: 'maxMint',
        outputs: [{ name: 'maxShares', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'owner', type: 'address' }],
        name: 'maxRedeem',
        outputs: [{ name: 'maxShares', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'owner', type: 'address' }],
        name: 'maxWithdraw',
        outputs: [{ name: 'maxAssets', type: 'uint256' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'shares', type: 'uint256' },
            { name: 'receiver', type: 'address' },
        ],
        name: 'mint',
        outputs: [{ name: 'assets', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'assets', type: 'uint256' }],
        name: 'previewDeposit',
        outputs: [{ name: 'shares', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'shares', type: 'uint256' }],
        name: 'previewMint',
        outputs: [{ name: 'assets', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'shares', type: 'uint256' }],
        name: 'previewRedeem',
        outputs: [{ name: 'assets', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'assets', type: 'uint256' }],
        name: 'previewWithdraw',
        outputs: [{ name: 'shares', type: 'uint256' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'shares', type: 'uint256' },
            { name: 'receiver', type: 'address' },
            { name: 'owner', type: 'address' },
        ],
        name: 'redeem',
        outputs: [{ name: 'assets', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'totalAssets',
        outputs: [{ name: 'totalManagedAssets', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'totalSupply',
        outputs: [{ type: 'uint256' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'to', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ type: 'bool' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'from', type: 'address' },
            { name: 'to', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ type: 'bool' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'assets', type: 'uint256' },
            { name: 'receiver', type: 'address' },
            { name: 'owner', type: 'address' },
        ],
        name: 'withdraw',
        outputs: [{ name: 'shares', type: 'uint256' }],
    },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// resonate
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const resonateABI = [
    {
        stateMutability: 'nonpayable',
        type: 'constructor',
        inputs: [
            { name: '_router', internalType: 'address', type: 'address' },
            {
                name: '_proxyOutputReceiver',
                internalType: 'address',
                type: 'address',
            },
            { name: '_proxyAddressLock', internalType: 'address', type: 'address' },
            { name: '_resonateHelper', internalType: 'address', type: 'address' },
            {
                name: '_smartWalletWhitelist',
                internalType: 'address',
                type: 'address',
            },
            { name: '_priceProvider', internalType: 'address', type: 'address' },
            { name: '_dev_address', internalType: 'address', type: 'address' },
        ],
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'fnftIds',
                internalType: 'uint256[]',
                type: 'uint256[]',
                indexed: false,
            },
            {
                name: 'claimer',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'amountInterest',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'BatchInterestClaimed',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'numPackets',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'principalFNFT',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
        ],
        name: 'CapitalActivated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'mintTo',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'token',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'amountTokens',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'fnftId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'DepositERC20OutputReceiver',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'dequeuer',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'position',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
            {
                name: 'order',
                internalType: 'struct IResonate.Order',
                type: 'tuple',
                components: [
                    {
                        name: 'packetsRemaining',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    { name: 'depositedShares', internalType: 'uint256', type: 'uint256' },
                    { name: 'owner', internalType: 'bytes32', type: 'bytes32' },
                ],
                indexed: false,
            },
        ],
        name: 'DequeueConsumer',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'dequeuer',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'position',
                internalType: 'uint64',
                type: 'uint64',
                indexed: false,
            },
            {
                name: 'order',
                internalType: 'struct IResonate.Order',
                type: 'tuple',
                components: [
                    {
                        name: 'packetsRemaining',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    { name: 'depositedShares', internalType: 'uint256', type: 'uint256' },
                    { name: 'owner', internalType: 'bytes32', type: 'bytes32' },
                ],
                indexed: false,
            },
        ],
        name: 'DequeueProvider',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            { name: 'addr', internalType: 'address', type: 'address', indexed: true },
            {
                name: 'position',
                internalType: 'uint64',
                type: 'uint64',
                indexed: true,
            },
            {
                name: 'shouldFarm',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: 'order',
                internalType: 'struct IResonate.Order',
                type: 'tuple',
                components: [
                    {
                        name: 'packetsRemaining',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    { name: 'depositedShares', internalType: 'uint256', type: 'uint256' },
                    { name: 'owner', internalType: 'bytes32', type: 'bytes32' },
                ],
                indexed: false,
            },
        ],
        name: 'EnqueueConsumer',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            { name: 'addr', internalType: 'address', type: 'address', indexed: true },
            {
                name: 'position',
                internalType: 'uint64',
                type: 'uint64',
                indexed: true,
            },
            {
                name: 'shouldFarm',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: 'order',
                internalType: 'struct IResonate.Order',
                type: 'tuple',
                components: [
                    {
                        name: 'packetsRemaining',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    { name: 'depositedShares', internalType: 'uint256', type: 'uint256' },
                    { name: 'owner', internalType: 'bytes32', type: 'bytes32' },
                ],
                indexed: false,
            },
        ],
        name: 'EnqueueProvider',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'isPrincipal',
                internalType: 'bool',
                type: 'bool',
                indexed: true,
            },
            {
                name: 'fnftId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'quantityFNFTs',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'FNFTCreation',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'isPrincipal',
                internalType: 'bool',
                type: 'bool',
                indexed: true,
            },
            {
                name: 'fnftId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'quantityFNFTs',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'FNFTRedeemed',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'amountTokens',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'FeeCollection',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'fnftId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'claimer',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'InterestClaimed',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'vaultAsset',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'paymentAsset',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'oracleDispatch',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'OracleRegistered',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'amountPackets',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'fullyWithdrawn',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'OrderWithdrawal',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'previousOwner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'OwnershipTransferred',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'poolId',
                internalType: 'bytes32',
                type: 'bytes32',
                indexed: true,
            },
            {
                name: 'asset',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'vault',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'payoutAsset',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'rate',
                internalType: 'uint128',
                type: 'uint128',
                indexed: false,
            },
            {
                name: 'addInterestRate',
                internalType: 'uint128',
                type: 'uint128',
                indexed: false,
            },
            {
                name: 'lockupPeriod',
                internalType: 'uint32',
                type: 'uint32',
                indexed: false,
            },
            {
                name: 'packetSize',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'isFixedTerm',
                internalType: 'bool',
                type: 'bool',
                indexed: false,
            },
            {
                name: 'poolName',
                internalType: 'string',
                type: 'string',
                indexed: false,
            },
            {
                name: 'creator',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'PoolCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'underlyingVault',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'vaultAdapter',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'vaultAsset',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'VaultAdapterRegistered',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'caller',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'token',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'amountTokens',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'fnftId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: true,
            },
            {
                name: 'extraData',
                internalType: 'bytes',
                type: 'bytes',
                indexed: false,
            },
        ],
        name: 'WithdrawERC20OutputReceiver',
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'PROXY_ADDRESS_LOCK',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'PROXY_OUTPUT_RECEIVER',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'REGISTRY_ADDRESS',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'RESONATE_HELPER',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'activated',
        outputs: [
            { name: 'principalId', internalType: 'uint256', type: 'uint256' },
            { name: 'sharesPerPacket', internalType: 'uint256', type: 'uint256' },
            {
                name: 'startingSharesPerPacket',
                internalType: 'uint256',
                type: 'uint256',
            },
            { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'fnftIds', internalType: 'uint256[][]', type: 'uint256[][]' },
            { name: 'recipient', internalType: 'address', type: 'address' },
        ],
        name: 'batchClaimInterest',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'fnftId', internalType: 'uint256', type: 'uint256' },
            { name: 'recipient', internalType: 'address', type: 'address' },
        ],
        name: 'claimInterest',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            { name: '', internalType: 'bytes32', type: 'bytes32' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'consumerQueue',
        outputs: [
            { name: 'packetsRemaining', internalType: 'uint256', type: 'uint256' },
            { name: 'depositedShares', internalType: 'uint256', type: 'uint256' },
            { name: 'owner', internalType: 'bytes32', type: 'bytes32' },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'asset', internalType: 'address', type: 'address' },
            { name: 'vault', internalType: 'address', type: 'address' },
            { name: 'rate', internalType: 'uint128', type: 'uint128' },
            { name: 'additionalRate', internalType: 'uint128', type: 'uint128' },
            { name: 'lockupPeriod', internalType: 'uint32', type: 'uint32' },
            { name: 'packetSize', internalType: 'uint256', type: 'uint256' },
            { name: 'poolName', internalType: 'string', type: 'string' },
        ],
        name: 'createPool',
        outputs: [{ name: 'poolId', internalType: 'bytes32', type: 'bytes32' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'fnftIdToIndex',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
            { name: 'amount', internalType: 'uint112', type: 'uint112' },
            { name: 'position', internalType: 'uint64', type: 'uint64' },
            { name: 'isProvider', internalType: 'bool', type: 'bool' },
        ],
        name: 'modifyExistingOrder',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'vault', internalType: 'address', type: 'address' },
            { name: 'adapter', internalType: 'address', type: 'address' },
        ],
        name: 'modifyVaultAdapter',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        name: 'pools',
        outputs: [
            { name: 'asset', internalType: 'address', type: 'address' },
            { name: 'vault', internalType: 'address', type: 'address' },
            { name: 'adapter', internalType: 'address', type: 'address' },
            { name: 'lockupPeriod', internalType: 'uint32', type: 'uint32' },
            { name: 'rate', internalType: 'uint128', type: 'uint128' },
            { name: 'addInterestRate', internalType: 'uint128', type: 'uint128' },
            { name: 'packetSize', internalType: 'uint256', type: 'uint256' },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            { name: '', internalType: 'bytes32', type: 'bytes32' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'providerQueue',
        outputs: [
            { name: 'packetsRemaining', internalType: 'uint256', type: 'uint256' },
            { name: 'depositedShares', internalType: 'uint256', type: 'uint256' },
            { name: 'owner', internalType: 'bytes32', type: 'bytes32' },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
        name: 'queueMarkers',
        outputs: [
            { name: 'providerHead', internalType: 'uint64', type: 'uint64' },
            { name: 'providerTail', internalType: 'uint64', type: 'uint64' },
            { name: 'consumerHead', internalType: 'uint64', type: 'uint64' },
            { name: 'consumerTail', internalType: 'uint64', type: 'uint64' },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'fnftId', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'address', type: 'address' },
            { name: 'tokenHolder', internalType: 'address payable', type: 'address' },
            { name: 'quantity', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'receiveRevestOutput',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'residuals',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
            { name: 'shouldFarm', internalType: 'bool', type: 'bool' },
        ],
        name: 'submitConsumer',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
            { name: 'shouldFarm', internalType: 'bool', type: 'bool' },
        ],
        name: 'submitProducer',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: '', internalType: 'address', type: 'address' }],
        name: 'vaultAdapters',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
    },
] as const

export const resonateAddresses: { [chainid: number]: string } = {
    1: '0x80CA847618030Bc3e26aD2c444FD007279DaF50A'
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// priceProvider
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const priceProviderABI = [
    { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'previousOwner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'OwnershipTransferred',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'token',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'oracle',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'SetTokenOracle',
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
        name: 'getCurrentPrice',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
        name: 'getSafePrice',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            { name: 'token', internalType: 'address', type: 'address' },
            { name: 'quote', internalType: 'address', type: 'address' },
        ],
        name: 'getValueOfAsset',
        outputs: [{ name: 'safePrice', internalType: 'uint256', type: 'uint256' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            { name: 'token', internalType: 'address', type: 'address' },
            { name: 'quote', internalType: 'address', type: 'address' },
        ],
        name: 'pairHasOracle',
        outputs: [{ name: 'hasOracle', internalType: 'bool', type: 'bool' }],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: '', internalType: 'address', type: 'address' }],
        name: 'priceOracle',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            { name: 'token', internalType: 'address', type: 'address' },
            { name: 'oracle', internalType: 'address', type: 'address' },
        ],
        name: 'setTokenOracle',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
        name: 'tokenHasOracle',
        outputs: [{ name: 'hasOracle', internalType: 'bool', type: 'bool' }],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
        name: 'updateSafePrice',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    },
] as const

export const priceProviderAddress =
    '0x0F89ba3F140Ea9370aB05d434B8e32fDf41a6093' as const

export const priceProviderConfig = {
    address: priceProviderAddress,
    abi: priceProviderABI,
} as const