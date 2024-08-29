import React from 'react';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 p-4 flex flex-col">
                <h1 className="text-xl font-bold mb-8">Solana Wallet</h1>
                <div className="space-y-4">
                    {/* Wallet Connection Section */}
                    <div className="p-4 bg-gray-700 rounded-lg">
                        <h2 className="text-lg">Wallet Connection</h2>
                        {/* Wallet details go here */}
                    </div>
                    {/* Blockchain Blogs */}
                    <div className="p-4 bg-gray-700 rounded-lg">
                        <h2 className="text-lg">Blockchain Blogs</h2>
                        {/* Blog list */}
                    </div>
                    {/* NFT Gallery */}
                    <div className="p-4 bg-gray-700 rounded-lg">
                        <h2 className="text-lg">NFT Gallery</h2>
                        {/* NFT gallery */}
                    </div>
                    {/* Users On Activity Feed */}
                    <div className="p-4 bg-gray-700 rounded-lg">
                        <h2 className="text-lg">Users On Activity Feed</h2>
                        {/* Activity feed */}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    {/* Detailed sections go here */}
                    <div className="col-span-2">
                        {/* Main Wallet Overview */}
                        <div className="p-6 bg-gray-700 rounded-lg">
                            <h2 className="text-xl font-bold">NFT Gallery</h2>
                            {/* NFT gallery details */}
                        </div>
                    </div>

                    {/* Blockchain Blogs */}
                    <div className="p-6 bg-gray-700 rounded-lg">
                        <h2 className="text-xl font-bold">Blockchain Blogs</h2>
                        {/* Blog details */}
                    </div>

                    {/* Users On Activity Feed */}
                    <div className="p-6 bg-gray-700 rounded-lg">
                        <h2 className="text-xl font-bold">Activity Feed</h2>
                        {/* Activity feed details */}
                    </div>
                </div>
            </div>
        </div>
    );
}
