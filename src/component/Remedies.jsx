import React, { useState, useEffect } from "react";
import "./Remedies.css";
import YoutubeRemedies from '../Video/YouTubeRemedies.mp4';

const RemediesSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filters, setFilters] = useState({
    YouTube: true,
    Blog: true,
  });
  const [sortBy, setSortBy] = useState("relevance");

  const diseases = {
    //1
    "cold": [
      { platform: "YouTube", title: "Home Remedies for Cold 2", video: "https://www.youtube.com/embed/8L7F5ffv6bs",date: "2024-02-10"  },
      { platform: "YouTube", title: "Home Remedies for Cold 3", video: "https://www.youtube.com/embed/wyOIDoh14pk", date: "2023-02-10"  },
      { platform: "YouTube", title: "Home Remedies for Cold 4", video: "https://www.youtube.com/embed/J11UcgS3UpY", date: "2024-01-10"  },
     
      { platform: "Blog", title: "Cold Home Remedies Blog", video: "https://exampleblog.com/cold-remedies", date: "2024-02-10"  }
    ],
    //2
   "fever": [
      { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/qCcqte_Qx7w", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/g6sPc5sK0ZM", date: "2023-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/bhGq2C0vgJE" , date: "2024-01-10" },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/lcQfIg9rKBc" , date: "2023-01-10" },
    
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }
    ],
     //3
    "cough": [ { platform: "YouTube", title: "Natural  Treatment 1", video: "https://www.youtube.com/embed/seMe6qThJec", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/wyOIDoh14pk", date: "2024-01-10"  },
      { platform: "YouTube", title: "Natural Treatment 3", video: "https://www.youtube.com/embed/0XOWOY3rZ0k", date: "2023-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/NqEVOcFU4bE" , date: "2023-01-10" },
     
      { platform: "Blog", title: "How to Reduce Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //4
      "headache": [ { platform: "YouTube", title: "Natural  Treatment 1", video: "https://www.youtube.com/embed/JtBMpxp7yhk", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/pKq07s3qWik", date: "2023-02-10"  },
      { platform: "YouTube", title: "Natural Treatment 3", video: "https://www.youtube.com/embed/vW5WFdhJLdI", date: "2024-01-10"  },
      { platform: "YouTube", title: "Natural Treatment 4", video: "https://www.youtube.com/embed/XHdkNj4QoQI", date: "2023-01-10"  },
     
      { platform: "Blog", title: "How to Reduce Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //5
       "flu": [ { platform: "YouTube", title: "Natural  Treatment 1", video: "https://www.youtube.com/embed/8cgPACNONps", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural Treatment 2", video: "https://www.youtube.com/embed/O5CGJRuosOQ", date: "2023-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/HIqFK5x59mY" , date: "2024-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/ghxE7P3vRFA" , date: "2023-01-10" },
     
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //6
      "asthma": [ { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/0qMyiBhxQwE", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/vs7BS0GR9vA" , date: "2024-01-10" },
      { platform: "YouTube", title: "Natural Treatment 3", video: "https://www.youtube.com/embed/1yk-zZapICU", date: "2023-02-10"  },
      { platform: "YouTube", title: "Natural Treatment 4", video: "https://www.youtube.com/embed/a81044nxI9I", date: "2023-01-10"  },
     
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment" , date: "2023-02-10" }],
   //7
      "diabetes": [ { platform: "YouTube", title: "NaturalTreatment 1", video: "https://www.youtube.com/embed/6hD-P9IA3b8", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/5f6911sqH5k" , date: "2024-01-10" },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/e_uug35a6uU", date: "2023-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/w4zSBSM0Vhk", date: "2023-01-10"  },
     
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //8
      "hypertension": [ { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/RDFzhhhm8Js", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural Treatment 2", video: "https://www.youtube.com/embed/J4UelDe-lUM" , date: "2023-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/RDFzhhhm8Js", date: "2024-01-10"  },
      
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment", date: "2023-02-10"  }],
   //9
    "arthritis": [ { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/aC0AYpdzSKI", date: "2024-02-10"  },
        { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/TWsWuNJwodg", date: "2024-01-10"  },
        { platform: "YouTube", title: "Natural Treatment 3", video: "https://www.youtube.com/embed/4yP-UQJ3koY" , date: "2024-02-10" },
        { platform: "YouTube", title: "Natural Treatment 4", video: "https://www.youtube.com/embed/Xy0dZK1ZcQw" , date: "2023-01-10" },
      
        { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment", date: "2023-02-10"  }],
   
   //10
        "back pain": [ 
      { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/vRS0je8eopc", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/r3PZZ63LXEQ" , date: "2023-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/TcGTt4d-lBs" , date: "2023-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/b_J2fgfQNsQ" , date: "2024-01-10" },
     
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment" , date: "2024-02-10" }],
   //11
      "migraine": [ { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/In-pFNsOOO8", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/NE56XyroZY4", date: "2023-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/mortZm5BeUs", date: "2023-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/E6lMGCoRBPA", date: "2024-01-10"  },
     
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //12
      "sinusitis": [ { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/NaGCWrRoTcw", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/WZ91xE7FFfw" , date: "2023-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/BMfSBFPBAl4", date: "2024-01-10"  },
      { platform: "YouTube", title: "NaturalTreatment 4", video: "https://www.youtube.com/embed/47xi2F3W9g", date: "2023-01-10"  },
    
      { platform: "Blog", title: "How to Reduce Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //13
      "insomnia": [ { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/tIq3AGBXTwQ" , date: "2024-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/WVPtF7gr1jw" , date: "2022-01-10" },
      { platform: "YouTube", title: "Natural Treatment 3", video: "https://www.youtube.com/embed/lZS7-eOz9rY" , date: "2024-01-10" },
      { platform: "YouTube", title: "Natural Treatment 4", video: "https://www.youtube.com/embed/5KZcE94tOyE" , date: "2023-02-10" },
     
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment" , date: "2024-02-10" }],
   //14
      "obesity": [ { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/mIX0gA05SNU" , date: "2024-02-10" },
      { platform: "YouTube", title: "Natural Treatment 2", video: "https://www.youtube.com/embed/2KHXCPehOf4" , date: "2023-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/E5BRjTUfPe4E" , date: "2024-01-10" },
      { platform: "YouTube", title: "Natural Treatment 4", video: "https://www.youtube.com/embed/Ff6npdeP5RY" , date: "2023-01-10" },
     
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //15
      "stress": [ { platform: "YouTube", title: "Natural  Treatment 1", video: "https://www.youtube.com/embed/8tOPrHenp3w", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/8RTJCFTwuYc" , date: "2023-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/RrkbKwb288Q", date: "2024-01-10" },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/yT4dyY4VQqI" , date: "2023-01-10" },
     
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment" , date: "2024-02-10" }],
   //16
      "heart disease": [ { platform: "YouTube", title: "Natural  Treatment 1", video: "https://www.youtube.com/embed/oilWYSvhTu0", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/Gt-to1saNzM", date: "2023-01-10"  },
      { platform: "YouTube", title: "Natural Treatment 3", video: "https://www.youtube.com/embed/CZ6ZnX_sjDA" , date: "2024-01-10" },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/52ROwEYGdFU", date: "2023-02-10"  },
      
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //17
      "acne": [ { platform: "YouTube", title: "Natural F Treatment 1", video: "https://www.youtube.com/embed/BAqsl50pSVM", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural r Treatment 2", video: "https://www.youtube.com/embed/m0Zs2vrybs", date: "2024-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/hVhWNThPuxA", date: "2023-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/Z3fqA3fRPfI", date: "2023-02-10"  },

      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //18
      "allergies": [ { platform: "YouTube", title: "Natural  Treatment 1", video: "https://www.youtube.com/embed/epbjQEvJp-Y" , date: "2024-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/HfMqnJPHCiE", date: "2024-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/h1IapdOQev8", date: "2023-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/gUQABt1Kn_Y", date: "2023-02-10"  },
      
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment" , date: "2024-02-10" }],
   //19
      "bronchitis": [ { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/A6h6S34EKpA", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/Bg7mVwj4EZU" , date: "2024-01-10" },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/T2CNzN-RnQw" , date: "2023-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/36m8rObnbDQ" , date: "2023-01-10" },
      
      { platform: "Blog", title: "How to Reduce Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //20
      "cholesterol": [ { platform: "YouTube", title: "Natural  Treatment 1", video: "https://www.youtube.com/embed/o5H77oSicic", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural Treatment 2", video: "https://www.youtube.com/embed/Mvctmj-Z_ek" , date: "2023-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/UL4ufLbTjkU", date: "2024-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/loyKV3-S9MA", date: "2023-01-10"  },
    
      { platform: "Blog", title: "How to Reduce Fever Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //21
      "constipation": [ { platform: "YouTube", title: "Natural  Treatment 1", video: "https://www.youtube.com/embed/ss7Lso_a_Wc", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/wwLykXWfI64", date: "2023-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/7F6PRVqNna8", date: "2024-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/ewdkSC5iLeI", date: "2023-01-10"  },
     
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment" , date: "2024-02-10" }],
   //22
      "depression": [ { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/8RTJCFTwuYc", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/1hlKgjP7PBU" , date: "2024-01-10" },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/Atcv8vgzC00" , date: "2023-01-10" },
      { platform: "YouTube", title: "Natural Treatment 4", video: "https://www.youtube.com/embed/iEQBl8T8XiM", date: "2023-02-10"  },
      

      { platform: "Blog", title: "How to Reduce Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //23
      "dandruff": [ { platform: "YouTube", title: "Natural  Treatment 1", video: "https://www.youtube.com/embed/7XlLFgXLM1s", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural r Treatment 2", video: "https://www.youtube.com/embed/6JEa9BjJ6iQ", date: "2023-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/OVOkVaTjZ1o" , date: "2023-01-10" },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/qtDiMlrPZrQ" , date: "2024-01-10" },
     
      { platform: "Blog", title: "How to Reduce  Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //24
      "eczema": [ { platform: "YouTube", title: "Natural  Treatment 1", video: "https://www.youtube.com/embed/dhdlzVlew8U", date: "2024-02-10"  },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/ipwCN2f3nGw", date: "2024-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/XEfRY8iMrQY", date: "2023-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/X8X9VTmGV_0", date: "2024-02-10"  },
     
      { platform: "Blog", title: "How to Reduce Fever Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],
   //25
      "food poisoning": [ { platform: "YouTube", title: "Natural Treatment 1", video: "https://www.youtube.com/embed/q1ibXTEHNRw" , date: "2024-02-10" },
      { platform: "YouTube", title: "Natural  Treatment 2", video: "https://www.youtube.com/embed/T8XD9XW_JOA", date: "2024-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 3", video: "https://www.youtube.com/embed/E-WfUmNE9BM", date: "2023-01-10"  },
      { platform: "YouTube", title: "Natural  Treatment 4", video: "https://www.youtube.com/embed/bMWCOeTfOLU", date: "2024-02-10"  },
     
      { platform: "Blog", title: "How to Reduce Fever Naturally", video: "https://exampleblog.com/fever-treatment", date: "2024-02-10"  }],

  };

  const fetchRemedies = () => {
    const diseaseKey = query.toLowerCase().trim();
    if (!diseaseKey || !diseases[diseaseKey]) {
      setResults([]);
      setFilteredResults([]);
      return;
    }

    const allResults = diseases[diseaseKey];
    setResults(allResults);

    const filtered = applyFilters(allResults);
    const sorted = applySorting(filtered);
    setFilteredResults(sorted);
  };

  const applyFilters = (resultsToFilter) => {
    return resultsToFilter.filter(item => filters[item.platform]);
  };

  const applySorting = (resultsToSort) => {
    const sortedResults = [...resultsToSort];
    switch (sortBy) {
      case "newest":
        return sortedResults.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      case "oldest":
        return sortedResults.sort((a, b) => (a.date || "").localeCompare(b.date || ""));
      default:
        return sortedResults;
    }
  };

  useEffect(() => {
    if (results.length > 0) {
      const filtered = applyFilters(results);
      const sorted = applySorting(filtered);
      setFilteredResults(sorted);
    }
  }, [filters, sortBy]);

  return (
    <div className="remedies-containerp">
      <div className="search-header">
        <h2>Search for Remedies</h2>
      </div>

      <div className="search-input-group">
        <input 
          type="text" 
          placeholder="Enter disease or condition" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" onClick={fetchRemedies}>Search</button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Results Section */}
        <div className="results-container">
          {filteredResults.length === 0 && query && <p className="no-results">No results found.</p>}
          <div className="space-y-4">
            {filteredResults.map((item, index) => (
              <div key={index} className="border">
                <h3>{item.title}</h3>
                {item.platform === "YouTube" ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={item.video}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <a href={item.video} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Read More</a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Sidebar */}
        <div className="filter-sidebar">
          {results.length > 0 && (
            <div className="youtube-remedies-container">
              <video width="100%" controls className="youtube-remedies-video" autoPlay loop muted>
                <source src={YoutubeRemedies} type="video/mp4" />
              </video>
            </div>
          )}

          <h3>Filter by platform:</h3>
          {Object.keys(filters).map(platform => (
            <label key={platform}>
              <input 
                type="checkbox"
                checked={filters[platform]} 
                onChange={() => setFilters(prev => ({ ...prev, [platform]: !prev[platform] }))}
              />
              <span>{platform}</span>
            </label>
          ))}

          {/* Sorting Dropdown */}
          <h3>Sort by:</h3>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RemediesSearch;
