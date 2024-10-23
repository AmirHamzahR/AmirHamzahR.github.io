import { Bird, Paperclip, Rabbit, Settings, Share, Turtle } from 'lucide-react';
import packageJson from '../../package.json';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];

import { FilterTable } from '@/components/filter-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { searchPlugin } from '@react-pdf-viewer/search';

export const description =
  'An AI Policy Checker with a sidebar navigation and a main content area. The Policy Checker has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.';

export default function PolicyComparisonPage() {
  const navigate = useNavigate();
  const [doc1, setDoc1] = useState<string | null>(null);
  const [doc2, setDoc2] = useState<string | null>(null);

  // const renderToolbar = (Toolbar: (props) => ReactElement) => (
  //   <Toolbar>
  //     {(slots: ToolbarSlot) => {
  //       const { ZoomOut } = slots;
  //       return (
  //         <div
  //           style={{
  //             alignItems: 'center',
  //             display: 'flex',
  //           }}
  //         >
  //           <div style={{ padding: '0px 2px' }}>
  //             <ZoomOut>
  //               {(props) => (
  //                 <button
  //                   style={{
  //                     backgroundColor: '#357edd',
  //                     border: 'none',
  //                     borderRadius: '4px',
  //                     color: '#ffffff',
  //                     cursor: 'pointer',
  //                     padding: '8px',
  //                   }}
  //                   onClick={props.onClick}
  //                 >
  //                   Zoom out
  //                 </button>
  //               )}
  //             </ZoomOut>
  //           </div>
  //           ...
  //         </div>
  //       );
  //     }}
  //   </Toolbar>
  // );

  const defaultLayoutPluginInstance1 = defaultLayoutPlugin();
  const defaultLayoutPluginInstance2 = defaultLayoutPlugin();

  //   let highlightedPhrases1 = [];
  //   let highlightedPhrases2 = [];

  //   for (let key in changes) {
  //     highlightedPhrases1.push(
  //       ...changes[key].highlighted_phrases_from_version_1
  //     );
  //   }

  //   for (let key in changes) {
  //     highlightedPhrases2.push(
  //       ...changes[key].highlighted_phrases_from_version_2
  //     );
  //   }

  //   console.log(highlightedPhrases1);

  const searchPluginInstance1 = searchPlugin({
    //   keyword: changes.map(
    //     (change) => change.highlighted_phrases_from_version_1[0]
    //   ),
  });

  const searchPluginInstance2 = searchPlugin({
    //   keyword: changes.map(
    //     (change) => change.highlighted_phrases_from_version_2[0]
    //   ),
  });

  function handleDoc1Upload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0]; // Get the first uploaded file
    console.log('Uploaded file:', file);
    console.log('File name:', file.name);
    console.log('File size (bytes):', file.size);
    console.log('File type:', file.type);
    setDoc1(URL.createObjectURL(file));
  }

  function handleDoc2Upload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0]; // Get the first uploaded file

    console.log('Uploaded file:', file);
    console.log('File name:', file.name);
    console.log('File size (bytes):', file.size);
    console.log('File type:', file.type);
    setDoc2(URL.createObjectURL(file));

    // use FileReader
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target?.result);
    };
    reader.readAsText(file);
  }

  return (
    /*MAIN SETTINGS*/
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-5">
        <h1 className="text-xl font-semibold">Policy Comparison</h1>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Settings className="size-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="max-h-[80vh]">
            <DrawerHeader>
              <DrawerTitle>Configuration</DrawerTitle>
              <DrawerDescription>
                Configure the settings for the model and messages.
              </DrawerDescription>
            </DrawerHeader>
            <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Settings
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="model">Model</Label>
                  <Select>
                    <SelectTrigger
                      id="model"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="genesis">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Rabbit className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{' '}
                              <span className="font-medium text-foreground">
                                Genesis
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Our fastest model for general use cases.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="explorer">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Bird className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{' '}
                              <span className="font-medium text-foreground">
                                Explorer
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Performance and speed for efficiency.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{' '}
                              <span className="font-medium text-foreground">
                                Quantum
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              The most powerful model for complex computations.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="temperature">Temperature</Label>
                  <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="top-p">Top P</Label>
                  <Input id="top-p" type="number" placeholder="0.7" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="top-k">Top K</Label>
                  <Input id="top-k" type="number" placeholder="0.0" />
                </div>
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Messages
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="system">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="assistant">Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="content">Content</Label>
                  <Textarea id="content" placeholder="You are a..." />
                </div>
              </fieldset>
            </form>
          </DrawerContent>
        </Drawer>
        <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
          <Share className="size-3.5" />
          Share
        </Button>
      </header>

      {/*CONFIGURATION*/}
      <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="relative hidden flex-col items-start gap-8 md:flex"
          x-chunk="dashboard-03-chunk-0"
        >
          <form className="grid w-full items-start gap-6">
            <fieldset className="grid grid-cols-2 gap-6 rounded-lg border p-3">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Documents
              </legend>
              <div className="grid gap-3">
                {/* <Label htmlFor="doc1">Document 1</Label>
                    <Input id="doc1" type="file" /> */}
                <Label htmlFor="doc1">Document 1</Label>

                <Card className="hover:bg-gray-100 relative gap-4 rounded-md p-1 cursor-pointer">
                  {doc1 ? (
                    <div className="flex gap-4 justify-center items-center">
                      <p className="text-sm">
                        {doc1.length > 26 ? `${doc1.slice(0, 26)}...` : doc1}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-4 justify-center items-center">
                      <Paperclip className="size-4" />
                      <p className="text-sm">Upload</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept=".pdf"
                    id="doc1Upload"
                    className="absolute inset-0 w-full h-full top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0"
                    onChange={(e) => {
                      handleDoc1Upload(e);
                    }}
                  />
                </Card>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="doc2" className="cursor-pointer">
                  Document 2
                </Label>
                {/* <Input id="doc2" type="file" /> */}
                {/* <Card className="flex justify-center items-center gap-4 rounded-md p-1 relative">
                      <div className="flex gap-4 justify-center items-center">
                        <Paperclip className="size-4" />
                        <p className="text-sm">Upload</p>
                      </div>
  
                      <input
                        type="file"
                        className="absolute top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0"
                      />
                    </Card> */}
                <Card className="hover:bg-gray-100 relative gap-4 rounded-md p-1 cursor-pointer">
                  {doc2 ? (
                    <div className="flex gap-4 justify-center items-center">
                      <p className="text-sm">
                        {doc2.length > 26 ? `${doc2.slice(0, 26)}...` : doc2}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-4 justify-center items-center">
                      <Paperclip className="size-4" />
                      <p className="text-sm">Upload</p>
                    </div>
                  )}

                  <input
                    type="file"
                    accept=".pdf"
                    id="doc1Upload"
                    className="absolute inset-0 w-full h-full top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0"
                    onChange={(e) => {
                      handleDoc2Upload(e);
                    }}
                  />
                </Card>
              </div>
              {/*
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-p">Top P</Label>
                      <Input id="top-p" type="number" placeholder="0.7" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Top K</Label>
                      <Input id="top-k" type="number" placeholder="0.0" />
                    </div>
                  </div> */}
            </fieldset>
            <fieldset className="grid gap-6 rounded-lg border p-3">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Document Contents
              </legend>
              <div className="grid gap-3 overflow-x-auto w-full">
                <FilterTable secondColumn="Impact" />
                {/* <Label htmlFor="role">Role</Label>
                    <Select defaultValue="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="assistant">Assistant</SelectItem>
                      </SelectContent>
                    </Select> */}
              </div>
            </fieldset>
          </form>
        </div>

        {/*CHAT ELEMENT*/}
        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
          {/*OUTPUT*/}
          <Badge variant="outline" className="absolute right-3 top-3">
            Output
          </Badge>
          <div className="flex h-[700px] space-x-4">
            <div className="h-full w-full">
              {doc1 ? (
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                >
                  <Viewer
                    fileUrl={doc1}
                    plugins={[
                      defaultLayoutPluginInstance1,
                      searchPluginInstance1,
                    ]}
                  />
                </Worker>
              ) : (
                <p>No doc1 available</p>
              )}
            </div>
            <div className="h-full w-full">
              {doc2 ? (
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                >
                  <Viewer
                    fileUrl={doc2}
                    plugins={[
                      defaultLayoutPluginInstance2,
                      searchPluginInstance2,
                    ]}
                  />
                </Worker>
              ) : (
                <p>No doc2 available</p>
              )}
            </div>
          </div>
          {/* <form
                className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                x-chunk="dashboard-03-chunk-1"
              >
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center p-3 pt-0">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Paperclip className="size-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Attach File</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Mic className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Use Microphone</TooltipContent>
                  </Tooltip>
                  <Button type="submit" size="sm" className="ml-auto gap-1.5">
                    Send Message
                    <CornerDownLeft className="size-3.5" />
                  </Button>
                </div>
              </form> */}
        </div>
      </main>
    </div>
  );
}
