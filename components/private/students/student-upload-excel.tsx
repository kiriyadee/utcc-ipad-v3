"use client";

import { useState } from "react";
import { X, Upload, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function StudentUploadExcel() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && isValidFileType(droppedFile)) {
      setFile(droppedFile);
      simulateUpload();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && isValidFileType(selectedFile)) {
      setFile(selectedFile);
      simulateUpload();
    }
  };

  const isValidFileType = (file: File) => {
    const validTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    return validTypes.includes(file.type);
  };

  const simulateUpload = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="flex space-x-2">
        <Button variant="utcc">Import Excel</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">Add XSL</CardTitle>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div
                className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleFileDrop}
              >
                <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Drag & Drop or{" "}
                  <Label
                    htmlFor="file-upload"
                    className="text-blue-500 cursor-pointer"
                  >
                    Choose file
                  </Label>{" "}
                  to upload
                </p>
                <Input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".csv,.xls,.xlsx"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Supported formats: CVS, XLS, XLSX
                </p>
              </div>
              {file && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{file.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setFile(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <Progress value={progress} className="w-full" />
                  <span className="text-xs text-gray-500">{progress}%</span>
                </div>
              )}
              {/* <div className="mt-4">
                <p className="text-sm text-center text-gray-500 my-2">or</p>
                <p className="text-sm font-medium mb-2">Import from URL</p>
                <div className="flex space-x-2">
                  <Input
                    type="url"
                    placeholder="Add file URL"
                    value={url}
                    onChange={handleUrlChange}
                  />
                  <Button>Upload</Button>
                </div>
              </div> */}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" className="text-sm text-gray-500">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help Center
              </Button>
              <div className="space-x-2">
                {/* <Button variant="ghost" className="mr-2">
                  Cancel
                </Button>
                <Button>Import</Button> */}
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </div>
            </CardFooter>
          </Card>
        </AlertDialogHeader>
        {/* <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
