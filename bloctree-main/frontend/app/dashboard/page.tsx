"use client"; // Add this line at the top
import React from 'react';

import { use, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Eye, EyeOff, Menu, LogOut } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function Component() {
  const [links, setLinks] = useState([
    { title: "Web3 Project", url: "https://myproject.eth" },
    { title: "NFT Collection", url: "https://opensea.io/mycollection" },
    { title: "Twitter", url: "https://twitter.com/myhandle" },
    { title: "GitHub", url: "https://github.com/myusername" },
  ])

  const publicAddress = "0x1234...5678" // Replace with actual public address or leave empty
  const passkey = "your-secret-passkey-here" // Replace with actual passkey

  const [isPasskeyVisible, setIsPasskeyVisible] = useState(false)
  const [isWarningOpen, setIsWarningOpen] = useState(false)

  const handleRevealPasskey = () => {
    if (!isPasskeyVisible) {
      setIsWarningOpen(true)
    } else {
      setIsPasskeyVisible(false)
    }
  }

  const handleConfirmReveal = () => {
    setIsWarningOpen(false)
    setIsPasskeyVisible(true)
  }

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logout clicked")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 p-4 sm:p-6 md:p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">BlocTree</h1>
          <Button 
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white transition-colors"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </header>
        
        <Card className="bg-gray-800 border-gray-700 shadow-xl mb-8">
          <CardHeader className="border-b border-gray-700 pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20 border-2 border-purple-500">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User Avatar" />
                  <AvatarFallback>PA</AvatarFallback>
                </Avatar>
                <div>
                  {publicAddress && (
                    <CardTitle className="text-2xl font-bold text-purple-300">Public Address</CardTitle>
                  )}
                  {publicAddress && (
                    <p className="text-gray-400 break-all">{publicAddress}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-gray-700 text-purple-300 hover:bg-gray-600 transition-colors duration-300"
                  onClick={handleRevealPasskey}
                >
                  {isPasskeyVisible ? (
                    <>
                      <EyeOff className="h-4 w-4 mr-2" />
                      Hide Passkey
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 mr-2" />
                      Reveal Passkey
                    </>
                  )}
                </Button>
                <Button variant="outline" size="icon" className="bg-gray-700 text-purple-300 hover:bg-gray-600 transition-colors duration-300">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Menu</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {isPasskeyVisible && (
              <div className="mb-6 p-4 bg-gray-700 border border-purple-500 text-purple-300 rounded">
                <h3 className="font-bold mb-2">Your Passkey:</h3>
                <p className="font-mono bg-gray-800 p-2 rounded">{passkey}</p>
                <p className="mt-2 text-sm text-gray-400">Warning: Keep this passkey secret and secure.</p>
              </div>
            )}
            <div className="space-y-4">
              {links.map((link, index) => (
                <Card key={index} className="bg-gray-700 hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <ExternalLink className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-purple-300">{link.title}</h3>
                        <p className="text-sm text-gray-400">{link.url}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={isWarningOpen} onOpenChange={setIsWarningOpen}>
        <AlertDialogContent className="bg-gray-800 text-white border border-purple-500">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-purple-300">Warning: Sensitive Information</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              You are about to reveal your passkey. This is sensitive information that should not be shared with anyone. 
              Are you sure you want to proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmReveal} className="bg-purple-600 text-white hover:bg-purple-700">Reveal Passkey</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}