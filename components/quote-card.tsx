"use client";

import { Quote } from "@/lib/quotes";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface QuoteCardProps {
  quote: Quote;
  index: number;
}

export function QuoteCard({ quote, index }: QuoteCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardContent className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            {index + 1}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-50"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
          "{quote.text}"
        </blockquote>
        
        <div className="flex items-center">
          <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-600 mr-4"></div>
          <cite className="text-gray-600 font-semibold not-italic">
            {quote.author}
          </cite>
        </div>
      </CardContent>
    </Card>
  );
}