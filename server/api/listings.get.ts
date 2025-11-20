export default defineEventHandler(async (event): Promise<{ listings: Listing[], pageInfo: Paging }> => {
  const query = getQuery(event);
  const config = useRuntimeConfig(event);

  const apiToken = config.apiToken;
  const results = await $fetch<FundaApiResponse>(`${config.baseURL}/${apiToken}/?type=koop&page=${query.page}`)

  return { listings: results.Objects, pageInfo: results.Paging };
})
