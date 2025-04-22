
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload } from "lucide-react";

export default function EarningsSentiment() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2000);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-heading">Earnings Call Sentiment</CardTitle>
        <CardDescription>Upload an earnings call transcript to analyze sentiment and key insights</CardDescription>
      </CardHeader>
      <CardContent>
        {!analysisComplete ? (
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Drop your transcript file here or click to browse
              </p>
              <Input 
                type="file" 
                className="hidden" 
                id="transcript-upload" 
              />
              <label htmlFor="transcript-upload">
                <Button variant="outline" size="sm" className="cursor-pointer">
                  Choose File
                </Button>
              </label>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Or paste transcript text:</p>
              <Textarea 
                placeholder="Paste earnings call transcript here..." 
                className="min-h-[150px]"
              />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Company Information:</p>
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Company Name" />
                <Input placeholder="Ticker Symbol" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Quarter (e.g., Q1 2023)" />
                <Input placeholder="Earnings Date" type="date" />
              </div>
            </div>
            
            {isAnalyzing ? (
              <div className="space-y-2">
                <p className="text-sm font-medium">Analyzing transcript...</p>
                <Progress value={45} className="h-2" />
              </div>
            ) : (
              <Button className="w-full" onClick={handleAnalyze}>
                Analyze Transcript
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Apple Inc. (AAPL)</h3>
                <p className="text-sm text-muted-foreground">Q1 2023 Earnings Call</p>
              </div>
              <Button variant="outline" size="sm" className="flex items-center">
                <FileText className="h-4 w-4 mr-1" />
                Full Report
              </Button>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Overall Sentiment</span>
                  <span className="text-sm font-medium text-bullish">Bullish</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-bullish h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Financial Outlook</span>
                  <span className="text-sm font-medium text-bullish">Positive</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-bullish h-2.5 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Management Confidence</span>
                  <span className="text-sm font-medium text-neutral">Neutral</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-neutral h-2.5 rounded-full" style={{ width: '52%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Forward Guidance</span>
                  <span className="text-sm font-medium text-bullish">Strong</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-bullish h-2.5 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Key Insights</h3>
              <ul className="text-sm space-y-1">
                <li>• Revenue exceeded expectations by 3.2%, driven by services growth</li>
                <li>• Gross margin improved to 43.3%, up 1.2% year-over-year</li>
                <li>• Management highlighted strong product pipeline for coming year</li>
                <li>• Share repurchase program increased by $90 billion</li>
                <li>• China market mentioned as a concern with 6% revenue decline</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Word Frequency Analysis</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Growth</span>
                  <span className="text-bullish font-medium">32 mentions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Innovation</span>
                  <span className="text-bullish font-medium">28 mentions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Challenges</span>
                  <span className="text-bearish font-medium">14 mentions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Services</span>
                  <span className="text-bullish font-medium">36 mentions</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button className="flex-1" variant="outline" onClick={() => setAnalysisComplete(false)}>
                New Analysis
              </Button>
              <Button className="flex-1">
                Save Report
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
