import { Bird, Paperclip, Rabbit, Settings, Share, Turtle } from 'lucide-react';
import packageJson from '../../package.json';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];

import { changes } from '@/data/matching-section';

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
import React, { useState } from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Import styles
import {
  HighlightArea,
  highlightPlugin,
  RenderHighlightsProps,
  Trigger,
} from '@react-pdf-viewer/highlight';

import '@react-pdf-viewer/highlight/lib/styles/index.css';
import { searchPlugin } from '@react-pdf-viewer/search';

import { highlightedRect1 } from '@/data/highlighted_rect1';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

export const description =
  'An AI Policy Checker with a sidebar navigation and a main content area. The Policy Checker has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.';

interface FileState {
  fileName: string;
  fileURL: string;
}

export default function PolicyCheckerPage() {
  const [doc1, setDoc1] = useState<FileState | null>(null);
  const [doc2, setDoc2] = useState<FileState | null>(null);
  const [doc3, setDoc3] = useState<FileState | null>(null);

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
  const defaultLayoutPluginInstance3 = defaultLayoutPlugin();
  const defaultLayoutPluginInstance4 = defaultLayoutPlugin();

  const pageHeight = 842; // If units are in points
  const pageWidth = 595;

  const areas: HighlightArea[] = [
    {
      pageIndex: 3,
      height: 1.55401,
      width: 28.1674,
      left: 27.5399,
      top: 15.0772,
    },
    {
      pageIndex: 3,
      height: 1.32637,
      width: 37.477,
      left: 55.7062,
      top: 15.2715,
    },
    {
      pageIndex: 3,
      height: 1.55401,
      width: 28.7437,
      left: 16.3638,
      top: 16.6616,
    },
  ];

  function calculatePercentageWidth(width: number) {
    return (width * 100) / pageWidth;
  }

  function calculatePercentageHeight(height: number) {
    return (height * 100) / pageHeight;
  }

  // const cleanedResults = results.map((result) => {
  //   return {
  //     pageIndex: result.page_new,
  //     height: result.bbox_new.h,
  //     width: result.bbox_new.w,
  //     left: result.bbox_new.x,
  //     top: result.bbox_new.y,
  //   };
  // });

  const cleanedResults = highlightedRect1.map((rect1) => {
    return {
      pageIndex: rect1[4],
      height: calculatePercentageHeight(rect1[3] - rect1[1]),
      width: calculatePercentageWidth(rect1[2] - rect1[0]),
      left: calculatePercentageWidth(rect1[0]),
      top: calculatePercentageHeight(rect1[1]),
    };
  });

  console.log(cleanedResults[0]);

  // console.log(cleanedResults);

  const renderHighlights = (props: RenderHighlightsProps) => (
    <div>
      {cleanedResults
        .filter((area) => {
          // console.log(area);

          return area.pageIndex === props.pageIndex;
        })
        .map((area, idx) => (
          <div
            key={idx}
            className="highlight-area"
            style={Object.assign(
              {},
              {
                background: 'yellow',
                opacity: 0.5,
              },
              // Calculate the position
              // to make the highlight area displayed at the desired position
              // when users zoom or rotate the document
              props.getCssProperties(area, props.rotation)
            )}
          />
        ))}
    </div>
  );

  const highlightPluginInstance = highlightPlugin({
    renderHighlights,
    trigger: Trigger.None,
  });

  const searchPluginInstance1 = searchPlugin({
    keyword: changes
      .map((change) => {
        if (
          change.highlighted_phrases_from_version_1[0] !== null &&
          change.highlighted_phrases_from_version_1[0] !== undefined
        ) {
          return change.highlighted_phrases_from_version_1[0];
        }
        // Return something else if null, or skip processing.
        return null; // Alternatively, you can filter out null entries later.
      })
      .filter((item) => item !== null), // Filter out the null values after mapping
  });

  //   console.log(
  //     changes.map((change) => {
  //       change.highlighted_phrases_from_version_1[0] !=
  // })
  //   );

  const searchPluginInstance2 = searchPlugin({
    keyword: changes
      .map((change) => {
        if (
          change.highlighted_phrases_from_version_1[0] !== null &&
          change.highlighted_phrases_from_version_1[0] !== undefined
        ) {
          return change.highlighted_phrases_from_version_1[0];
        }
        // Return something else if null, or skip processing.
        return null; // Alternatively, you can filter out null entries later.
      })
      .filter((item) => item !== null), // Filter out the null values after mapping
  });

  function handleDoc1Upload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0]; // Get the first uploaded file

    console.log('Uploaded file:', file);
    console.log('File name:', file.name);
    console.log('File size (bytes):', file.size);
    console.log('File type:', file.type);
    setDoc1({
      fileName: file.name,
      fileURL: URL.createObjectURL(file),
    });

    // use FileReader
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target?.result);
    };
    reader.readAsText(file);
  }

  function handleDoc2Upload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0]; // Get the first uploaded file

    console.log('Uploaded file:', file);
    console.log('File name:', file.name);
    console.log('File size (bytes):', file.size);
    console.log('File type:', file.type);
    setDoc2({
      fileName: file.name,
      fileURL: URL.createObjectURL(file),
    });

    // use FileReader
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target?.result);
    };
    reader.readAsText(file);
  }

  function handleDoc3Upload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0]; // Get the first uploaded file

    console.log('Uploaded file:', file);
    console.log('File name:', file.name);
    console.log('File size (bytes):', file.size);
    console.log('File type:', file.type);
    setDoc3({
      fileName: file.name,
      fileURL: URL.createObjectURL(file),
    });

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
        <h1 className="text-xl font-semibold">Policy Checker</h1>
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
                <Label htmlFor="doc1">Old Document</Label>

                <Card className="hover:bg-gray-100 relative gap-4 rounded-md p-1 cursor-pointer">
                  {doc1 ? (
                    <div className="flex gap-4 justify-center items-center">
                      <p className="text-sm">
                        {doc1.fileName.length > 26
                          ? `${doc1.fileName.slice(0, 26)}...`
                          : doc1.fileName}
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
                  New Document
                </Label>
                <Card className="hover:bg-gray-100 relative gap-4 rounded-md p-1 cursor-pointer">
                  {doc2 ? (
                    <div className="flex gap-4 justify-center items-center">
                      <p className="text-sm">
                        {doc2.fileName.length > 26
                          ? `${doc2.fileName.slice(0, 26)}...`
                          : doc2.fileName}
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
                    id="doc2Upload"
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
                <FilterTable secondColumn="Difference" />
              </div>
            </fieldset>
          </form>
        </div>

        {/*CHAT ELEMENT*/}
        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
          {/* OUTPUT */}
          <Badge variant="outline" className="absolute right-3 top-3">
            Output
          </Badge>

          <div className="flex h-[600px] space-x-4 flex-grow">
            <div className="w-full h-full flex-grow">
              {doc1 ? (
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                >
                  <Viewer
                    fileUrl={doc1.fileURL}
                    plugins={[
                      defaultLayoutPluginInstance1,
                      searchPluginInstance1,
                      highlightPluginInstance,
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
                    fileUrl={doc2.fileURL}
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
        </div>
      </main>
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
                <Label htmlFor="doc3">New Document</Label>

                <Card className="hover:bg-gray-100 relative gap-4 rounded-md p-1 cursor-pointer">
                  {doc2 ? (
                    <div className="flex gap-4 justify-center items-center">
                      <p className="text-sm">
                        {doc2.fileName.length > 26
                          ? `${doc2.fileName.slice(0, 26)}...`
                          : doc2.fileName}
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
                    id="doc3Upload"
                    className="absolute inset-0 w-full h-full top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0"
                    onChange={(e) => {
                      handleDoc2Upload(e);
                    }}
                  />
                </Card>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="doc4" className="cursor-pointer">
                  Internal Policy Document
                </Label>
                <Card className="hover:bg-gray-100 relative gap-4 rounded-md p-1 cursor-pointer">
                  {doc3 ? (
                    <div className="flex gap-4 justify-center items-center">
                      <p className="text-sm">
                        {doc3.fileName.length > 26
                          ? `${doc3.fileName.slice(0, 26)}...`
                          : doc3.fileName}
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
                    id="docUpload"
                    className="absolute inset-0 w-full h-full top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0"
                    onChange={(e) => {
                      handleDoc3Upload(e);
                    }}
                  />
                </Card>
              </div>
            </fieldset>
            <fieldset className="grid gap-6 rounded-lg border p-3">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Document Contents
              </legend>
              <div className="grid gap-3 overflow-x-auto w-full">
                <FilterTable secondColumn="Impact" />
              </div>
            </fieldset>
          </form>
        </div>

        {/*CHAT ELEMENT*/}
        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
          {/* OUTPUT */}
          <Badge variant="outline" className="absolute right-3 top-3">
            Output
          </Badge>

          <div className="flex h-[700px] space-x-4 flex-grow">
            <div className="w-full h-full flex-grow">
              {doc2 ? (
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                >
                  <Viewer
                    fileUrl={doc2.fileURL}
                    plugins={[
                      defaultLayoutPluginInstance3,
                      // searchPluginInstance1,
                    ]}
                  />
                </Worker>
              ) : (
                <p>No doc2 available</p>
              )}
            </div>
            <div className="w-full">
              {doc3 ? (
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                >
                  <Viewer
                    fileUrl={doc3.fileURL}
                    plugins={[
                      defaultLayoutPluginInstance4,
                      // searchPluginInstance4,
                    ]}
                  />
                </Worker>
              ) : (
                <p>No doc4 available</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
