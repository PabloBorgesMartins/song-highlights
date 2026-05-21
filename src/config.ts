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
  httpReferer: process.env.OPENROUTER_HTTP_REFERER!,
  xTitle: process.env.OPENROUTER_X_TITLE!,
  models: [
    // 'qwen/qwen3-coder-next',
    // https://openrouter.ai/models?fmt=cards&max_price=0&order=throughput-high-to-low&supported_parameters=structured_outputs%2Cresponse_format
    // 'upstage/solar-pro-3:free',
    // 'gpt-oss-120b:free',
    // 'gpt-oss-120b:free'
    'openrouter/owl-alpha',
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
