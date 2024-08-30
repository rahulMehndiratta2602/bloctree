"use client";

import { useState } from "react";
import { NFTCard } from "../../components/nftCard";

const Home = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  const [fetchForCollection, setFetchForCollection] = useState(false);

  // Verify API Key Usage
  // console.log("Alchemy API Key:", process.env.ALCHEMY_API_KEY);

  const fetchNFTs = async () => {
    let nfts;
    console.log("fetching NFTs");
    const api_key = process.env.ALCHEMY_API_KEY; // Use the environment variable
    const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTs/`;
    const requestOptions = {
      method: 'GET',
    };

    const fetchURL = !collection
      ? `${baseURL}?owner=${wallet}`
      : `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;

    try {
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json());
      console.log("NFTs:", nfts);
      setNFTs(nfts.ownedNfts || []);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    }
  };

  const fetchNFTsForCollection = async () => {
    if (collection.length) {
      const api_key = process.env.ALCHEMY_API_KEY; // Use the environment variable
      const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTsForCollection/`;
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=true`;
      const requestOptions = {
        method: 'GET',
      };

      try {
        const nfts = await fetch(fetchURL, requestOptions).then(data => data.json());
        console.log("NFTs in collection:", nfts);
        setNFTs(nfts.nfts || []);
      } catch (error) {
        console.error("Error fetching NFTs for collection:", error);
      }
    }
  };

  const handleFetchNFTs = () => {
    if (fetchForCollection) {
      fetchNFTsForCollection();
    } else {
      fetchNFTs();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <input
          disabled={fetchForCollection} // Disable wallet input when fetching by collection
          onChange={(e) => setWalletAddress(e.target.value)}
          value={wallet}
          type="text"
          placeholder="Add your wallet address"
          className="p-2 border rounded-md w-80"
        />
        <input
          onChange={(e) => setCollectionAddress(e.target.value)}
          value={collection}
          type="text"
          placeholder="Add the collection address"
          className="p-2 border rounded-md w-80"
        />
        <label className="text-gray-600 mt-4 flex items-center">
          <input
            onChange={(e) => setFetchForCollection(e.target.checked)}
            type="checkbox"
            className="mr-2"
          />
          Fetch for collection
        </label>
        <button
          className="disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          onClick={handleFetchNFTs}
        >
          Let&apos;s go!
        </button>
      </div>
      <div className='flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center'>
        {
          NFTs.length ? NFTs.map(nft => (
            <NFTCard nft={nft} key={nft.id.tokenId}></NFTCard>
          )) : <p>No NFTs found.</p>
        }
      </div>
    </div>
  );
};

export default Home;
