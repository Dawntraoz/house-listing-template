export default defineEventHandler(async (event): Promise<FundaListing> => {
  const id = getRouterParam(event, 'id')
  const { baseURL, apiToken } = useRuntimeConfig(event);

  return await $fetch<FundaListing>(`${baseURL}/detail/${apiToken}/koop/${id}`);
})
