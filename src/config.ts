export type ModelConfig = {
  apiKey: string;
  httpReferer: string;
  xTitle: string;

  provider: {
    sort: {
      by: string;
      partition: string;
    };
  };

  models: string[];
  temperature: number;

  memory: {
    dbUri: string;
  };
};

console.assert(process.env.OPENAI_API_KEY, 'OPENAI_API_KEY is not set in environment variables');

export const config: ModelConfig = {
  apiKey: process.env.OPENAI_API_KEY!,
  // httpReferer: process.env.OPENROUTER_HTTP_REFERER!,
  // xTitle: process.env.OPENROUTER_X_TITLE!, 
  httpReferer: 'http://localhost:3000',
  xTitle: 'song-highlights',
  models: [
    // "nvidia/llama-nemotron-rerank-vl-1b-v2:free",
    // "cohere/north-mini-code:free"
    'nex-agi/nex-n2-pro:free'
  ],
  provider: {
    sort: {
      by: 'throughput', // Route to model with highest throughput (fastest response)
      partition: 'none',
    },
  },
  temperature: 0.7,
  memory: {
    dbUri: 'postgresql://postgres:mysecretpassword@localhost:5432/song_recommender',
  }
};
