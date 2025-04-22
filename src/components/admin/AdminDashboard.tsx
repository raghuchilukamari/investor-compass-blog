
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ChartBarIncreasing, FileText, Settings, TrendingDown, TrendingUp, Upload } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function AdminDashboard() {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
    }, 2000);
  };

  return (
    <div className="container py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage content, analytics, and system settings
          </p>
        </div>
        <Button>
          <Settings className="mr-2 h-4 w-4" /> 
          System Settings
        </Button>
      </div>
      
      <Tabs defaultValue="content" className="space-y-4">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="signals">Market Signals</TabsTrigger>
          <TabsTrigger value="transcripts">Transcripts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Articles</CardTitle>
                <CardDescription>Manage your published content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Create New Article
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    15 articles published this month
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Content performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Page Views:</span>
                    <span className="text-sm font-medium">28,429</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Avg. Time on Page:</span>
                    <span className="text-sm font-medium">4:32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Most Popular:</span>
                    <span className="text-sm font-medium">Fed Analysis</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>User Engagement</CardTitle>
                <CardDescription>Comments and interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">New Comments:</span>
                    <span className="text-sm font-medium">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Pending Review:</span>
                    <span className="text-sm font-medium">12</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Moderate Comments
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="signals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Market Signal Manual Override</CardTitle>
              <CardDescription>Adjust automatic signal calculations for specific indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="indicator-select">Select Indicator</Label>
                    <Select defaultValue="inflation">
                      <SelectTrigger id="indicator-select" className="w-[180px]">
                        <SelectValue placeholder="Select indicator" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inflation">Inflation (CPI)</SelectItem>
                        <SelectItem value="unemployment">Unemployment Rate</SelectItem>
                        <SelectItem value="gdp">GDP Growth</SelectItem>
                        <SelectItem value="fedfunds">Fed Funds Rate</SelectItem>
                        <SelectItem value="yieldcurve">Yield Curve</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="pt-2 space-y-2">
                    <Label>Current Signal</Label>
                    <div className="flex items-center space-x-4 rounded-md border p-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral/20">
                        <ChartBarIncreasing className="h-4 w-4 text-neutral" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Neutral</p>
                        <p className="text-xs text-muted-foreground">
                          Automatically calculated based on recent data
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <Label>Manual Override</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bullish/20 cursor-pointer hover:bg-bullish/30">
                          <TrendingUp className="h-6 w-6 text-bullish" />
                        </div>
                        <span className="text-xs">Bullish</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/20 cursor-pointer hover:bg-neutral/30 ring-2 ring-neutral">
                          <ChartBarIncreasing className="h-6 w-6 text-neutral" />
                        </div>
                        <span className="text-xs">Neutral</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bearish/20 cursor-pointer hover:bg-bearish/30">
                          <TrendingDown className="h-6 w-6 text-bearish" />
                        </div>
                        <span className="text-xs">Bearish</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <Label htmlFor="override-notes">Override Notes (Required)</Label>
                    <Textarea
                      id="override-notes"
                      placeholder="Explain reasoning for manual override..."
                      className="resize-none"
                    />
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="override-active" />
                      <Label htmlFor="override-active">
                        Override Active
                      </Label>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      When enabled, manual override will take precedence over automatic calculations
                    </p>
                  </div>
                  
                  <div className="pt-4 flex justify-end space-x-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Override</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="transcripts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings Call Transcript Manager</CardTitle>
              <CardDescription>Upload and manage earnings call transcripts for sentiment analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">
                    Upload Earnings Call Transcript
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 text-center max-w-md">
                    Drag and drop a PDF or text file, or click to browse your computer. 
                    Supported formats: PDF, TXT, DOCX.
                  </p>
                  <Input 
                    type="file" 
                    className="hidden" 
                    id="transcript-upload" 
                    accept=".pdf,.txt,.docx"
                  />
                  <div className="flex space-x-4">
                    <label htmlFor="transcript-upload">
                      <Button variant="outline" className="cursor-pointer">
                        Browse Files
                      </Button>
                    </label>
                    <Button onClick={handleUpload} disabled={isUploading}>
                      {isUploading ? "Uploading..." : "Upload & Analyze"}
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Recent Transcripts</h3>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                  
                  <div className="border rounded-md divide-y">
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium">Apple Inc. Q1 2023</p>
                        <p className="text-sm text-muted-foreground">Uploaded Apr 10, 2023</p>
                      </div>
                      <Button variant="ghost" size="sm">View Analysis</Button>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium">Microsoft Q1 2023</p>
                        <p className="text-sm text-muted-foreground">Uploaded Apr 5, 2023</p>
                      </div>
                      <Button variant="ghost" size="sm">View Analysis</Button>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium">Tesla Q1 2023</p>
                        <p className="text-sm text-muted-foreground">Uploaded Apr 2, 2023</p>
                      </div>
                      <Button variant="ghost" size="sm">View Analysis</Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 space-y-2">
                  <h3 className="text-lg font-medium">Fetch From URL</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Enter a URL to automatically scrape and analyze earnings call transcript content
                  </p>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="https://example.com/transcript"
                      className="flex-1"
                    />
                    <Button>Fetch</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
