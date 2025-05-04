import React from "react";


interface NewsItem {
    title: string;
    summary: string;
    readMore: string;
  }
  
  interface SummaryProps {
    summary: NewsItem[];
  }

const Summary = ({ summary }: SummaryProps) => {
    return (
        <div className="p-6 space-y-6">
          {summary.length === 0 ? (
            <p>No news loaded yet.</p>
          ) : (
            summary.map((item, index) => (
              <div key={index} className="border rounded-xl p-4 shadow">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="mt-2">{item.summary}</p>
                <a
                  href={item.readMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-2 block"
                >
                  Read more
                </a>
              </div>
            ))
          )}
        </div>
    )
}


export default Summary;