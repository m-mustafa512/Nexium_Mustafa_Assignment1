"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Quote, categories, getQuotesByCategory } from "@/lib/quotes";
import { QuoteCard } from "@/components/quote-card";
import { Sparkles, RefreshCw } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateQuotes = async () => {
    if (!selectedCategory) return;
    
    setIsLoading(true);
    
    // Add a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const quotes = getQuotesByCategory(selectedCategory, 3);
    setDisplayedQuotes(quotes);
    setIsLoading(false);
  };

  const handleRefresh = () => {
    if (selectedCategory) {
      handleGenerateQuotes();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Quote Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Discover inspiring quotes from great minds across different categories. 
              Find the perfect words to motivate, inspire, and enlighten your day.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Quote Generation Form */}
        <Card className="max-w-2xl mx-auto mb-16 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Generate Inspiring Quotes
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Choose a category to discover three carefully selected quotes
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                Select Category
              </Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full h-12 border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="Choose a quote category..." />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-3">
              <Button
                onClick={handleGenerateQuotes}
                disabled={!selectedCategory || isLoading}
                className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Quotes
                  </>
                )}
              </Button>
              
              {displayedQuotes.length > 0 && (
                <Button
                  onClick={handleRefresh}
                  variant="outline"
                  className="h-12 px-6 border-gray-300 hover:bg-gray-50"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quotes Display */}
        {displayedQuotes.length > 0 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {categories.find(cat => cat.value === selectedCategory)?.label} Quotes
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
              {displayedQuotes.map((quote, index) => (
                <QuoteCard
                  key={quote.id}
                  quote={quote}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {displayedQuotes.length === 0 && !isLoading && (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Inspired?
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Select a category above and click "Generate Quotes" to discover three inspiring quotes that will brighten your day.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}