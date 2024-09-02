"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { usePhantom } from "./usePhantom";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert";

export default function Component() {
  const { pubKey } = usePhantom();
  const [showPasskey, setShowPasskey] = useState(false);
  const [passkey, setPasskey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleViewPasskey = () => {
    setShowPasskey(true);
  };

  useEffect(() => {
    if (pubKey) {
      const fetchPasskey = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`api to get the passkey `);
          if (!response.ok) {
            throw new Error("Failed to fetch passkey");
          }
          const data = await response.json();
          setPasskey(data.passkey);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchPasskey();
    }
  }, [pubKey]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Wallet Details</CardTitle>
        <CardDescription>Manage your wallet securely</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label>Wallet Address</Label>
          {pubKey ? <div className="font-medium text-lg">{pubKey.toString()}</div> : "Loading..."}
        </div>
        <div className="grid gap-2">
          <Label>Passkey</Label>
          <div className="font-medium text-lg flex items-center">
            {loading ? "Loading..." : showPasskey ? passkey || "Error fetching passkey" : "*********************"}
            <Button variant="ghost" size="icon" className="ml-2 hover:bg-muted/50" onClick={handleViewPasskey}>
              <EyeIcon className="h-5 w-5" />
              <span className="sr-only">View passkey</span>
            </Button>
          </div>
        </div>
      </CardContent>
      {showPasskey && (
        <AlertDialog>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confidential Information</AlertDialogTitle>
              <AlertDialogDescription>
                The passkey is confidential information. Do you want to proceed?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>View Passkey</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </Card>
  );
}

function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
