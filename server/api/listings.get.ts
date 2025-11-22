export default defineEventHandler(async (event): Promise<{ listings: Listing[], pageInfo: Paging }> => {
  const query = getQuery(event);
  const { baseURL, apiToken } = useRuntimeConfig(event);

  const results = await $fetch<FundaApiResponse>(`${baseURL}/${apiToken}/?type=koop&page=${query.page}`)

  return { listings: results.Objects, pageInfo: results.Paging };
})
