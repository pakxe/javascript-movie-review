const KEY_LIST: Record<string, string | undefined> = {
  API_KEY: process.env.API_KEY,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  TMDB_API_BASE_URL: process.env.TMDB_API_BASE_URL,
};

function getEnvVariable(key: string): string {
  const value = KEY_LIST[key] ?? '';

  if (value === '') throw new Error(`${key}에 대한 환경 변수를 찾을 수 없습니다.`);

  return value;
}

export default getEnvVariable;
